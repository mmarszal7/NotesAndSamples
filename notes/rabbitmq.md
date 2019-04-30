# RabbitMQ

AMQP (advanced message queue protocol) standard:

Bacis Concepts:
- message broker - centralized messageing server (with multiple exchanges)
- exchanges:
  - direct
  - fan-out - copy message to each queue
  - topic - routing
  - headers - routing based on headers
- queues - store for messages FIFO
- bindings - rule between exchange and queue

- producer and consumer of a message

Queue persistence - messages in queue can be __durable__ or __non-durable__ which means that they will be stored on disk or just in-memory (performance vs. recoverability trade-off)

Process:
- create Exchange - "Add a new exchange" in portal or use ExchangeDeclare() method in C#
- create Queue - "Add a new queue" in portal or use QueueDeclare() method in C#
- bind queue to exchange - In queue > Bindings add exchange and routing arguments or use QueueBind() method in C#



## Send example
Send message - BasicPublish(bytesArray)
Queue properties - CreateBasicProperties() (e.g. SetPersistent(bool))
``` C#
Code
```


## Consume example

Consuming message - BasicQos() model + QueueingBasicConsumer(model) + BasicConsume()
``` C#
Code
BasicQos() model 
QueueingBasicConsumer(model) 
BasicConsume()
Dequeue().Body
BasicAck()
```

Message Exchange Patterns:

Exchange picks queue:
- one way messaging
- worker queues (message broker) - many consumers + routing by queueName

Queue picks exchange:
- publish/subscribe
- RPC (remote procedure call)

Routing:
- Routing - message routing key **equals** queue routing key
- Topic - message routing  **matches** queue routing key expression (routing key with * and #)
- Headers - message routing key **equals** queue headers
- 
- Scatter Gather