# Multiplayer Game Server


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~35-45 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, WebSocket, game loop concepts |
| Built by | Photon Engine, Colyseus, PlayFab, Nakama |

**Skills you'll earn:** Authoritative game state, latency compensation, matchmaking algorithms, lobby systems, tick-based simulation

Start by syncing two players' positions over a socket. End with a game server handling lobbies, matchmaking, authoritative state, and latency compensation.

## Step 1: Sync player positions (~2-3 hours)

Two players in a shared space. Each should see the other move.

- Build a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) server that accepts connections
- Client sends its position `{ x, y }` on every frame (or throttled to 20 times/sec)
- Server broadcasts each player's position to all others
- Render all players on a [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) — your player in one color, others in another

**You now have:** Two-player position sync.

## Step 2: Authoritative server (~3-4 hours)

Trusting the client means anyone can teleport by sending fake positions.

- Server owns the game state: all player positions, velocities, and health
- Clients send inputs (key presses), not positions
- Server applies inputs to the game state using fixed-tick simulation (e.g., 60 ticks/sec)
- Server broadcasts the authoritative state to all clients

**You now have:** Cheat-resistant game state.

## Step 3: Client-side prediction and reconciliation (~3-4 hours)

Waiting for the server to confirm every input feels laggy.

- Client predicts the result of its own inputs immediately (move locally)
- When the server state arrives, compare with prediction
- If they differ, snap to the server state and re-apply unacknowledged inputs
- This is [client-side prediction](https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html) — the standard netcode pattern

**You now have:** Responsive controls with server authority.

## Step 4: Lobbies and rooms (~4-5 hours)

All players in one game doesn't scale.

- Add lobby management: create room, join room, list rooms
- Each room runs an independent game loop
- Limit players per room (e.g., 4-8)
- Show a lobby browser UI before joining a game

**You now have:** Multi-room game sessions.

## Step 5: Matchmaking (~4-5 hours)

Manual room selection is tedious for competitive games.

- Players join a matchmaking queue with their skill rating
- Matchmaker groups players of similar skill
- Create a room, assign matched players, start the game
- Expand skill range over time if no match is found (to avoid infinite queues)

**You now have:** Automatic matchmaking.

## Step 6: Lag compensation (~3-4 hours)

Players with high latency hit targets that have already moved on the server.

- Server keeps a history of game states (last N ticks)
- On a hit-check, rewind state to the shooter's perceived time (current time - their latency)
- Validate the hit against the rewound state
- This is server-side rewind, the standard FPS netcode technique

## Step 7: Game events and spectating (~4-5 hours)

- Broadcast game events: kills, scores, power-up pickups
- Spectator mode: connect to a room as a viewer, receive state but send no inputs
- Post-game summary: stats, timeline of events

## Useful Resources

- [Client-Side Prediction — Gabriel Gambetta](https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html)
- [Source Multiplayer Networking — Valve](https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking)
- [WebSocket API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Canvas API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Colyseus — Multiplayer Framework (reference)](https://docs.colyseus.io/)

## Where to go from here

- UDP transport (WebRTC DataChannels for lower latency)
- Anti-cheat (server-side validation of impossible movements)
- Replay system (record and playback matches)
- Leaderboards and ranked seasons
- Horizontal scaling (multiple server processes, shard by region)
