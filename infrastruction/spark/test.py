from pyspark.sql import SparkSession
from pyspark.sql.functions import from_json, col
from pyspark.sql.types import StructType, StructField, StringType, IntegerType

# Create a Spark session
spark = SparkSession.builder \
    .appName("Streaming from Kafka") \
    .config("spark.streaming.stopGracefullyOnShutdown", True) \
    .config('spark.jars.packages', 'org.apache.spark:spark-sql-kafka-0-10_2.12:3.2.0') \
    .config("spark.sql.shuffle.partitions", 4) \
    .master("local[*]") \
    .getOrCreate()

# Define the schema for your JSON data
json_schema = StructType([
    StructField("id", IntegerType(), True),
    StructField("title", StringType(), True),
    StructField("category", StringType(), True),
    StructField("new_price", StringType(), True),
    StructField("Disponible", StringType(), True),
    StructField("old_price", StringType(), True),
    StructField("desc", StringType(), True),
    StructField("image", StringType(), True)
])

# Read streaming data from Kafka
streaming_df = spark.readStream \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "kafka:9092") \
    .option("subscribe", "allClicks") \
    .option("startingOffsets", "earliest") \
    .load()

# Parse JSON values
json_df = streaming_df.selectExpr("cast(value as string) as json_value")
parsed_df = json_df.select(from_json(col("json_value"), json_schema).alias("parsed_value")).select("parsed_value.*")

# Perform aggregation
result = parsed_df.groupby(["id","title", "category", "new_price", "Disponible", "old_price", "desc", "image"]).count().orderBy(col("count").desc()).limit(5)

#result = parsed_df.select("*").filter(col("id").isin([i for i in filter_result.select("id")]))


# Show the resulting DataFram
to_kafka = result.selectExpr("CAST(id AS STRING) AS key", "to_json(struct(*)) AS value") \
    .writeStream \
    .outputMode("complete") \
    .format("kafka") \
    .option("kafka.bootstrap.servers", "kafka:9092") \
    .option("topic", "top5") \
    .option("checkpointLocation", "/home/jovyan/work/pp/metadata") \
    .start()

to_kafka.awaitTermination()

