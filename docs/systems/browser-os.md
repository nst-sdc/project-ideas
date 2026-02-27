# Browser-Based OS Simulator


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~30-35 hours |
| Demo-ready by | Step 5 |
| Prerequisites | HTML, CSS, JavaScript, OS concepts |
| Built by | Windows 93, OS.js, Puter, DeskOS |

**Skills you'll earn:** Window management, virtual filesystem, process scheduling, terminal emulation, app sandboxing

Start with a desktop in a div. End with a simulated operating system in the browser.

## Step 1: Render a desktop

You want a desktop environment — in a browser tab.

- One HTML page with a full-viewport div (the desktop)
- Set a background image (wallpaper)
- Add a taskbar div at the bottom with a clock showing the current time
- Add a few desktop icons (styled divs with images and labels)

**You now have:** A static desktop UI.

## Step 2: Open and close windows

Click an icon, nothing happens. You need windows.

- Double-click a desktop icon to open a window (a positioned `<div>` with a title bar, content area, and close button)
- Click the X to close (remove the div)
- Multiple windows can be open simultaneously
- Newly opened windows appear in front of others ([`z-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index))

**You now have:** A windowed interface.

## Step 3: Drag and resize windows

Windows are stuck where they spawn.

- Add drag behavior: mousedown on the title bar starts dragging, mousemove updates position, mouseup stops
- Add resize handles on window edges and corners
- Prevent windows from being dragged off-screen
- Click a window to bring it to the front (update z-index)

**You now have:** Movable, resizable windows.

## Step 4: A virtual file system

Your OS has no files.

- Implement a file system in JavaScript using a tree structure stored in memory
- Support files and directories: `{ name, type: 'file'|'dir', content, children }`
- Persist to [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- Create default directories: `/home`, `/desktop`, `/documents`

**You now have:** An in-memory file system.

## Step 5: Build apps

A desktop with no apps is a screensaver.

- **File Manager:** displays the virtual file system as a tree, navigate directories, open files
- **Text Editor:** opens text files, edit and save back to the virtual FS
- **Terminal:** a command-line interface that executes commands against the virtual FS (`ls`, `cd`, `cat`, `mkdir`, `echo`)
- Each app opens in its own window

**You now have:** Usable applications.

## Step 6: Taskbar and window management

You have 5 windows open. You can't tell what's running.

- Show running apps as buttons in the taskbar
- Click a taskbar button to focus/minimize that window
- Add a minimize button to each window's title bar (hides the window, still in taskbar)
- Add maximize (window fills the screen)

**You now have:** Window management.

## Step 7: Start menu / app launcher

- Add a start button that opens a menu listing all available apps
- Click an app in the menu to launch it
- Organize by category

## Step 8: Multi-user and login screen

- Add a login screen with username/password
- Different users have different home directories and desktops
- Store user data separately in the virtual FS

## Step 9: System settings

- Wallpaper picker
- Theme switching (light/dark)
- Display name and avatar

## Useful Resources

- [CSS z-index — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)
- [Drag and Drop — MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [localStorage — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Windows 93](https://www.windows93.net/) — a browser OS for inspiration
- [OS.js](https://www.os-js.org/) — open-source browser desktop framework

## Where to go from here

- Network app (fetch URLs, display web pages in an iframe "browser")
- Calculator, calendar, and image viewer apps
- Process manager (list running apps, force close)
- Keyboard shortcuts (Alt+Tab, Ctrl+Q)
- Sound system (notification sounds, media player app)
