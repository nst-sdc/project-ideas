# Shasn — Political Strategy Board Game


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, Canvas/SVG, game design basics |
| Built by | SHASN (board game), Catan Universe, Twilight Struggle Digital, Through the Ages |

**Skills you'll earn:** Board game logic, multiplayer state sync, political simulation, AI opponents, lobby systems

Start with a grid and players. End with a digital political strategy game.

(Assumes basic HTML/CSS/JS knowledge; game mechanics and networking learned along the way)

## Step 1: Render the board (~1-2 hours)

Shasn is played on a grid where players claim territories.

- One HTML page with a grid rendered in [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) or as a CSS grid of `<div>` elements
- Define a 9x9 (or similar) grid of zones
- Each zone starts unclaimed (neutral color)
- Show the grid with borders and zone identifiers

**You now have:** A game board.

## Step 2: Player turns and zone claiming (~2 hours)

Players take turns claiming zones. Start with the simplest interaction.

- Support 2-4 players, each with a color
- On a player's turn, they click an unclaimed zone to place a voter token
- The zone changes to the player's color
- Turn rotates to the next player

**You now have:** Turn-based territory claiming.

## Step 3: Ideology cards and dilemma system (~3-4 hours)

Shasn's core mechanic: answer political dilemmas to earn resources.

- Create a deck of dilemma cards (JSON data): each card has a question and two answers
- Each answer corresponds to an ideology: Idealist, Opportunist, Capitalist, Showman
- At the start of each turn, draw a card and present the dilemma
- The player's choice gives them resources of that ideology type

**You now have:** The dilemma system.

## Step 4: Resource-based actions (~3-4 hours)

Resources aren't useful unless they buy power.

- Define actions that cost ideology resources: place extra voters, move voters, remove opponent voters
- Each ideology unlocks different action types (Capitalist buys influence, Showman sways crowds)
- Show the player's resource inventory
- Players spend resources to take actions during their turn

**You now have:** Strategic resource spending.

## Step 5: Zone control and majority (~2-3 hours)

A single voter per zone is too simple. Zones should be contested.

- Allow multiple voters from different players in a zone
- A zone is "controlled" by the player with the most voters in it
- Adjacent controlled zones form regions
- Display a voter count per player in each zone

**You now have:** Contested territory.

## Step 6: Headline cards (~3-4 hours)

In Shasn, headline cards are powerful events that change the game state.

- Create headline cards that trigger global effects (remove all voters of one color from a row, double voters in a region, etc.)
- Players can earn or buy headline cards
- Playing a headline card is a strategic decision — timing matters
- Show active effects on the board

**You now have:** Event-driven gameplay.

## Step 7: Win condition and scoring (~2 hours)

The game needs an end state.

- Game ends after N rounds or when all zones have voters
- Score: count controlled zones per player
- Bonus points for controlling entire rows, columns, or specific regions
- Announce the winner with final scores

**You now have:** A complete game loop.

## Step 8: Online multiplayer (~4-5 hours)

- Set up a [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) server for real-time multiplayer
- Rooms and lobbies: create a game, share a code, others join
- Server validates all moves (don't trust the client)
- Handle disconnections and reconnections

## Step 9: AI opponents (~4-5 hours)

- Build a simple AI: random valid moves
- Improve it: prioritize zones that complete regions, hoard resources for powerful cards
- Add difficulty levels

## Useful Resources

- [Shasn official site](https://www.shasn.com/) — reference for rules and mechanics
- [WebSocket API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Game Programming Patterns](https://gameprogrammingpatterns.com/) — state machines, game loops
- [Socket.IO](https://socket.io/docs/) — real-time communication library
- [Boardgame.io](https://boardgame.io/) — framework for turn-based games

## Where to go from here

- Campaign mode with a storyline
- Custom card editor (create your own dilemmas)
- Spectator mode and game replays
- Mobile app with touch controls
- Ranked matchmaking and leaderboards
