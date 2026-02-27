# Email Service

Start with sending a string from one place to another. End with a self-hosted email system.

## Step 1: Send a message between two scripts

Write two Node.js scripts. One listens on a TCP port. The other connects and sends a string. The listener prints it.

- `net.createServer()` on one side
- `net.connect()` on the other
- Send "Hello" and see it arrive

**You now have:** The most primitive message delivery system.

## Step 2: Follow the SMTP protocol

Your TCP chat works, but no email client can talk to it. Email uses SMTP.

- Read RFC 5321 (just the basics: HELO, MAIL FROM, RCPT TO, DATA, QUIT)
- Modify your server to respond with the correct SMTP status codes
- Use `telnet localhost 25` to manually send an email to your server

**You now have:** An SMTP server that can receive mail.

## Step 3: Store received emails

Your server receives messages but they vanish after printing.

- Save each email to a file: one file per message
- Include headers (From, To, Subject, Date) and body
- Parse the raw SMTP DATA into structured fields

**You now have:** A mailbox.

## Step 4: Send emails out

You can receive but not send. Time to be an SMTP client.

- Connect to another SMTP server (like Gmail's) and deliver a message
- Handle DNS MX record lookups to find the right server for a domain
- Add proper headers so the receiving server doesn't reject you

**You now have:** Bidirectional email.

## Step 5: Add a web interface

Reading email from files is painful.

- Build a simple web UI: inbox list, click to read
- Show From, Subject, Date in the list
- Show full message body when clicked
- Add a "Compose" form that sends via your SMTP client

**You now have:** Webmail.

## Step 6: User accounts and mailboxes

Everyone's mail is in one pile.

- Add user registration and login
- Each user gets their own mailbox directory
- Route incoming mail to the correct user based on the RCPT TO address

**You now have:** Multi-user email.

## Step 7: IMAP support

Your users want to use Thunderbird or Apple Mail, not just your web UI.

- Implement basic IMAP (RFC 3501) — LOGIN, SELECT, FETCH, SEARCH
- This lets desktop/mobile email clients connect to your server
- Start with read-only access, then add delete and move

**You now have:** A real email server.

## Step 8: DNS records

Emails you send get rejected or land in spam.

- Set up MX records so other servers know where to deliver mail for your domain
- Add SPF records (which IPs are allowed to send for your domain)
- Add DKIM (cryptographic signature on outgoing mail)
- Add DMARC policy

**You now have:** Deliverable email.

## Step 9: TLS encryption

Everything is in plaintext. Anyone on the network can read your emails.

- Add STARTTLS to your SMTP server
- Generate or obtain TLS certificates
- Enforce encryption for connections

## Step 10: Spam filtering

Your inbox is filling with junk.

- Build a basic spam filter: check SPF/DKIM of incoming mail
- Add a blocklist of known spam domains
- Score messages based on content heuristics
- Move suspected spam to a separate folder

## Step 11: Attachments

- Parse MIME multipart messages
- Extract and store attachments
- Display them in the web UI
- Allow attaching files when composing

## Step 12: Search

- Index messages for full-text search
- Search by sender, subject, body, date range

## Step 13: Deploy

- Containerize the whole thing
- Deploy to the cluster
- Open ports 25 (SMTP), 143 (IMAP), 443 (webmail)
- Monitor delivery rates and bounce handling

## Where to go from here

- Calendar integration (CalDAV)
- Contacts (CardDAV)
- Mailing lists
- Encryption (PGP/S-MIME)
- Admin dashboard with usage stats
