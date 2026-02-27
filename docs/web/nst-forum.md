# NST Forum


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, HTML/CSS/JavaScript, database basics |
| Built by | Discourse, Reddit, Stack Overflow, Piazza |

**Skills you'll earn:** User authentication, voting systems, real-time WebSocket updates, moderation tools, reputation systems

Start with posting a message. End with a full campus discussion forum.

(Assumes starting from scratch with basic HTML/CSS/JS knowledge)

## Step 1: Post a message (~2 hours)

You want a place for students to ask questions.

- Set up a Node.js server with Express
- Create endpoints: `POST /posts` and `GET /posts`
- Store posts in-memory (array) with title, body, author name, and timestamp
- Build a frontend that shows all posts and a form to submit a new one

**You now have:** A message board.

## Step 2: Add a database (~2-3 hours)

You restart the server. All posts are gone.

- Set up PostgreSQL or MongoDB
- Create a schema: posts with id, title, body, author, createdAt
- Replace in-memory storage with database queries
- Add pagination: 20 posts per page

**You now have:** Persistent posts.

## Step 3: User accounts (~3-4 hours)

Anyone can post as anyone. "Author" is a text field. That's chaos.

- Add registration and login (email + password)
- Hash passwords with bcrypt
- Issue JWT tokens or use sessions
- Associate posts with authenticated users
- Show the author's name on each post

**You now have:** Authenticated posting.

## Step 4: Categories and threads (~3-4 hours)

Everything is in one flat list. CS questions mix with canteen complaints.

- Create categories: Academics, Technical Help, Campus Life, Events, Random
- Each post belongs to a category
- Filter posts by category
- Each post becomes a thread — add a replies system (comments on a post)

**You now have:** An organized forum.

## Step 5: Voting (~2-3 hours)

Good answers sink below bad ones because of chronological order.

- Add upvote and downvote buttons on posts and replies
- Sort by votes (highest first) or by date (newest first)
- Let users toggle the sort order
- One vote per user per post (prevent duplicate voting)

**You now have:** Community-ranked content.

## Step 6: Search (~2-3 hours)

You know someone asked about "linked lists" last week. You can't find it.

- Add full-text search on post titles and bodies
- Use your database's built-in text search (PostgreSQL tsvector or MongoDB text index)
- Add a search bar in the header
- Show results with highlighted matches

**You now have:** Forum search.

## Step 7: User profiles and reputation (~3-4 hours)

- Create profile pages showing a user's posts, replies, and total karma
- Award reputation points for upvotes received
- Display reputation badges (Newbie, Regular, Expert)
- Show "top contributors" on the sidebar

**You now have:** A reputation system.

## Step 8: Moderation (~3-4 hours)

- Add moderator roles that can delete posts, lock threads, and ban users
- Flagging system: users can report inappropriate content
- Moderator queue for flagged posts

## Step 9: Real-time updates (~3-4 hours)

- Use WebSockets to push new posts and replies to connected clients
- Show a "new replies" indicator without refreshing
- Typing indicators in active threads

## Step 10: Notifications (~3-4 hours)

- Notify users when someone replies to their post
- Notify when a post in a followed thread gets a new reply
- In-app notification bell, optionally email

## Step 11: Deploy (~3-4 hours)

- Containerize and deploy to the NST cluster
- Set up a domain, TLS, and Ingress
- Add CI/CD
- Restrict registration to NST email domains

## Useful Resources

- [Express.js](https://expressjs.com/) — Web framework for the API
- [jsonwebtoken (npm)](https://www.npmjs.com/package/jsonwebtoken) — JWT-based authentication
- [bcrypt (npm)](https://www.npmjs.com/package/bcrypt) — Secure password hashing
- [PostgreSQL Full Text Search](https://www.postgresql.org/docs/current/textsearch.html) — Built-in search capabilities
- [Socket.IO](https://socket.io/) — Real-time bidirectional communication
- [Discourse (GitHub)](https://github.com/discourse/discourse) — Open-source forum for inspiration

## Where to go from here

- Markdown support in posts and replies
- File and image attachments
- Anonymous posting mode
- Course-specific discussion boards (integrated with class schedules)
- Mobile app
- Integration with NST's LMS
