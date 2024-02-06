from confluent_kafka import Producer
import socket
import json


class KafkaSend:
    def __init__(self) -> None:
        self.conf = {'bootstrap.servers': 'kafka:9092',
        'client.id': socket.gethostname(),
        }
        self.producer = Producer(self.conf)

    def send(self, topic,message):
        message_s = json.dumps(message)
        self.producer.produce(topic, value=message_s)
        self.producer.poll(1)

        
