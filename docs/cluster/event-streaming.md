# Event Streaming Platform


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or Java, networking, distributed systems basics |
| Built by | Apache Kafka, RabbitMQ, Redpanda, AWS Kinesis |

**Skills you'll earn:** Append-only logs, partitioning, consumer groups, offset management, exactly-once semantics, stream replay

Start by publishing a message and consuming it. End with a Kafka-lite system with topics, partitions, consumer groups, offset tracking, and replay.

## Step 1: Publish and consume a message (~2-3 hours)

The simplest broker: one producer, one consumer, one queue.

- Build a TCP server that accepts `PUBLISH <topic> <message>` and `CONSUME <topic>`
- Store messages per topic in an append-only array
- Consumer reads messages sequentially from the beginning
- Use a simple text protocol over raw sockets

**You now have:** A message broker.

## Step 2: Persistent storage (~3-4 hours)

Messages in memory vanish on restart.

- Write messages to append-only log files on disk, one file per topic
- Each message gets an offset (byte position or sequence number)
- Consumers specify an offset: "give me messages starting from offset N"
- Use [mmap](https://man7.org/linux/man-pages/man2/mmap.2.html) or buffered reads for performance

**You now have:** Durable message storage.

## Step 3: Partitions (~4-5 hours)

One log file per topic is a throughput bottleneck.

- Split each topic into N partitions (configured at topic creation)
- Producers specify a partition key; hash it to determine the partition
- Each partition is an independent log file with its own offsets
- Consumers can read from specific partitions

**You now have:** Partitioned topics.

## Step 4: Consumer groups (~4-5 hours)

Multiple consumers reading the same partition duplicate work.

- Define consumer groups: a group collectively consumes a topic
- Each partition is assigned to exactly one consumer in the group
- When a consumer joins or leaves, rebalance partition assignments
- Track each consumer's committed offset per partition

**You now have:** Scalable, coordinated consumption.

## Step 5: Offset management and replay (~4-5 hours)

Consumers crash. They need to resume where they left off.

- Consumers commit offsets after processing: `COMMIT <group> <topic> <partition> <offset>`
- Store committed offsets on the broker (in a special internal topic or a file)
- On reconnect, consumer resumes from last committed offset
- Allow resetting offsets to replay historical messages

**You now have:** At-least-once delivery with replay.

## Step 6: Replication (~4-5 hours)

A disk failure loses all messages on that partition.

- Replicate each partition to N brokers (configurable replication factor)
- One replica is the leader (handles reads/writes), others are followers
- Followers pull from the leader and stay in sync
- If the leader dies, a follower is promoted

## Step 7: Producer batching and compression (~4-5 hours)

- Producers batch multiple messages into a single network request
- Compress batches with snappy or gzip before sending
- Broker decompresses for indexing, stores compressed on disk
- Consumers decompress on read

## Useful Resources

- [Apache Kafka Documentation (reference design)](https://kafka.apache.org/documentation/)
- [Kafka Internals — Log Structure](https://kafka.apache.org/documentation/#design_filesystem)
- [mmap — Linux man page](https://man7.org/linux/man-pages/man2/mmap.2.html)
- [Designing Data-Intensive Applications — Log-Based Messaging](https://dataintensive.net/)
- [Redpanda Architecture (alternative reference)](https://docs.redpanda.com/current/get-started/architecture/)

## Where to go from here

- Schema registry (enforce message schemas with Avro or Protobuf)
- Stream processing (filter, map, aggregate over streams in real time)
- Exactly-once semantics (idempotent producers + transactional consumers)
- Tiered storage (move old segments to object storage)
- Admin CLI and web UI for topic management
