# [RabbitMQ](https://www.youtube.com/watch?v=deG25y_r6OY)

## Key Concepts:

- **exchange** (router) - distributes messages betweeen queues based on binding key (defined in queues) and routing key (defined in message):
  - fan-out - sends message to every queue
  - direct (exact match) - sends message to queue where routing key == binding key
  - topic (partial match) - sends message to queue where routing key matches binding key rules:
    - \* (star) can substitute for exactly one word
    - \# (hash) can substitute for zero or more words
  - headers - sends message to queue where routing key in header matches binding key
- **queue** (FIFO) - store for messages

Other concepts:

- bindings - routing rules defined in queues
- producer and consumer of a message
- message broker - centralized messageing server - application hosting exchanges and queues
- AMQP - Advanced Message Queue Protocol standard
- Queue persistence - messages in queue can be **durable** or **non-durable** which means that they will be stored on disk or just in-memory (performance vs. recoverability trade-off)

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
