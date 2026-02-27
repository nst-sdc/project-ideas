# Peer-to-Peer File Sharing


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~35-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or Python, networking, hashing concepts |
| Built by | BitTorrent, IPFS, Syncthing, Resilio Sync |

**Skills you'll earn:** P2P protocols, file chunking, SHA hashing, DHT (distributed hash tables), NAT hole-punching

Start with sending a file between two machines. End with a BitTorrent-like protocol.

## Step 1: Send a file over TCP (~2-3 hours)

You have a file on machine A. You want it on machine B.

- Write a sender script using [`net.createServer`](https://nodejs.org/api/net.html) that reads a file and streams it over a TCP connection
- Write a receiver script that connects to the sender and writes incoming data to a file
- Send the filename and size as a header before the data
- Verify the received file matches the original (compare SHA-256 hashes)

**You now have:** A direct file transfer tool.

## Step 2: Split into chunks (~3-4 hours)

Large files are fragile over a single stream. If the connection drops at 90%, you start over.

- Split the file into fixed-size chunks (e.g., 256KB each)
- Hash each chunk individually ([SHA-256](https://nodejs.org/api/crypto.html#cryptocreatehash-algorithm-options))
- Send chunks as numbered messages
- The receiver tracks which chunks it has and can resume from where it left off

**You now have:** Resumable file transfer.

## Step 3: Multiple seeders (~3-4 hours)

One sender, one receiver. If the sender goes offline, the download stops.

- Allow multiple machines to share the same file simultaneously
- The receiver requests different chunks from different seeders in parallel
- Each seeder only needs to have some chunks (not the whole file)
- New receivers who have partial data can also seed chunks they already have

**You now have:** Multi-source downloading.

## Step 4: Torrent metadata (~4-5 hours)

The receiver needs to know: what chunks exist, their hashes, and who has them.

- Create a metadata file (like a `.torrent`): file name, total size, chunk size, array of chunk hashes
- Generate this file from the original file
- Share the metadata file out-of-band (send it manually or host it on a server)
- Receivers use the metadata to verify each downloaded chunk

**You now have:** Verified peer-to-peer transfers.

## Step 5: Tracker (~3-4 hours)

Peers need to find each other. Right now they use hardcoded IP addresses.

- Build a tracker server: peers announce themselves (`POST /announce` with file hash, IP, port)
- The tracker responds with a list of other peers who have the file
- Peers periodically re-announce to stay in the peer list
- New downloaders ask the tracker for peers before starting

**You now have:** Peer discovery.

## Step 6: Peer protocol (~4-5 hours)

- Implement a wire protocol between peers: handshake, bitfield (which chunks each peer has), request, piece, cancel
- Use a tit-for-tat strategy: prefer sending to peers who also send to you (incentivize sharing)
- Implement rarest-first chunk selection (download the least-available chunks first to improve swarm health)

## Step 7: DHT (Distributed Hash Table) (~3-4 hours)

- Remove the dependency on a central tracker
- Implement a [Kademlia](https://en.wikipedia.org/wiki/Kademlia)-style DHT where peers store and look up peer lists
- Bootstrap by connecting to known DHT nodes
- Each peer is both a client and a mini-tracker

## Step 8: NAT traversal (~3-4 hours)

- Use [UDP hole punching](https://en.wikipedia.org/wiki/UDP_hole_punching) to connect peers behind NATs
- Fall back to a relay server when direct connection fails

## Useful Resources

- [BitTorrent Protocol Specification](https://www.bittorrent.org/beps/bep_0003.html)
- [Node.js `net` module](https://nodejs.org/api/net.html)
- [Node.js `crypto` module](https://nodejs.org/api/crypto.html)
- [Kademlia paper](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf)
- [WebTorrent](https://webtorrent.io/) — BitTorrent over WebRTC (reference implementation)

## Where to go from here

- Encryption (protocol obfuscation and peer authentication)
- Web UI for managing transfers
- Magnet links (encode metadata hash in a URL, fetch metadata from peers)
- Selective download (choose which files from a multi-file torrent)
- Browser-based sharing using WebRTC (like WebTorrent)
