# Email Service


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~35-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, TCP/IP basics, DNS fundamentals |
| Built by | Gmail, ProtonMail, Fastmail, Postfix |

**Skills you'll earn:** SMTP protocol, IMAP implementation, TLS encryption, DNS records (MX/SPF/DKIM), spam filtering

Start with sending a string from one place to another. End with a self-hosted email system.

(Assumes basic Node.js knowledge; networking concepts learned along the way)

## Step 1: Send a message between two scripts (~1 hour)

Write two Node.js scripts. One listens on a TCP port. The other connects and sends a string. The listener prints it.

- `net.createServer()` on one side
- `net.connect()` on the other
- Send "Hello" and see it arrive

**You now have:** The most primitive message delivery system.

## Step 2: Follow the SMTP protocol (~3-4 hours)

Your TCP chat works, but no email client can talk to it. Email uses SMTP.

- Read RFC 5321 (just the basics: HELO, MAIL FROM, RCPT TO, DATA, QUIT)
- Modify your server to respond with the correct SMTP status codes
- Use `telnet localhost 25` to manually send an email to your server

**You now have:** An SMTP server that can receive mail.

## Step 3: Store received emails (~2 hours)

Your server receives messages but they vanish after printing.

- Save each email to a file: one file per message
- Include headers (From, To, Subject, Date) and body
- Parse the raw SMTP DATA into structured fields

**You now have:** A mailbox.

## Step 4: Send emails out (~3-4 hours)

You can receive but not send. Time to be an SMTP client.

- Connect to another SMTP server (like Gmail's) and deliver a message
- Handle DNS MX record lookups to find the right server for a domain
- Add proper headers so the receiving server doesn't reject you

**You now have:** Bidirectional email.

## Step 5: Add a web interface (~3-4 hours)

Reading email from files is painful.

- Build a simple web UI: inbox list, click to read
- Show From, Subject, Date in the list
- Show full message body when clicked
- Add a "Compose" form that sends via your SMTP client

**You now have:** Webmail.

## Step 6: User accounts and mailboxes (~3 hours)

Everyone's mail is in one pile.

- Add user registration and login
- Each user gets their own mailbox directory
- Route incoming mail to the correct user based on the RCPT TO address

**You now have:** Multi-user email.

## Step 7: IMAP support (~4-5 hours)

Your users want to use Thunderbird or Apple Mail, not just your web UI.

- Implement basic IMAP (RFC 3501) — LOGIN, SELECT, FETCH, SEARCH
- This lets desktop/mobile email clients connect to your server
- Start with read-only access, then add delete and move

**You now have:** A real email server.

## Step 8: DNS records (~2-3 hours)

Emails you send get rejected or land in spam.

- Set up MX records so other servers know where to deliver mail for your domain
- Add SPF records (which IPs are allowed to send for your domain)
- Add DKIM (cryptographic signature on outgoing mail)
- Add DMARC policy

**You now have:** Deliverable email.

## Step 9: TLS encryption (~2 hours)

Everything is in plaintext. Anyone on the network can read your emails.

- Add STARTTLS to your SMTP server
- Generate or obtain TLS certificates
- Enforce encryption for connections

## Step 10: Spam filtering (~3 hours)

Your inbox is filling with junk.

- Build a basic spam filter: check SPF/DKIM of incoming mail
- Add a blocklist of known spam domains
- Score messages based on content heuristics
- Move suspected spam to a separate folder

## Step 11: Attachments (~2-3 hours)

- Parse MIME multipart messages
- Extract and store attachments
- Display them in the web UI
- Allow attaching files when composing

## Step 12: Search (~2 hours)

- Index messages for full-text search
- Search by sender, subject, body, date range

## Step 13: Deploy (~3 hours)

- Containerize the whole thing
- Deploy to the cluster
- Open ports 25 (SMTP), 143 (IMAP), 443 (webmail)
- Monitor delivery rates and bounce handling

## Useful Resources

- [RFC 5321 — SMTP Protocol](https://datatracker.ietf.org/doc/html/rfc5321)
- [RFC 3501 — IMAP Protocol](https://datatracker.ietf.org/doc/html/rfc3501)
- [Node.js net module](https://nodejs.org/api/net.html)
- [Nodemailer](https://nodemailer.com/)
- [How Email Works (MX, SPF, DKIM)](https://www.cloudflare.com/learning/dns/dns-records/dns-mx-record/)
- [Let's Encrypt](https://letsencrypt.org/docs/)

## Where to go from here

- Calendar integration (CalDAV)
- Contacts (CardDAV)
- Mailing lists
- Encryption (PGP/S-MIME)
- Admin dashboard with usage stats
