# Distributed File Storage


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or Go, networking, storage concepts |
| Built by | AWS S3, MinIO, Google Cloud Storage, Backblaze B2 |

**Skills you'll earn:** Object storage design, replication strategies, consistency models, multipart upload, metadata indexing

Start by uploading a file to a single server. End with an S3-like object storage system with replication, consistency guarantees, metadata management, and a REST API.

## Step 1: Upload and download files via an API (~2-3 hours)

The simplest object store: files in, files out.

- Build an HTTP API: `PUT /objects/:key` (upload), `GET /objects/:key` (download), `DELETE /objects/:key`
- Store files on disk in a flat directory, keyed by a hash of the object key
- Return proper content types and status codes
- Use [Express](https://expressjs.com/) or [Fastify](https://fastify.dev/docs/latest/)

**You now have:** A single-node file server.

## Step 2: Metadata management (~3-4 hours)

You need to know what's stored, how big it is, and when it was uploaded.

- Store metadata per object: key, size, content type, created timestamp, checksum (SHA-256)
- Use [SQLite](https://www.sqlite.org/docs.html) or [PostgreSQL](https://www.postgresql.org/docs/) for the metadata store
- `GET /objects` lists objects with pagination and prefix filtering
- Verify checksums on upload and download to detect corruption

**You now have:** An object catalog.

## Step 3: Chunking large files (~4-5 hours)

A 10GB file as a single blob is impractical to transfer and replicate.

- Split uploads into fixed-size chunks (e.g., 8MB)
- Store each chunk as a separate file on disk
- Metadata tracks the ordered list of chunk IDs per object
- Reassemble chunks on download, streaming to the client

**You now have:** Chunked storage.

## Step 4: Replication across nodes (~4-5 hours)

One disk failure loses data permanently.

- Run three storage nodes, each with its own disk
- On upload, write each chunk to N nodes (replication factor)
- Metadata tracks which nodes hold which chunks
- On download, read from any node that has the chunk (prefer the closest/fastest)

**You now have:** Redundant storage.

## Step 5: Consistency and repair (~4-5 hours)

Replicas can drift if a write fails on one node.

- On read, compare checksums from multiple replicas (read repair)
- Background process scans for under-replicated chunks and copies them to healthy nodes
- Handle node failures: mark as unavailable, re-replicate its chunks to remaining nodes
- Consistency model: read-after-write consistency for the uploading client

**You now have:** Self-healing storage.

## Step 6: Buckets and access control (~4-5 hours)

- Group objects into buckets (namespaces)
- Per-bucket access policies: public-read, private, authenticated-read
- Presigned URLs for time-limited access to private objects
- API keys per user with bucket-level permissions

## Step 7: Multipart uploads (~4-5 hours)

- Client uploads chunks independently with upload IDs
- Complete the upload by listing all parts
- Abort incomplete uploads after a timeout
- Enables resumable uploads over unreliable connections

## Useful Resources

- [Amazon S3 API Reference (design reference)](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)
- [MinIO Architecture (reference implementation)](https://min.io/docs/minio/linux/operations/concepts.html)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [Consistent Hashing — Wikipedia](https://en.wikipedia.org/wiki/Consistent_hashing)

## Where to go from here

- Object versioning (keep previous versions, restore deleted objects)
- Lifecycle policies (auto-delete after N days, move to cold storage)
- Erasure coding (more storage-efficient than full replication)
- CDN integration (cache popular objects at edge nodes)
- Event notifications (trigger a webhook on upload/delete)
