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

**By default Redis has 16 databases (indexes/names 0-15)**

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

## 3. CLI commands - [https://redis.io/commands]

- **login** - `redis-cli -a PASSWORD`
- **list all keys** - `keys`
- **publish/subscribe**
  - `subscribe CHANNEL1 CHANNEL2...`
  - `publish "MESSAGE"`
- **strings**:
  - get/set:
    - `set KEY VALUE`
    - `get KEY`
    - `getset KEY VALUE` - returns current value and replaces it with new one
    - `mset KEY VALUE KEY VALUE...` - sets multiple values
    - `mget KEY KEY...` - gets multiple values
  - `expire X` or `set KEY VALUE ex X` - sets expiration time for key in sec
  - `exists KEY`
  - `del KEY`
  - `incr KEY` or `decr KEY` - increments/decrements key by 1
- **hashes**:
  - before any operation you have to specify `fieldName` or the hash - `hget FIELD_NAME KEY VALUE...`
  - everything else is like in strings but with `h` prefix (`hset, hget, hmset, hmget, hexists...`)
  - `hgetall FIELD_NAME` - gets all hash values
- **lists**:
  - push/pop:
    - `rpush LIST_NAME VALUE VALUE VALUE...` - "right push", add items to the list
    - `lpush LIST_NAME VALUE VALUE...`
    - `rpop LIST_NAME FROM TO`
    - `lpop LIST_NAME FROM TO`
  - `lrange LIST_NAME START STOP` - e.g. `lrange LIST_NAME 0 -3` lists everything from `LIST_NAME` except last 2 records
  - `llen LIST_NAME` - length of list
- **sets and sorted sets**:
  - https://redis.io/commands#set
  - https://redis.io/commands#sorted_set
