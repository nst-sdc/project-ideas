# Video Optimization Pipeline


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~25-30 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Node.js, FFmpeg basics, video codec concepts |
| Built by | FFmpeg, HandBrake, Cloudinary, Mux |

**Skills you'll earn:** FFmpeg automation, HLS/DASH streaming, video transcoding, job queues, adaptive bitrate

Start with transcoding a file. End with an automated video processing pipeline.

(Assumes basic Node.js knowledge; FFmpeg and video concepts learned along the way)

## Step 1: Transcode a video (~1-2 hours)

You have an MOV file from a phone. You need an MP4 for the web.

- Write a Node.js script that shells out to [FFmpeg](https://ffmpeg.org/documentation.html) using [`child_process.exec`](https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback)
- Accept input path and output path as arguments
- Transcode to H.264 MP4 with reasonable defaults: `-c:v libx264 -crf 23 -preset medium`
- Print the output file size

**You now have:** A video transcoder.

## Step 2: Resolution and bitrate control (~1-2 hours)

The source is 4K. Your website serves 720p.

- Add flags for target resolution: `--width 1280` (height auto-calculated)
- Add bitrate control: `--bitrate 2M`
- Use FFmpeg's scale filter: `-vf scale=1280:-2`
- Show before/after resolution and file size

**You now have:** Resolution and bitrate control.

## Step 3: Generate multiple renditions (~2-3 hours)

Adaptive streaming needs the same video at different qualities.

- Accept an array of target resolutions: 360p, 480p, 720p, 1080p
- Generate one output file per resolution
- Name outputs systematically: `video_720p.mp4`, `video_1080p.mp4`
- Run transcodes in parallel (spawn multiple FFmpeg processes)

**You now have:** Multi-resolution output.

## Step 4: HLS packaging (~3-4 hours)

MP4 files don't support adaptive bitrate streaming. You need [HLS](https://developer.apple.com/documentation/http-live-streaming).

- Use FFmpeg to segment each rendition into `.ts` chunks with an `.m3u8` playlist
- Generate a master playlist that references all quality levels
- Serve the output with a static file server
- Test with an [HLS.js](https://github.com/video-dev/hls.js) player in the browser

**You now have:** Adaptive streaming.

## Step 5: Thumbnail and preview generation (~2 hours)

You need video thumbnails for your UI.

- Extract a thumbnail at a specific timestamp: `-ss 5 -frames:v 1`
- Generate a sprite sheet of thumbnails (one every 10 seconds) for hover preview
- Generate an animated GIF preview (5-second clip)

**You now have:** Video thumbnails and previews.

## Step 6: Build a web interface (~3-4 hours)

The command line works. Your team wants to upload and process from a browser.

- Set up an [Express](https://expressjs.com/) server with [Multer](https://github.com/expressjs/multer) for video uploads
- Accept upload, queue a processing job
- Show processing status (waiting, transcoding, done)
- Provide download links for all outputs

**You now have:** A web-based video processor.

## Step 7: Job queue (~3-4 hours)

Two people upload simultaneously. The server runs out of CPU.

- Add a job queue using [BullMQ](https://docs.bullmq.io/) with [Redis](https://redis.io/docs/)
- Upload endpoint enqueues a job and returns a job ID
- Worker processes pick up jobs and run FFmpeg
- Frontend polls for job status

**You now have:** Queued, non-blocking video processing.

## Step 8: Audio processing (~2-3 hours)

- Extract audio track separately
- Normalize audio levels
- Add support for audio-only output (podcast optimization)

## Step 9: Watermarking and overlays (~2-3 hours)

- Burn a watermark image into the video using FFmpeg's overlay filter
- Add text overlays (title cards, timestamps)
- Support intro/outro concatenation

## Useful Resources

- [FFmpeg documentation](https://ffmpeg.org/documentation.html)
- [FFmpeg filters reference](https://ffmpeg.org/ffmpeg-filters.html)
- [HLS.js — HTTP Live Streaming player](https://github.com/video-dev/hls.js)
- [BullMQ — Node.js job queue](https://docs.bullmq.io/)
- [Web.dev — Video best practices](https://web.dev/fast/#optimize-your-images)

## Where to go from here

- AI-powered scene detection and auto-chaptering
- Subtitle extraction and burn-in (OCR or speech-to-text)
- Content-aware encoding (allocate more bits to complex scenes)
- Live streaming ingest and transcoding
- Cost estimation based on processing time and storage
