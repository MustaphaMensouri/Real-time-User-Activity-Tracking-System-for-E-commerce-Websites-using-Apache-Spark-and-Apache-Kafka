from confluent_kafka import Consumer, KafkaException
import json

conf = {'bootstrap.servers': 'kafka:9092',
        'group.id': 'uuu',
        'auto.offset.reset': 'smallest'}

# Create a Kafka consumer instance
consumer = Consumer(conf)

# Subscribe to a Kafka topic
consumer.subscribe(['top5'])  # Replace with your Kafka topic

try:
    while True:
        # Poll for messages
        msg = consumer.poll(1.0)  # Adjust the timeout as needed

        if msg is None:
            continue
        if msg.error():
            if msg.error().code() == KafkaException._PARTITION_EOF:
                # End of partition event, not an error
                continue
            else:
                print(f"Error: {msg.error()}")
                break

        # Process the received message
        print(f"Received message: {json.loads(msg.value())}")

except KeyboardInterrupt:
    pass
finally:
    # Close down consumer to commit final offsets.
    consumer.close()