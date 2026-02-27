# VPN Service


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~35-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or C, Linux networking, TCP/UDP basics |
| Built by | WireGuard, OpenVPN, Tailscale, NordVPN |

**Skills you'll earn:** TUN/TAP interfaces, packet encapsulation, encryption (AES/ChaCha20), IP routing, NAT traversal

Start by forwarding packets between two machines. End with a fully encrypted tunnel that routes all traffic through a remote server.

## Step 1: Forward packets between two processes (~2-3 hours)

Two programs on the same machine need to exchange raw bytes through your code, not directly.

- Create a simple relay: listen on a port, accept two connections, pipe data between them
- Use raw [TCP sockets](https://man7.org/linux/man-pages/man7/tcp.7.html) — no HTTP, no libraries
- Log every packet's size and direction

**You now have:** A basic packet relay.

## Step 2: Create a TUN interface (~3-4 hours)

TCP proxying works at the application level. A real VPN operates at the network level, capturing all traffic.

- Open a [TUN device](https://www.kernel.org/doc/html/latest/networking/tuntap.html) (Linux: `/dev/net/tun`, macOS: `utun`)
- Read raw IP packets from the TUN interface
- Print packet headers: source IP, destination IP, protocol, length

**You now have:** A virtual network interface you control.

## Step 3: Tunnel packets over a socket (~4-5 hours)

Packets from the TUN device need to reach a remote server.

- Client reads from TUN, sends packets over a TCP/UDP connection to the server
- Server receives packets, writes them to its own TUN device
- Server does the reverse for return traffic
- You are now routing IP packets through a tunnel

**You now have:** An unencrypted tunnel.

## Step 4: Encrypt the tunnel (~4-5 hours)

Anyone sniffing the network sees your raw packets.

- Add symmetric encryption ([AES-256-GCM](https://nodejs.org/api/crypto.html#cryptography)) to the tunnel
- Implement a key exchange at connection time (Diffie-Hellman or a pre-shared key)
- Each packet is encrypted before sending, decrypted on receipt
- Add authentication to prevent tampering (GCM handles this)

**You now have:** An encrypted tunnel.

## Step 5: NAT and routing (~3-4 hours)

The server receives tunnelled packets but doesn't know where to send them.

- Enable IP forwarding on the server (`sysctl net.ipv4.ip_forward=1`)
- Add [iptables](https://linux.die.net/man/8/iptables) NAT rules to masquerade tunnel traffic through the server's public interface
- Client sets its default route through the TUN device
- All client traffic now exits through the server

**You now have:** Full traffic routing through the VPN.

## Step 6: DNS leak prevention (~3-4 hours)

Your traffic goes through the tunnel, but DNS queries still hit your local resolver.

- Run a DNS resolver on the server (or forward to a known resolver like 1.1.1.1)
- Push DNS configuration to the client at connection time
- Client overrides `/etc/resolv.conf` while connected
- Restore original DNS on disconnect

**You now have:** Leak-free DNS resolution.

## Step 7: Authentication and multi-client support (~4-5 hours)

Anyone who knows the server address can connect.

- Add client certificates or username/password authentication
- Server assigns each client a unique IP from a pool
- Track connected clients, enforce limits
- Handle client disconnects and IP reclamation

## Step 8: Configuration and deployment (~3-4 hours)

- Config file for server: listen address, subnet, DNS, max clients
- Config file for client: server address, credentials, routes
- Systemd service files for both
- Auto-reconnect on the client side

## Useful Resources

- [Linux TUN/TAP Documentation](https://www.kernel.org/doc/html/latest/networking/tuntap.html)
- [WireGuard Protocol — Whitepaper](https://www.wireguard.com/papers/wireguard.pdf)
- [iptables Tutorial](https://www.frozentux.net/iptables-tutorial/iptables-tutorial.html)
- [Node.js Crypto API](https://nodejs.org/api/crypto.html)
- [Diffie-Hellman Key Exchange — Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)

## Where to go from here

- Split tunneling (route only specific traffic through the VPN)
- WireGuard-style protocol (UDP, modern cryptography, minimal state)
- Multi-hop routing (chain VPN servers)
- Traffic obfuscation to bypass deep packet inspection
- Admin dashboard showing connected clients and bandwidth usage
