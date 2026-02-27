# Operating System from Scratch


| | |
|---|---|
| Difficulty | Advanced |
| Team Size | 2-3 people |
| Time | ~50-60 hours |
| Demo-ready by | Step 5 |
| Prerequisites | C, x86 assembly, computer architecture fundamentals |
| Built by | Linux, FreeBSD, MINIX, SerenityOS |

**Skills you'll earn:** Bootloader development, kernel mode programming, memory management, interrupt handling, filesystem implementation

Start with a bootloader. End with a minimal OS that runs programs.

## Step 1: Boot and print to screen (~3-4 hours)

The CPU starts in real mode. You need to get a message on screen with nothing but raw assembly.

- Write a bootloader in [NASM](https://nasm.us/) assembly (x86)
- Fit it in 512 bytes (the boot sector)
- Use BIOS interrupt `int 0x10` to print "Hello, OS" to the screen
- End with the boot signature `0x55AA` at byte 510
- Test with [QEMU](https://www.qemu.org/documentation/): `qemu-system-x86_64 -fda boot.bin`

**You now have:** A bootable program.

## Step 2: Enter protected mode (~4-5 hours)

Real mode is 16-bit with 1MB of addressable memory. You need 32-bit protected mode.

- Set up a [Global Descriptor Table (GDT)](https://wiki.osdev.org/GDT) with code and data segments
- Disable interrupts, load the GDT, set the PE bit in CR0
- Far jump to a 32-bit code segment
- Print to the screen by writing to VGA text buffer at `0xB8000` (no more BIOS interrupts)

**You now have:** 32-bit protected mode with direct hardware access.

## Step 3: Load a kernel (~5-6 hours)

Your bootloader is 512 bytes. That's not enough for an OS. Load more code from disk.

- Use BIOS disk services (`int 0x13`) to read sectors from disk into memory
- Write your kernel in C, compile it as a flat binary
- The bootloader loads the kernel into a known memory address and jumps to it
- Your C `kernel_main()` function now runs

**You now have:** A kernel loaded from disk.

## Step 4: Interrupts and keyboard input (~5-6 hours)

The OS can't respond to hardware events. You need interrupts.

- Set up an [Interrupt Descriptor Table (IDT)](https://wiki.osdev.org/IDT)
- Program the [PIC](https://wiki.osdev.org/PIC) (Programmable Interrupt Controller) to map hardware interrupts
- Write an interrupt handler for the keyboard (IRQ 1)
- Read scancodes from port `0x60`, translate to characters, print to screen

**You now have:** Keyboard input.

## Step 5: Memory management (~5-6 hours)

You're writing to hardcoded addresses. You need to track what memory is free.

- Parse the memory map (from BIOS `int 0x15, eax=0xE820` or GRUB multiboot info)
- Implement a physical page allocator (bitmap or free list, 4KB pages)
- Set up [paging](https://wiki.osdev.org/Paging): map virtual addresses to physical addresses
- Identity-map the kernel, map user space separately

**You now have:** Virtual memory.

## Step 6: A simple shell (~5-6 hours)

You can type characters but there's no command processor.

- Implement a text buffer that accumulates keystrokes
- On Enter, parse the line as a command
- Start with built-in commands: `help`, `clear`, `echo`
- Add a prompt string

**You now have:** A command-line shell.

## Step 7: Processes (~5-6 hours)

- Implement a process structure: register state, stack, page directory
- Create a simple round-robin scheduler with timer interrupts
- Context switch between two processes
- Each process runs in its own address space

## Step 8: File system (~5-6 hours)

- Implement a simple file system (FAT12 or a custom one) on a RAM disk
- Support `read`, `write`, `create`, and `list` operations
- Load the file system image as part of the boot disk

## Step 9: System calls (~4-5 hours)

- Implement a syscall interface (interrupt `0x80` or `syscall` instruction)
- Add syscalls: `write`, `read`, `exit`, `fork`
- User programs call these to interact with the kernel

## Useful Resources

- [OSDev Wiki](https://wiki.osdev.org/Main_Page) — the definitive resource
- [Writing a Simple Operating System — from Scratch](https://www.cs.bham.ac.uk/~exr/lectures/opsys/10_11/lectures/os-dev.pdf) (Nick Blundell, PDF)
- [NASM documentation](https://nasm.us/doc/)
- [QEMU documentation](https://www.qemu.org/documentation/)
- [xv6 — MIT teaching OS](https://pdos.csail.mit.edu/6.828/2023/xv6.html) — reference implementation

## Where to go from here

- Network stack (Ethernet driver, TCP/IP)
- Graphics mode (VESA framebuffer, basic GUI)
- ELF binary loader (run compiled programs)
- Multi-core support (SMP)
- Port to RISC-V or ARM
