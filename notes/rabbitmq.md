# [RabbitMQ](https://www.youtube.com/watch?v=deG25y_r6OY)

## Key Concepts:
- **AMQP** - Advanced Message Queue Protocol standard
- **message flow** 
  - *publisher/producer* (some service) creates a *connection* and a *channel* 
  - *publisher* sends a message to an *exchange* (see *CQRS* below for more info about types of messages)
  - *exchange* routes a message to a proper *queue* based on a defined *bindings* (see *bindings* below for more info about types of bindings)
  - *consumer* gets messages from a queue(s)
- **exchange** (router) - distributes messages betweeen queues based on binding key (defined in queues) and routing key (defined in message). Exchange can have multiple **binding** types:
  - default - *direct* but it compares routing key with queue name instead of message binding key 
  - fan-out - sends message to every queue
  - direct (exact match) - sends message to queue where routing key == binding key
  - topic (partial match) - sends message to queue where routing key matches binding key rules:
    - \* (star) can substitute for exactly one word
    - \# (hash) can substitute for zero or more words
  - headers - sends message to queue where routing key in header matches binding key
- **queue** (FIFO) - store for messages
- **connection** - real (TCP) connection
- **channel** - virtual (AMQP) connection (difference between connection is that with one connection (app) you can open multiple channels)
- **persistence** - messages in queue can be **durable** or **non-durable** which means that they will be stored on disk or just in-memory (performance vs. recoverability trade-off)
- 
## CQRS & Event Sourcing:
- Rabbit is just a tool that can be used in multiple applications, e.g. for CQRS or Event Sourcing
- **Events** vs **Commands**:
  - both Events and Commands are types of Messages
  - often publishing an Event is a result of a Command 
  - Event - message is *published* to a BROKER and from there it is sent to subscribers (publishers & subscribers) - you don't care about consumers
  - Command & Query - message is sent DIRECTLY to known address/consumer - you send message to a specific consumer
    - Command - usually have a payload and don't return any result
    - Query - usually don't have any payload and it's purpose is to return a value
- **Dispatchers** and **Handlers** are on top of it all, so you can have EventHandler, CommandHandler, QueryHandler etc. although Events are usually "dispatched" directly to the message bus

## C# examples:

### Preparing infrastructure:

- create Exchange:
  - "Add a new exchange" in portal or
  - use **ExchangeDeclare()** method in C#
- create Queue:
  - "Add a new queue" in portal or
  - use **QueueDeclare()** method in C#
- bind Queue to Exchange:
  - In queue > Bindings add exchange and routing arguments or
  - use **QueueBind()** method in C#

### Setting up a connection:

```C#
var connectionFactory = new ConnectionFactory { HostName = HostName, UserName = UserName, Password = Password };
var connection = connectionFactory.CreateConnection();
var model = connection.CreateModel();

// Additional setting for Consumer:
// Quality of Service setting - restricting the number of messages that consumer will try to pick up from queues at once
model.BasicQos(prefetchSize: 0, prefetchCount: 1, global: false);
```

### Sending a message:

```C#
byte[] messageBuffer = Encoding.Default.GetBytes(message);

var properties = model.CreateBasicProperties();
properties.SetPersistent(true);
// Optional Header Routing
properties.Headers = new ListDictionary();
properties.Headers.Add(header.Key, header.Value);

model.BasicPublish(ExchangeName, QueueName, properties, messageBuffer);

```

### Consuming a message:

By subscription (**recommended**):

```C#
var consumer = new EventingBasicConsumer(model);
model.BasicConsume(QueueName, autoAck: false, consumer);

consumer.Received += (s, e) =>
    {
        var body = e.Body;
         // ... process the message
        model.BasicAck(e.DeliveryTag, multiple: false);
    };
```

With basic consumer:

```C#
var consumer = new QueueingBasicConsumer(model);
model.BasicConsume(QueueName, autoAck: false, consumer);

var deliveryArgs = (BasicDeliverEventArgs)consumer.Queue.Dequeue();
var message = Encoding.Default.GetString(deliveryArgs.Body);
model.BasicAck(deliveryArgs.DeliveryTag, multiple: false);
```
