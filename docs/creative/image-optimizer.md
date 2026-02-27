# Image Optimizer


| | |
|---|---|
| Difficulty | Intermediate |
| Team Size | Solo |
| Time | ~20-25 hours |
| Demo-ready by | Step 5 |
| Prerequisites | JavaScript, Node.js, image format basics |
| Built by | TinyPNG, Squoosh, ImageOptim, Sharp |

**Skills you'll earn:** Image codecs (WebP/AVIF), Canvas compression, WebAssembly, batch processing, quality metrics (SSIM)

Start with resizing an image. End with a full optimization pipeline.

(Assumes basic Node.js knowledge; image processing concepts learned along the way)

## Step 1: Resize an image (~1 hour)

You have a 4000x3000 photo. Your website needs it at 800px wide.

- Write a Node.js script using [Sharp](https://sharp.pixelplumbing.com/) (install with `npm install sharp`)
- Accept an input path and a target width as arguments
- Resize the image, maintaining aspect ratio
- Save the output to a new file

**You now have:** A command-line image resizer.

## Step 2: Format conversion (~1 hour)

Your designer sends PNGs. Your website needs WebP for smaller file sizes.

- Add a `--format` flag: `jpeg`, `png`, `webp`, `avif`
- Use Sharp's `.toFormat()` to convert
- Show the file size before and after conversion
- Support quality settings per format

**You now have:** Format conversion with size comparison.

## Step 3: Batch processing (~2 hours)

You have 200 images. Running the script 200 times is not an option.

- Accept a directory as input instead of a single file
- Process all images in the directory
- Preserve the directory structure in the output folder
- Add a progress indicator (processed 47/200)

**You now have:** Batch image optimization.

## Step 4: Build a web interface (~3-4 hours)

The command line works for you. Your designer wants a drag-and-drop UI.

- Set up an [Express](https://expressjs.com/) server with a file upload endpoint using [Multer](https://github.com/expressjs/multer)
- Build a frontend with a drag-and-drop zone
- Upload images, process server-side with Sharp, return the optimized versions
- Show before/after file sizes and a visual comparison

**You now have:** A web-based image optimizer.

## Step 5: Compression tuning (~2-3 hours)

Default compression isn't always optimal. You want control.

- Add sliders for quality (1-100) for lossy formats
- Show a live preview of the compressed image at different quality levels
- Display the file size at each quality level
- Find the sweet spot: smallest file size with acceptable quality

**You now have:** Interactive compression tuning.

## Step 6: Metadata handling (~2 hours)

Your photos contain GPS coordinates and camera info. Sometimes you want to strip it, sometimes keep it.

- Read [EXIF](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) metadata using Sharp or [exif-reader](https://github.com/devongovett/exif-reader)
- Display metadata to the user
- Option to strip all metadata (privacy)
- Option to preserve specific fields (copyright, date)

**You now have:** Metadata management.

## Step 7: Responsive image generation (~2-3 hours)

- Generate multiple sizes from one image (thumbnail, small, medium, large)
- Output an HTML `<picture>` element with `srcset` for each size
- Generate WebP and fallback JPEG for each size

## Step 8: API mode (~2-3 hours)

- Expose optimization as a REST API: `POST /optimize` with multipart upload
- Accept parameters: width, format, quality
- Return the optimized image as the response body
- Add rate limiting and file size limits

## Step 9: Deploy (~2-3 hours)

- Containerize with [Docker](https://docs.docker.com/get-started/)
- Deploy behind a CDN for caching optimized images
- Add CI/CD

## Useful Resources

- [Sharp documentation](https://sharp.pixelplumbing.com/)
- [Web.dev — Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Squoosh](https://squoosh.app/) — Google's image optimizer (for reference)
- [MDN — `<picture>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [AVIF format explained](https://jakearchibald.com/2020/avif-has-landed/)

## Where to go from here

- Smart cropping (face detection, subject-aware cropping)
- SVG optimization (SVGO integration)
- PDF image optimization
- Browser extension for optimizing images before upload
- CDN integration (optimize on-the-fly at the edge)
