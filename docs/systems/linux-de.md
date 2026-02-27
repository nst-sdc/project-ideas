# Custom Linux Desktop Environment


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 3-5 people |
| Time | ~40-50 hours |
| Demo-ready by | Step 5 |
| Prerequisites | C/C++, X11/Wayland basics, Linux internals |
| Built by | GNOME, KDE Plasma, XFCE, Sway |

**Skills you'll earn:** Window management (X11/Wayland), compositor rendering, D-Bus IPC, system tray protocols, theme engines

Start with drawing a window. End with a usable desktop environment.

## Step 1: Draw a window on screen (~3-4 hours)

A desktop environment manages windows. Start with one.

- Set up a minimal Linux system with [X11](https://www.x.org/wiki/) or [Wayland](https://wayland.freedesktop.org/)
- Write a C program using [Xlib](https://www.x.org/releases/current/doc/libX11/libX11/libX11.html) (or the Wayland equivalent) that creates a window
- Set the window's size, position, and title
- Draw a colored rectangle inside it
- Handle the close event

**You now have:** A window on a bare X11 session.

## Step 2: Build a window manager (~4-5 hours)

Multiple windows overlap with no way to move or resize them. That's the window manager's job.

- Write a minimal [X11 window manager](https://jichu4n.com/posts/how-x-window-managers-work-and-how-to-write-one/): intercept `MapRequest`, `ConfigureRequest`, and `ButtonPress` events
- Add window decorations: a title bar with the window name and a close button
- Click and drag the title bar to move the window
- Drag window edges to resize

**You now have:** A basic window manager.

## Step 3: Taskbar / panel (~4-5 hours)

You can't tell what's running or switch between windows.

- Create a panel window that sits at the top or bottom of the screen
- List open windows as buttons in the panel
- Click a button to focus that window
- Show the current date and time on the right side

**You now have:** A taskbar.

## Step 4: Application launcher (~3-4 hours)

You have windows but no way to start programs.

- Add a launcher button (or keyboard shortcut) that opens a search dialog
- Scan `/usr/share/applications/` for `.desktop` files
- Filter by name as the user types
- Launch the selected application with `exec`

**You now have:** An app launcher.

## Step 5: Desktop wallpaper and icons (~4-5 hours)

The background is plain gray.

- Render a background image behind all windows (the root window)
- Let users set the wallpaper from settings
- Add desktop icons: files/folders on the desktop surface
- Double-click an icon to open the associated application

**You now have:** A desktop surface.

## Step 6: Multi-workspace (~4-5 hours)

One screen isn't enough space.

- Implement virtual desktops (workspaces)
- Keyboard shortcuts to switch: Super+1, Super+2, etc.
- Each workspace has its own set of visible windows
- Show workspace indicators in the panel

**You now have:** Virtual desktops.

## Step 7: System tray and notifications (~3-4 hours)

- Add a system tray area in the panel for background apps
- Implement a notification daemon: apps send notifications, the DE displays them as popups
- Follow the [freedesktop.org notification spec](https://specifications.freedesktop.org/notification-spec/)

## Step 8: Settings and theming (~4-5 hours)

- Build a settings application to configure wallpaper, theme, font, keybindings
- Support GTK theme integration so apps look consistent
- Save settings to a config file

## Useful Resources

- [Xlib Programming Manual](https://www.x.org/releases/current/doc/libX11/libX11/libX11.html)
- [How X Window Managers Work](https://jichu4n.com/posts/how-x-window-managers-work-and-how-to-write-one/)
- [Wayland Book](https://wayland-book.com/) — if targeting Wayland
- [freedesktop.org specifications](https://specifications.freedesktop.org/)
- [TinyWM](http://incise.org/tinywm.html) — a 50-line window manager for reference

## Where to go from here

- Compositor with transparency and shadows (picom-style)
- Lock screen and session management
- Display settings (multi-monitor, resolution)
- File manager integration
- Wayland port for modern display server support
