# Algorithmic Music Generator


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-40 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, basic music theory, audio concepts |
| Built by | AIVA, Amper Music, MuseNet, Sonic Pi |

**Skills you'll earn:** Web Audio API, music theory algorithms, Markov chains, MIDI generation, audio synthesis

Start with a beep. End with a system that composes music from rules.

(Assumes basic JS knowledge. Includes significant time learning Web Audio API, music theory, and DSP concepts.)

## Step 1: Play a sound in the browser (~1-2 hours)

You want to hear a note. Just one note.

- One HTML page with a "Play" button
- Use the Web Audio API: create an `AudioContext` and an `OscillatorNode`
- Set the frequency to 440 Hz (A4)
- Start and stop the oscillator on button click
- Add a gain node to control volume

**You now have:** A browser synthesizer playing a single note.

## Step 2: Play a sequence of notes (~2-3 hours)

One note isn't music. You need melody.

- Define a scale as an array of frequencies (C major: C4, D4, E4, F4, G4, A4, B4)
- Play each note for a fixed duration (200ms), one after another
- Use `setTimeout` or schedule with `AudioContext.currentTime` for precise timing
- Add a tempo control (BPM)

**You now have:** A note sequencer.

## Step 3: Generate melodies algorithmically (~4-5 hours)

Playing a fixed scale isn't composition. You want the computer to create melodies.

- Implement random note selection from a scale
- Add rules: prefer stepwise motion (move to adjacent notes), occasional leaps
- Use a Markov chain: the next note depends on the current note (build a transition probability table)
- Generate 16-bar melodies

**You now have:** Algorithmic melody generation.

## Step 4: Rhythm generation (~3-4 hours)

Every note has the same duration. Real music has rhythm.

- Define note durations: whole, half, quarter, eighth, sixteenth
- Assign random durations weighted toward common patterns
- Add rests (silence) as a possible duration
- Ensure measures add up to the correct beat count (e.g., 4 beats per bar)

**You now have:** Rhythmic patterns.

## Step 5: Chords and harmony (~4-5 hours)

A single melodic line sounds thin.

- Generate chord progressions using common patterns (I-IV-V-I, ii-V-I)
- Play chords as multiple simultaneous oscillators
- The melody should follow the chord tones (or resolve to them on strong beats)
- Add a bass line that follows the chord roots

**You now have:** Harmony.

## Step 6: Better sound (~4-5 hours)

Oscillator beeps sound terrible.

- Shape the sound with ADSR envelopes (attack, decay, sustain, release) using gain node automation
- Add different waveforms: sine, square, sawtooth, triangle
- Add effects: reverb (ConvolverNode), delay, filter (BiquadFilterNode)
- Layer sounds for richness

**You now have:** Synthesized instruments.

## Step 7: Export (~3-4 hours)

- Record the output using MediaRecorder and the audio context's destination
- Export as WAV or MP3
- Generate MIDI output (use a MIDI library) for importing into a DAW

## Step 8: Genre presets (~3-4 hours)

- Define rule sets for different styles: ambient, jazz, classical, lo-fi
- Each genre has its own scales, chord progressions, rhythms, and timbres
- Let users mix parameters across genres

## Step 9: Visual feedback (~3-4 hours)

- Show a piano roll visualization of the generated music
- Animate notes as they play
- Display the current chord and scale

## Useful Resources

- [MDN: Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [MDN: OscillatorNode](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [Tone.js – Web Audio framework](https://tonejs.github.io/)
- [Music Theory for Beginners (musictheory.net)](https://www.musictheory.net/lessons)
- [Markov Chains explained (setosa.io)](https://setosa.io/ev/markov-chains/)
- [MDN: MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)

## Where to go from here

- Machine learning models trained on real music (RNN, transformer)
- User-guided generation (hum a melody, the system harmonizes it)
- Multi-instrument arrangements
- Live performance mode (generate in real time, never repeating)
- Collaborative composition
