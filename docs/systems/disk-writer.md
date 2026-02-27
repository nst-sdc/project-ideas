# Disk Image Writer


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | Python or C, Linux device files, binary I/O |
| Built by | Rufus, balenaEtcher, Raspberry Pi Imager, dd |

**Skills you'll earn:** Raw disk I/O, partition tables, ISO/IMG parsing, USB device enumeration, GUI frameworks (Electron/GTK)

Start by writing raw bytes to a file. End with a GUI tool that flashes OS images to USB drives like Rufus.

## Step 1: Write raw bytes to a file (~2-3 hours)

Before touching real hardware, understand block-level I/O.

- Open a file in binary write mode using low-level I/O ([Node.js fs](https://nodejs.org/api/fs.html), Python [open()](https://docs.python.org/3/library/functions.html#open) with `'rb'`/`'wb'`, or C `fopen`)
- Write a known byte pattern (e.g., 512 bytes of `0xAA`)
- Read it back and verify every byte matches
- Measure write speed

**You now have:** Controlled binary I/O.

## Step 2: Detect USB drives (~2-3 hours)

You need to know which devices are available and safe to write to.

- List all block devices on the system ([`/sys/block/`](https://www.kernel.org/doc/Documentation/ABI/testing/sysfs-block) on Linux, `diskutil list` on macOS)
- Filter to removable devices only — never show the system disk
- Display: device path, size, label, mounted partitions
- Re-scan when a USB is plugged in (poll or use [udev](https://www.freedesktop.org/software/systemd/man/latest/udev.html) events)

**You now have:** Safe device enumeration.

## Step 3: Write an image to a USB drive (~3-4 hours)

The core operation. You are doing what `dd` does, but with control.

- Open the image file and the target block device
- Write in chunks (1MB or 4MB blocks)
- Report progress: bytes written, percentage, speed, ETA
- Flush and sync after completion

**You now have:** A functional disk writer.

## Step 4: Verify the write (~3-4 hours)

A power glitch or bad sector means the USB won't boot.

- After writing, read back every block from the device
- Compute a checksum ([SHA-256](https://nodejs.org/api/crypto.html#cryptography)) of the written data
- Compare against the checksum of the source image
- Report pass/fail with the first mismatched offset if it fails

**You now have:** Write verification.

## Step 5: Handle image formats (~3-4 hours)

Not every image is a raw `.img`. People download `.iso`, `.gz`, `.xz`, `.zip`.

- Detect format from file headers (magic bytes), not extensions
- Decompress on the fly while writing — no need to extract first
- Support at minimum: raw, gzip, xz, zip-contained images
- Show decompressed size for accurate progress

**You now have:** Multi-format support.

## Step 6: Build a GUI (~4-5 hours)

Command-line tools scare people who just want to flash an SD card.

- Simple window: select image, select drive, flash button, progress bar
- Use [Electron](https://www.electronjs.org/docs/latest/) or [Tauri](https://tauri.app/start/)
- Disable the flash button until both image and drive are selected
- Show a confirmation dialog with the drive name and size before writing

**You now have:** A user-friendly disk writer.

## Step 7: Partition and format options (~3-4 hours)

- Add a "format only" mode: create a partition table and filesystem (FAT32, exFAT, ext4)
- Add a "create bootable USB" mode that writes a bootloader (syslinux/GRUB) after flashing
- Let the user pick partition scheme: MBR or GPT

## Step 8: Cross-platform support (~3-4 hours)

- Abstract OS-specific code behind an interface: device listing, raw writes, unmounting
- Package for Windows, macOS, Linux
- Handle platform quirks: Windows needs admin elevation, macOS needs disk arbitration

## Useful Resources

- [Tauri Documentation](https://tauri.app/start/)
- [Electron Documentation](https://www.electronjs.org/docs/latest/)
- [Etcher Source Code (reference)](https://github.com/balena-io/etcher)
- [Linux Block Device Documentation](https://www.kernel.org/doc/Documentation/ABI/testing/sysfs-block)
- [Node.js File System API](https://nodejs.org/api/fs.html)

## Where to go from here

- Persistent storage partition (flash an OS image but keep a data partition)
- Multi-boot USB (multiple ISOs on one drive with a boot menu)
- Network flashing (PXE boot from the tool)
- Checksum database for popular OS images (auto-verify downloads)
