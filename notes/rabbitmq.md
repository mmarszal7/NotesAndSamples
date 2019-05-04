# [RabbitMQ](https://www.youtube.com/watch?v=deG25y_r6OY)

Key Concepts:

- exchange (router) - distributes messages betweeen queues based on binding key (defined in queues) and routing key (defined in message):
  - fan-out - sends message to every queue
  - direct (exact match) - sends message to queue where routing key == binding key
  - topic (partial match) - sends message to queue where routing key matches binding key rules:
    - \* (star) can substitute for exactly one word
    - \# (hash) can substitute for zero or more words
  - headers - sends message to queue where routing key in header matches binding key
- queue (FIFO) - store for messages
- bindings - rule between exchange and queue

Other concepts:

- AMQP - Advanced Message Queue Protocol standard
- message broker - centralized messageing server - application hosting exchanges and queues
- Producer and Consumer of a message
- Queue persistence - messages in queue can be **durable** or **non-durable** which means that they will be stored on disk or just in-memory (performance vs. recoverability trade-off)

Preparing infrastructure:

- create Exchange - "Add a new exchange" in portal or use ExchangeDeclare() method in C#
- create Queue - "Add a new queue" in portal or use QueueDeclare() method in C#
- bind queue to exchange - In queue > Bindings add exchange and routing arguments or use QueueBind() method in C#

## Send example

Send message - BasicPublish(bytesArray)
Queue properties - CreateBasicProperties() (e.g. SetPersistent(bool))

```C#
Code
```

## Consume example

Consuming message - BasicQos() model + QueueingBasicConsumer(model) + BasicConsume()

```C#
Code
BasicQos() model
QueueingBasicConsumer(model)
BasicConsume()
Dequeue().Body
BasicAck()
```
