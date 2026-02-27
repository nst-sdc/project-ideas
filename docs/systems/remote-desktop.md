# Remote Desktop (AnyDesk Clone)


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~35-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js or Python, networking, screen capture APIs |
| Built by | AnyDesk, TeamViewer, RustDesk, Chrome Remote Desktop |

**Skills you'll earn:** Screen capture, video encoding (H.264), WebRTC, input forwarding, NAT traversal, clipboard sync

Start with streaming a screenshot. End with a full remote desktop system.

## Step 1: Capture the screen and send it (~2-3 hours)

You want to see another computer's screen from your browser.

- Write a server (Node.js or Python) that captures a screenshot of the desktop
- On Linux: use `scrot` or [`screenshot-desktop`](https://www.npmjs.com/package/screenshot-desktop). On macOS: `screencapture`
- Serve the screenshot via an HTTP endpoint: `GET /screen`
- Build a frontend that fetches and displays the image, polling every second

**You now have:** A screen viewer (very slow).

## Step 2: Stream with WebSocket (~3-4 hours)

Polling at 1 FPS isn't usable. You need a real-time stream.

- Replace HTTP polling with a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) connection
- Capture screenshots in a loop on the server, send as binary frames
- Compress each frame as JPEG (lower quality = smaller size = higher FPS)
- Display frames on a `<canvas>` in the browser
- Target 10-15 FPS

**You now have:** A live screen stream.

## Step 3: Send mouse and keyboard input (~4-5 hours)

You can see the screen but can't interact with it.

- Capture mouse events (click, move, scroll) on the frontend canvas
- Send them to the server over WebSocket: `{ type: 'click', x: 450, y: 320, button: 'left' }`
- On the server, use [RobotJS](http://robotjs.io/) or [nut.js](https://nutjs.dev/) to replay the events on the real desktop
- Scale coordinates from the canvas size to the actual screen resolution

**You now have:** Remote mouse control.

## Step 4: Keyboard input (~3-4 hours)

You can click but can't type.

- Capture keyboard events on the frontend (`keydown`, `keyup`)
- Send key events to the server
- Handle special keys: Ctrl, Alt, Shift, function keys, arrow keys
- Handle key combinations (Ctrl+C, Alt+Tab)
- Use [RobotJS](http://robotjs.io/) to press/release keys

**You now have:** Full remote input.

## Step 5: Efficient encoding (~3-4 hours)

Raw JPEG screenshots at 15 FPS burn bandwidth. A static desktop shouldn't send 15 identical frames per second.

- Implement dirty-region detection: compare the current frame with the previous one
- Only send the regions that changed
- Use a tiling approach: divide the screen into blocks, hash each block, send only changed blocks
- Or use [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) for hardware-accelerated video encoding

**You now have:** Efficient streaming.

## Step 6: Authentication and access codes (~3-4 hours)

Your remote desktop is open to anyone who knows the URL.

- Generate a one-time access code on the server
- The client must enter the code to connect
- Add password protection
- Show a notification on the host machine when someone connects

**You now have:** Secure access.

## Step 7: NAT traversal (~3-4 hours)

Both machines are behind routers. They can't reach each other directly.

- Set up a relay server on a public IP
- Both client and host connect to the relay; the relay forwards traffic
- For better performance, attempt peer-to-peer with [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) and STUN/TURN

## Step 8: File transfer (~4-5 hours)

- Drag and drop files from local machine to the remote session
- Transfer via WebSocket or a separate HTTP channel
- Show transfer progress

## Useful Resources

- [WebRTC API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [WebSocket API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [nut.js — Desktop automation](https://nutjs.dev/)
- [noVNC](https://novnc.com/) — browser-based VNC client (reference)
- [Apache Guacamole](https://guacamole.apache.org/) — clientless remote desktop gateway

## Where to go from here

- Clipboard sharing between local and remote
- Multi-monitor support
- Session recording and playback
- Audio streaming
- Mobile client app
