# Distributed Job Queue & Worker System


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~35-45 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, Redis or PostgreSQL, distributed systems basics |
| Built by | Sidekiq, Bull, Celery, AWS SQS |

**Skills you'll earn:** Message queues, worker pools, retry strategies, dead-letter queues, horizontal scaling, job scheduling

Start by processing a job from an in-memory queue. End with a distributed system with persistent queues, retries, dead-letter handling, and horizontal worker scaling.

## Step 1: Process a job from a queue (~2-3 hours)

The simplest job queue: push a task, pop and execute it.

- Define a job as `{ id, type, payload }`
- Push jobs to an array, pop from the front in a loop
- Execute the job (for now, just `console.log` the payload)
- Mark it as complete

**You now have:** A synchronous job processor.

## Step 2: Persistent queue with Redis (~3-4 hours)

In-memory queues vanish when the process dies.

- Store jobs in a [Redis](https://redis.io/docs/latest/develop/data-types/lists/) list using `LPUSH` / `BRPOP`
- Worker blocks on `BRPOP` waiting for jobs — no polling needed
- Jobs survive process restarts
- Multiple workers can pop from the same list for parallel processing

**You now have:** A persistent, blocking queue.

## Step 3: Job status tracking (~3-4 hours)

You push a job and have no idea what happened to it.

- Track job states: `pending`, `processing`, `completed`, `failed`
- Store job metadata in a Redis hash: status, result, timestamps, worker ID
- API to query job status by ID
- Transition states atomically (use Redis transactions or Lua scripts)

**You now have:** Job lifecycle visibility.

## Step 4: Retries and exponential backoff (~4-5 hours)

Jobs fail. Networks flake. APIs timeout.

- On failure, re-enqueue the job with an incremented attempt count
- Delay retries with exponential backoff (1s, 2s, 4s, 8s...)
- Use [Redis sorted sets](https://redis.io/docs/latest/develop/data-types/sorted-sets/) with score = timestamp for delayed jobs
- A scheduler moves delayed jobs back to the main queue when their time arrives

**You now have:** Automatic retry with backoff.

## Step 5: Dead-letter queue (~3-4 hours)

Some jobs will never succeed. They should not retry forever.

- After N failed attempts, move the job to a dead-letter queue (DLQ)
- DLQ is a separate Redis list for manual inspection
- API to list, inspect, retry, or delete dead-letter jobs
- Alert when the DLQ grows beyond a threshold

**You now have:** Graceful failure handling.

## Step 6: Priority queues and job types (~4-5 hours)

- Multiple queues with different priorities (critical, default, low)
- Workers check high-priority queues first
- Route job types to specific worker pools (email worker, image worker)

## Step 7: Dashboard and monitoring (~3-4 hours)

- Web UI showing queue depths, processing rates, failure rates
- Per-worker stats: jobs processed, current job, uptime
- Real-time updates via [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## Useful Resources

- [Redis Lists — redis.io](https://redis.io/docs/latest/develop/data-types/lists/)
- [Redis Sorted Sets — redis.io](https://redis.io/docs/latest/develop/data-types/sorted-sets/)
- [BullMQ Documentation (reference design)](https://docs.bullmq.io/)
- [Reliable Queue Pattern — Redis](https://redis.io/docs/latest/develop/use/patterns/reliable-queue/)

## Where to go from here

- Cron-scheduled recurring jobs
- Job chaining and workflows (job A triggers job B on completion)
- Rate limiting per job type
- Multi-cluster queue federation
- Webhook callbacks on job completion
