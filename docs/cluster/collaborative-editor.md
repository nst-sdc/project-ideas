# Real-Time Collaborative Editor


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, WebSocket basics, data structures |
| Built by | Google Docs, Notion, Figma, Etherpad |

**Skills you'll earn:** CRDT algorithms, operational transforms, WebSocket sync, presence indicators, rich text editing, conflict resolution

Start by syncing text between two browser tabs. End with a Google Docs-like editor with conflict resolution, presence cursors, rich text, and persistence.

## Step 1: Sync text between two clients (~2-3 hours)

Two people type in the same document. Both should see each other's changes.

- Build a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) server that broadcasts messages to all connected clients
- Client sends the full text on every keystroke
- Server broadcasts the text to all other clients
- They overwrite their local text with the received version

**You now have:** Naive real-time sync (with conflicts).

## Step 2: Operational Transformation or CRDTs (~3-4 hours)

Sending full text on every keystroke doesn't scale. And concurrent edits conflict.

- Implement a [CRDT](https://crdt.tech/) for text (Yjs-style sequence CRDT or RGA)
- Each character has a unique ID and a position relative to other characters
- Inserts and deletes are commutative — order of operations doesn't matter
- Alternatively, use [Yjs](https://docs.yjs.dev/) as a library and learn from its internals

**You now have:** Conflict-free concurrent editing.

## Step 3: Presence and cursors (~4-5 hours)

You can see text changes but not where other people are typing.

- Each client sends its cursor position and selection range over WebSocket
- Server broadcasts cursor state to all clients
- Render remote cursors as colored carets with the user's name
- Update cursor positions in real time (throttle to ~10 updates/sec)

**You now have:** Multi-user presence.

## Step 4: Rich text editing (~4-5 hours)

Plain text is limiting. Documents need headings, bold, lists, links.

- Use a rich text editor like [ProseMirror](https://prosemirror.net/docs/guide/), [Tiptap](https://tiptap.dev/docs), or [Slate](https://docs.slatejs.org/)
- Map CRDT operations to rich text operations (insert with formatting attributes)
- Toolbar with formatting buttons: bold, italic, headings, lists, links
- Sync formatting alongside text content

**You now have:** Collaborative rich text.

## Step 5: Persistence and version history (~4-5 hours)

The document disappears when all clients disconnect.

- Save CRDT state to a database on every change (debounced, e.g., every 2 seconds)
- Use [PostgreSQL](https://www.postgresql.org/docs/) or [MongoDB](https://www.mongodb.com/docs/) for storage
- On reconnect, load the saved state and merge with any pending local changes
- Store snapshots at intervals for version history — let users browse and restore past versions

**You now have:** Persistent, versioned documents.

## Step 6: Permissions and sharing (~4-5 hours)

- Document owner can invite collaborators (view, comment, edit roles)
- Share via link with configurable access level
- Read-only mode disables editing but shows live changes

## Step 7: Comments and suggestions (~4-5 hours)

- Anchor comments to text ranges
- Suggestion mode: proposed edits shown as tracked changes
- Accept/reject suggestions

## Useful Resources

- [Yjs Documentation](https://docs.yjs.dev/)
- [CRDT.tech — Learning Resources](https://crdt.tech/)
- [ProseMirror Guide](https://prosemirror.net/docs/guide/)
- [Tiptap Documentation](https://tiptap.dev/docs)
- [WebSocket API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

## Where to go from here

- Offline support (local-first editing, sync when reconnected)
- Real-time commenting and threads
- Export to PDF, Markdown, HTML
- Embeds (images, tables, code blocks with syntax highlighting)
- End-to-end encryption for sensitive documents
