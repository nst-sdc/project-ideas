# Host Terminal on Web


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | 2-3 people |
| Time | ~25-30 hours |
| Demo-ready by | Step 4 |
| Prerequisites | Node.js, basic Linux/shell, WebSocket basics |
| Built by | Wetty, ttyd, Gotty, Xterm.js |

**Skills you'll earn:** PTY (pseudo-terminal), WebSocket streaming, xterm.js, session management, SSH tunneling

Start with running a command. End with a full web-based terminal emulator.

## Step 1: Execute a command and show output (~1-2 hours)

You want to run a shell command from a web page and see the result.

- Set up a Node.js server with Express
- Create an API endpoint: `POST /exec` that accepts a command string
- Execute it using `child_process.exec()` and return stdout and stderr
- Build a frontend with an input field and a "Run" button, show the output in a `<pre>` tag

**You now have:** A command runner.

## Step 2: Make it feel like a terminal (~2-3 hours)

An input field and a button isn't a terminal. You want a blinking cursor and scrolling output.

- Use xterm.js on the frontend — it renders a real terminal in the browser
- Connect it to the backend via WebSocket
- On the server, spawn a pseudo-terminal (PTY) using `node-pty`
- Pipe the PTY's output to the WebSocket, and WebSocket input to the PTY

**You now have:** A real terminal in the browser.

## Step 3: Handle interactive programs (~3-4 hours)

You run `vim` or `top`. It breaks. PTY is there, but the terminal size is wrong.

- Send terminal dimensions (rows, columns) from xterm.js to the server
- Resize the PTY when the browser window resizes
- Handle SIGWINCH properly so full-screen programs render correctly

**You now have:** A terminal that supports interactive programs.

## Step 4: Authentication (~3-4 hours)

Your terminal is open to anyone who finds the URL. That's terrifying.

- Add a login page with username and password
- Issue a session token (JWT or cookie)
- Require the token before establishing a WebSocket connection
- Reject unauthenticated connections immediately

**You now have:** A secured terminal.

## Step 5: Multiple sessions (~2-3 hours)

You want two terminal tabs, like in a real terminal app.

- Let the frontend open multiple WebSocket connections, each with its own PTY
- Add a tab bar to switch between sessions
- Each tab maintains its own terminal state
- Add a "New Tab" button and a way to close tabs

**You now have:** Tabbed terminal sessions.

## Step 6: Session persistence (~2-3 hours)

You accidentally close the browser. Your running process dies.

- Use `screen` or `tmux` on the server to persist sessions
- Reconnecting to the same session reattaches to the existing tmux session
- Sessions survive browser disconnects
- Show a list of active sessions to reconnect to

**You now have:** Persistent sessions.

## Step 7: File upload and download (~2-3 hours)

- Drag-and-drop files onto the terminal to upload them to the server
- Right-click to download a file by path
- Use zmodem protocol or a separate HTTP endpoint

## Step 8: Multi-user and multi-host (~3-4 hours)

- Support SSH connections to remote hosts (not just localhost)
- Let users configure saved hosts
- Add audit logging (who ran what, when)

## Step 9: Deploy (~2-3 hours)

- Containerize with Docker
- Run behind a reverse proxy with TLS (WebSocket-aware)
- Add CI/CD
- Lock down: restrict to specific users, limit shell capabilities if needed


## Useful Resources

- [xterm.js](https://xtermjs.org/) — Terminal emulator for the browser
- [node-pty](https://github.com/microsoft/node-pty) — PTY bindings for Node.js
- [Socket.io](https://socket.io/) — WebSocket communication
- [MDN WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) — WebSocket reference
- [SSH2](https://github.com/mscdex/ssh2) — SSH client for Node.js

## Where to go from here

- Shared terminal sessions (pair programming, live demos)
- Recording and replay of terminal sessions (like asciinema)
- Custom themes and font configuration
- Search through terminal scrollback
- Web-based SSH key management
