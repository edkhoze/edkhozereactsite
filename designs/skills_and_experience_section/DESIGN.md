# Design System Documentation: The Compiled Architect

## 1. Overview & Creative North Star
**Creative North Star: The Compiled Architect**
This design system rejects the "friendly" softness of modern SaaS in favor of a high-end, editorial interpretation of an Integrated Development Environment (IDE). It is a visual celebration of logic, precision, and structural integrity. 

Rather than standard templates, this system utilizes **Intentional Asymmetry** and **Data-Dense Layouts**. We treat the screen as a canvas of compiled code—where whitespace is a functional "buffer" and typography is the primary architecture. We move away from generic "blocks" to a layered, sophisticated experience where information is tiered through tonal shifts and technical flourishes like terminal prefixes and dot-matrix textures.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep obsidian tones, punctuated by high-chroma syntax highlighting colors.

### Surface Hierarchy & Nesting
We do not use shadows to define depth; we use **Tonal Layering**. The UI is imagined as stacked sheets of dark glass.
- **Surface (`#10141a`):** The base "machine" layer.
- **Surface-Container-Low (`#181c22`):** Used for large structural sections or sidebars.
- **Surface-Container-Highest (`#31353c`):** Reserved for high-interaction elements or "active" terminal windows.

### The "No-Line" Rule
**Standard 1px solid borders are strictly prohibited for sectioning.** 
To separate content, you must use background color shifts (e.g., a `surface-container-low` section sitting directly on a `surface` background). This creates a seamless, high-end feel that mimics premium hardware interfaces.

### The "Glass & Gradient" Rule
To prevent the UI from feeling "flat" or "cheap," use **Glassmorphism** for floating overlays (e.g., Command Palettes or Nav bars). 
- Use a semi-transparent `surface-container-high` with a `backdrop-blur` of 12px–20px. 
- Apply a subtle linear gradient to main CTAs transitioning from `primary` (#d2bbff) to `primary_container` (#7c3aed) at a 135-degree angle to provide a "glowing" syntax feel.

---

## 3. Typography
The typography is a dialogue between human-readable editorial and machine-executable code.

- **Display & Headlines (Space Grotesk):** High-contrast, bold, and authoritative. Use `display-lg` for hero statements. These should feel "architectural"—spaced tight and set in high-contrast `on_surface`.
- **Code & Navigation (JetBrains Mono):** All functional UI, labels, and sub-headers must use JetBrains Mono. This reinforces the "Senior Architect" persona.
- **Micro-Copy:** Use `//` style prefixes (e.g., `// Section 01`) in `secondary` (#4ae176) to mimic code comments for auxiliary descriptions.
- **Terminal Prefixes:** Use `label-md` with a `tertiary` (#4cd7f6) color for "prompt" styles: `user@khoze:~$`.

---

## 4. Elevation & Depth
In this system, elevation is an optical illusion created through layering and "Ghost" effects.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" look. This "inset" feel suggests a stable, precision-milled interface.
- **Ambient Shadows:** Only used for floating modals. Use a 24px-40px blur at 6% opacity, tinted with `primary` (#7c3aed) to create a subtle neon atmospheric glow rather than a muddy grey shadow.
- **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use the `outline_variant` at **15% opacity**. The border must be sharp (0px radius).
- **Dot Matrix Textures:** Use a repeatable 2px dot pattern in `surface_variant` at 10% opacity as a background fill for `surface_container_low` sections to add "technical soul."

---

## 5. Components

### Buttons
- **Primary:** Sharp corners (`0px`). Background is a `primary` to `primary-container` gradient. Text is `on_primary`. 
- **Tertiary (The "Terminal" Button):** Ghost style with a `>_` prefix in the label. On hover, the background shifts to `surface_container_high`.
- **States:** Hover states should trigger a "syntax highlight" effect—changing the text color to `secondary` (#4ae176).

### Input Fields
- **Styling:** No background. Only a bottom border using `outline_variant`. 
- **Focus:** The bottom border changes to `tertiary` (#06B6D4) and a blinking cursor `_` appears.
- **Label:** Use `label-sm` JetBrains Mono, always visible, never floating.

### Cards & Data Lists
- **Rule:** Forbid divider lines. 
- **Execution:** Use vertical white space (Token `8` or `12`) to separate items. For lists, use alternating background shifts between `surface` and `surface-container-low`.
- **Stats:** Large numbers should be `headline-lg` in JetBrains Mono to emphasize the "monospaced data" aesthetic.

### Additional Elements: "The Terminal Breadcrumb"
Instead of standard breadcrumbs, use a single-line terminal string at the top of pages:
`root / projects / edward-khoze / [current_page]`

---

## 6. Do's and Don'ts

### Do:
- **Do** use `0px` border-radius for everything. If a corner must be rounded, the maximum allowed is `2px`.
- **Do** lean into intentional asymmetry. Align a heading to the far left and the body text to a column on the far right.
- **Do** use `secondary` (#4ae176) for "success" or "system online" states, mimicking a healthy terminal status.

### Don't:
- **Don't** use 100% opaque, high-contrast borders. It breaks the "IDE glass" illusion.
- **Don't** use "soft" icons. Icons must be thin-stroke, geometric, and sharp-angled.
- **Don't** use standard sans-serif fonts for data or numbers. If it’s a value, it must be monospaced.
- **Don't** use center-alignment for large blocks of text. Stick to "Left-aligned" (The "Code Editor" alignment).