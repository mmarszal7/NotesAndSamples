# Redis

## Links:

- [Redis docs](https://redis.io/documentation)
- [C# Client - StackExchange.Redis docs](https://stackexchange.github.io/StackExchange.Redis/)
- [Redis Docker image](https://hub.docker.com/_/redis)

## 1. Data types and Persistence

Data types:

- String
- List - ordered strings
- Set - unique strings
- Hashes - object like

Persistence:

- RDB (default) - **Redis Database File** - uses snapshots to rebuild db
- AOF - **Append-only file** - uses logs to rebuild db

## 2. Configuration

You can change configuration by editting configuration file or use CLI to change it **just for this run**: `CONFIG SET property "value"` (e.g. `CONFIG SET save "60 1000"` )

- Snapshorts - `save 60 1000` - "create snapshot after 60 sec if at least 1000 keys changed"
- Persistence - `appendonly yes/no`
- Setting password - `requirepass PASSWORD`
- Replication:
  - change port - `port PORT`
  - set up slave address - `slaveof IP PORT`
  - in slave setup password for master - `masterauth MASTER_PASSWORD`
  - if using AOF, change filename in one of Redis instances - `appendfilename "filename.aof"`
- Security - access limited to IP - `bind 127.0.0.1`

<br>
Using you own configuration file in Docker container:

```
FROM redis
COPY redis.conf /usr/local/etc/redis/redis.conf
CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]
```

## 3. CLI commands

- login - `redis-cli -a PASSWORD`
- get/set:
  - `redis-cli set KEY VALUE`
  - `redis-cli get KEY`
- publish/subscribe:
  - `redis-cli subscribe CHANNEL1 CHANNEL2...`
  - `redis-cli publish "MESSAGE"`
