# Music Programming Language


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, basic music theory, compiler/interpreter concepts |
| Built by | Sonic Pi, TidalCycles, ChucK, Alda |

**Skills you'll earn:** Lexer/parser design, DSL implementation, Web Audio API, live coding, MIDI export

Start with playing a note from text. End with a DSL that composes music.

(Assumes basic JS knowledge; parser theory and music concepts learned along the way)

## Step 1: Parse a note and play it (~2 hours)

You want to type `play C4` and hear a C note.

- Build a simple parser that reads a line of text and extracts the command and arguments
- Use the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to create an oscillator at the correct frequency
- Map note names to frequencies (A4 = 440 Hz, use the equal temperament formula)
- Build a text input and a "Run" button

**You now have:** A one-command music interpreter.

## Step 2: Sequences and duration (~2-3 hours)

`play C4` plays one note. You want `play C4 D4 E4` to play a melody.

- Extend the parser to accept multiple notes on one line
- Add duration syntax: `C4:q` (quarter note), `C4:h` (half), `C4:e` (eighth)
- Schedule notes sequentially using [`AudioContext.currentTime`](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime)
- Add a `tempo 120` command to set BPM

**You now have:** A sequential note language.

## Step 3: Define a formal grammar (~4-5 hours)

String splitting breaks on edge cases. You need a real parser.

- Define a grammar for your language using [PEG.js](https://pegjs.org/) or write a recursive descent parser by hand
- Support statements: `tempo`, `play`, `rest`, `repeat`
- Parse into an AST (Abstract Syntax Tree) — an array of node objects
- Walk the AST to schedule audio

**You now have:** A parsed language with an AST.

## Step 4: Variables and patterns (~3-4 hours)

You're repeating the same sequence everywhere. You want to name it.

- Add variable assignment: `riff = C4:q D4:q E4:q`
- Add pattern playback: `play riff`
- Support `repeat 4 { riff }` for looping
- Variables are stored in a symbol table during interpretation

**You now have:** Reusable musical patterns.

## Step 5: Multiple tracks (~3-4 hours)

One melody line is thin. You want drums and bass playing simultaneously.

- Add track syntax: `track bass { ... }` and `track drums { ... }`
- Each track gets its own oscillator or sound source
- Tracks play in parallel (schedule all tracks from the same start time)
- Add instrument selection: `instrument sine`, `instrument square`, `instrument sawtooth`

**You now have:** Multi-track composition.

## Step 6: Chords and dynamics (~3 hours)

- Add chord syntax: `[C4 E4 G4]:h` plays three notes simultaneously
- Add velocity/volume: `C4:q@0.8` plays at 80% volume
- Support crescendo and decrescendo over a range of notes

**You now have:** Expressive music notation.

## Step 7: A code editor with live preview (~3-4 hours)

- Build a [CodeMirror](https://codemirror.net/) editor with syntax highlighting for your language
- Add a "Play" button and a "Stop" button
- Show errors inline (highlight the line with the parse error)
- Add a piano roll visualization of the output

## Step 8: Export (~3-4 hours)

- Export as MIDI using a library like [jsmidgen](https://github.com/dingram/jsmidgen) or [midi-writer-js](https://github.com/grimmdude/MidiWriterJS)
- Export as WAV by recording the Web Audio output
- Export the source code as a `.music` file

## Step 9: Standard library (~3-4 hours)

- Ship built-in patterns: drum loops, common chord progressions, scales
- Let users import community-shared patterns
- Add a package system: `import jazz-chords`

## Useful Resources

- [Web Audio API — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [Building a Parser from Scratch](https://craftinginterpreters.com/) — Crafting Interpreters (book, free online)
- [PEG.js — Parser Generator for JavaScript](https://pegjs.org/)
- [Music Theory for Programmers](https://www.lightnote.co/) — interactive music theory
- [Tone.js](https://tonejs.github.io/) — higher-level Web Audio framework

## Where to go from here

- Live coding mode (change code while music plays, hot-reload)
- Visual block-based editor (Scratch-style) that generates the DSL
- Microtonal support (custom tuning systems)
- Integration with external MIDI devices
- Collaborative jam sessions over WebSocket
