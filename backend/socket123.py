from flask import Flask, request
from flask_socketio import SocketIO
from threading import Lock
from confluent_kafka import Consumer, KafkaException
from flask_restful import Resource, Api
from kafka_producer import KafkaSend
from flask_cors import CORS
import json

"""
Background Thread
"""
thread = None
thread_lock = Lock()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config['SECRET_KEY'] = 'donsky!'
socketio = SocketIO(app, cors_allowed_origins='*')

api = Api(app) 

class Add(Resource):
    def post(self):
        data = request.get_json()
        kafka = KafkaSend()
        kafka.send("allClicks", data)
        print(data)
        return 200

# adding the defined resources along with their corresponding urls 
api.add_resource(Add, '/api/send_click') 



"""
Generate random sequence of dummy sensor values and send it to our clients
"""
def background_thread():
    conf = {'bootstrap.servers': 'kafka:9092',
        'group.id': 'group',
        'auto.offset.reset': 'smallest'}

    # Create a Kafka consumer instance
    consumer = Consumer(conf)

    # Subscribe to a Kafka topic
    consumer.subscribe(['top5'])
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
            socketio.emit('updateSensorData', json.loads(msg.value()))

    except KeyboardInterrupt:
        pass
    finally:
        # Close down consumer to commit final offsets.
        consumer.close()


@socketio.on('connect')
def connect():
    global thread
    print('Client connected')
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(background_thread)

"""
Decorator for disconnect
"""
@socketio.on('disconnect')
def disconnect():
    print('Client disconnected',  request.sid)

if __name__ == '__main__':
    socketio.run(app, debug=True, port=5002)