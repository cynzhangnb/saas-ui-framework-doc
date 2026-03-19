Create a UI framework documentation page for a NetOps SaaS platform 
called "Visibility Cloud". This is a dark-theme enterprise product 
for network engineers — think precision, density, and technical clarity.

---

DESIGN LANGUAGE
- Theme: Dark. Background #0f1117, Surface #1a1d27, Border #2a2d3a
- Primary accent: Cyan #38bdf8
- Success: #22c55e, Warning: #f59e0b, Error: #ef4444
- Typography: Geist Mono for labels/code, Inter for body text
- Border radius: 4px (components), 6px (cards)
- All text must be high contrast — minimum WCAG AA

---

PAGE LAYOUT
The page is a single scrollable documentation canvas at 1440px wide.
Use a sticky left sidebar (240px) for section navigation with anchors.
Main content area is 1160px, with 40px padding on each side.

Top of page: 
- Small eyebrow label: "UI Framework v1.0 · Visibility Cloud"
- Large heading: "Design System Overview"
- Subtitle: "Application shell, navigation model, pane behavior, 
  and page patterns for the NetOps platform."

---

SECTION 1 · APPLICATION SHELL

Show a full annotated wireframe of the shell at 1280px viewport.
Use real pixel dimensions as labels.

Shell structure (render as a dark annotated frame):
┌─────────────────────────────────────────────────┐
│ Global Header                          [48px h]  │
├──────────┬──────────────────────┬───────────────┤
│ Nav Pane │   Workspace Pane     │ Context Pane   │
│ [52px]   │   [flex, min 480px]  │ [320px]        │
│          │                      │                │
│          │                      │                │
├──────────┴──────────────────────┴───────────────┤
│ Bottom Pane (collapsed by default)     [220px h] │
└─────────────────────────────────────────────────┘

Annotate each pane with its name, default size, and one-line purpose.
Use dashed cyan borders for the pane boundaries.
Add small badge labels on each pane: "Collapsible", "Resizable", 
"Pinnable", "Persistent" where applicable.

Below the wireframe, show a spec table with 4 columns:
Pane | Default Size | Min/Max | Collapse Behavior

---

SECTION 2 · NAVIGATION MODEL

2a. Navigation Pane States
Show the Nav Pane in TWO states side by side:

State 1 — Expanded (220px):
- Logo area at top (placeholder logo + "Visibility Cloud" wordmark)
- Nav items with icon + label:
  · Map View (network icon) — ACTIVE state
  · Inventory (list icon)
  · Dashboard (grid icon)  
  · Reports (document icon)
  · AI Assist (sparkle icon)
  · [divider]
  · Settings (gear icon)
- Collapse toggle arrow at bottom

State 2 — Collapsed (52px):
- Same items, icons only, no labels
- Tooltip appears on hover (show one tooltip example)
- Active item has cyan left border + subtle cyan bg tint

2b. Nav Item State Matrix
Show a horizontal row of the same nav item in 5 states:
Default | Hover | Active | Disabled | Badge (with notification count)

Label each state below the component. Use real visual styling, 
not placeholder boxes.

---

SECTION 3 · PANE & HEADER BEHAVIOR

3a. Global Header Anatomy
Show the header bar (full width, 48px) with labeled zones:

Left zone: [Logo 32px] [Product Switcher dropdown] [Environment badge "PROD"]
Center zone: [Search bar "Search devices, alerts, IPs..." with Cmd+K badge]
Right zone: [Notifications bell with badge "3"] [Help ?] [User avatar + name]

Below: annotate each element with its component name.

3b. Page Header Variants
Show 3 variants of the Page Header (the per-page header below Global):

Variant A — Map View header:
Title "Network Map" | Breadcrumb "All Networks > DC-East" 
| Filter chips: [Region ▾] [Device Type ▾] [Status ▾]
| Actions: [Export] [Share] [+ Add Device]

Variant B — Inventory header:
Title "Device Inventory" | Count badge "2,847 devices"
| Search input | Filter | Actions: [Import] [Export CSV]

Variant C — Dashboard header:
Title "Operations Dashboard" | Date range picker "Last 24h ▾"
| View switcher [Grid / List icons] | Actions: [Add Widget] [Edit Layout]

3c. Context Pane Behavior
Show the Context Pane in 4 states arranged horizontally:

State 1 — Collapsed: just a thin 4px cyan sliver on the right edge
State 2 — Default open (320px): showing Device Detail content
  - Device name header + status badge
  - 4 metric rows (CPU / Memory / Bandwidth / Uptime)
  - Tabs: [Details] [Interfaces] [AI Insights]
  - Currently on Details tab
State 3 — Pinned: same as open but with 📌 icon highlighted in header
State 4 — Resized wider (480px): same content, wider layout

Label each state with its trigger condition below.

3d. Bottom Pane
Show Bottom Pane in 3 states:

Hidden: just a 32px handle bar at the bottom with label "Logs / Output"
Peek (120px): showing last 3 log lines + expand handle  
Expanded (220px): full CLI-style output with monospace text, 
  tabs [Logs] [CLI Output] [Execution Results] [Activity]

---

SECTION 4 · PAGE PATTERNS

Show 5 page layout templates as small-scale wireframes (thumbnails, 
~320px wide each), arranged in a 3+2 grid. 

Each thumbnail should show the full shell with the Workspace filled in.
Use subtle internal grids to show content blocks.

Pattern A — Map / Canvas
Workspace = full canvas with network topology nodes and edges
Context Pane = open with device detail
Bottom Pane = hidden

Pattern B — Inventory Table  
Left of Workspace = 200px Tree Navigation (site hierarchy)
Right of Workspace = Data Grid with rows and column headers
Context Pane = collapsed

Pattern C — Dashboard
Workspace = 2-column card grid
Row 1: 4 KPI metric cards (full width)
Row 2: Large chart (2/3) + Donut chart (1/3)
Row 3: Alert list (1/2) + Top devices table (1/2)
No Context Pane, no Bottom Pane

Pattern D — AI Troubleshoot
Workspace split into 3 columns:
Left 200px: conversation history list
Center flex: chat messages + input bar at bottom
Right 280px: context panel (current device + AI reasoning steps)
Bottom Pane = open showing execution results

Pattern E — Detail Page
Workspace = standard detail layout
Top: Hero section with device name, status, key metrics inline
Below: Tabbed content area [Overview] [Interfaces] [Config] [History]
Context Pane = pinned open
Bottom Pane = hidden

Under each thumbnail: 
- Pattern name (bold)
- One-line description
- Small tag row showing which panes are active

---

VISUAL STYLE REQUIREMENTS

- Dark background throughout (#0f1117)
- Section headers: large, 32px, semi-bold, white
- Section numbers: cyan (#38bdf8), monospace
- Annotation lines: dashed, #2a2d3a color, with small label chips
- Spec tables: dark surface (#1a1d27), subtle row striping
- All component mockups must look like real dark-theme UI, 
  not generic wireframe boxes
- Spacing between sections: 80px
- Each section has a subtle top border (1px, #2a2d3a) and section number

Use Figma's Auto Layout for all components.
All frames should use "Clip content" off so annotations can overflow.
Group each section as a named frame: 
"01 · Application Shell", "02 · Navigation Model", etc.

---

FINAL OUTPUT
The complete page should read top to bottom as a coherent design 
documentation artifact — part technical spec, part design showcase.
Total estimated canvas height: ~4000-5000px