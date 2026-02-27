# Photo Booth


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~25-30 hours |
| Demo-ready by | Step 5 |
| Prerequisites | HTML, CSS, JavaScript, basic image processing concepts |
| Built by | Photo Booth (macOS), Snapchat, Instagram, VSCO |

**Skills you'll earn:** WebRTC/getUserMedia, Canvas pixel manipulation, image filters, WebGL shaders, face detection

Start with accessing the webcam. End with a full photo booth with filters and effects.

(Assumes basic HTML/CSS/JS knowledge. Includes learning getUserMedia, Canvas pixel manipulation, and face detection libraries.)

## Step 1: Show the webcam feed (~1 hour)

You want to see yourself in the browser.

- One HTML page with a `<video>` element
- Use `navigator.mediaDevices.getUserMedia({ video: true })` to get the camera stream
- Set the stream as the video element's source
- Handle the permission prompt gracefully (show a message if denied)

**You now have:** A live webcam feed.

## Step 2: Capture a photo (~1-2 hours)

You can see yourself but can't save the moment.

- Add a "Capture" button
- On click, draw the current video frame onto a `<canvas>`
- Convert the canvas to a data URL (`toDataURL('image/png')`)
- Display the captured photo below the video feed
- Add a "Download" button for the captured image

**You now have:** Photo capture.

## Step 3: Countdown timer (~1-2 hours)

Clicking the button and posing at the same time is awkward.

- Add a 3-second countdown after clicking capture
- Display the countdown number as a large overlay on the video feed
- Play a shutter sound when the photo is taken
- Flash the screen white briefly to simulate a camera flash

**You now have:** A proper photo-taking experience.

## Step 4: CSS filters (~2-3 hours)

Plain photos are boring. You want Instagram-style effects.

- Apply CSS filters to the video feed: grayscale, sepia, brightness, contrast, blur, hue-rotate
- Add a row of filter thumbnails below the video (small previews of each filter applied)
- Click a thumbnail to apply that filter
- The filter should apply to both the live feed and the captured photo

**You now have:** Photo filters.

## Step 5: Canvas-based effects (~3-4 hours)

CSS filters are limited. You want pixel-level control.

- Draw each video frame to a canvas using `requestAnimationFrame`
- Get the pixel data with `getImageData()`
- Manipulate pixels: invert colors, posterize, pixelate, edge detection
- Apply the manipulation and draw back with `putImageData()`

**You now have:** Custom image processing.

## Step 6: Overlays and stickers (~4-5 hours)

You want to add funny hats, glasses, and frames.

- Load PNG overlay images (transparent backgrounds)
- Let users drag stickers onto the canvas and position them
- For face-tracking overlays: use a face detection library (face-api.js or MediaPipe) to place stickers on detected faces automatically
- Support resizing and rotating stickers

**You now have:** Augmented reality stickers.

## Step 7: Photo strip (~2-3 hours)

- Capture 4 photos in sequence (like a classic photo booth strip)
- Combine them into a vertical strip with a border and timestamp
- Download the strip as a single image

## Step 8: Video recording (~2-3 hours)

- Record the webcam feed as a video using MediaRecorder API
- Apply filters to the recorded video
- Download as WebM or MP4

## Step 9: Sharing (~3-4 hours)

- Upload captured photos to a server
- Generate a shareable link or QR code
- Gallery page showing recent captures

## Step 10: Deploy (~1-2 hours)

- Deploy as a static site (no server needed for basic features)
- Add the server for sharing features
- Add CI/CD

## Useful Resources

- [MDN: getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [MDN: Canvas pixel manipulation (getImageData)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
- [MDN: CSS filter property](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
- [face-api.js (GitHub) – face detection in the browser](https://github.com/justadudewhohacks/face-api.js)
- [MDN: MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)

## Where to go from here

- Background removal (segment person from background)
- Virtual backgrounds (replace background with an image)
- Green screen mode
- GIF creation from a burst of photos
- Print integration for physical photo booth setups
