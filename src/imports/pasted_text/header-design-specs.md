PART 1 · ANATOMY (header zone breakdown)

Show a single full-width Page Header bar (height 44px) with 
labeled zones. Use dashed cyan annotation lines above/below 
pointing to each zone with a small label chip.

The header contains these zones left to right:

LEFT ZONE:
- Page title: bold text "Network Map"  
- Breadcrumb below title in smaller gray mono text: 
  "All Networks  ›  DC-East"

CENTER ZONE:
- Filter chips in a row:
  [Region ▾]  [Device Type ▾]  [Status ▾]
  Each chip: dark surface, border, small dropdown arrow

RIGHT ZONE (right-aligned):
- View switcher: two icon toggle buttons [grid icon] [list icon]
- Divider line
- Secondary action button: "Export"
- Primary action button filled cyan: "+ Add Device"

Annotate each zone with a label:
LEFT → "Title + Breadcrumb (required)"
CENTER → "Contextual filters (optional)"  
RIGHT → "View controls + Actions (optional)"

Below the header bar, add a small rule note in gray:
"Actions are always right-aligned. Maximum 3 action buttons. 
Primary action is rightmost. Page-level actions never appear 
in the Global Header."

---

PART 2 · ELEMENT RULES

Show a 2-column layout with these rules listed as small 
specification cards. Each card has a cyan left border, 
dark surface background, a bold rule title, and a one-line 
description below.

Card 1: "Title — Always Required"
"Every page must have a title. No page header may be empty."

Card 2: "Breadcrumb — Conditional"
"Show only when the page has a parent level. Top-level pages 
omit the breadcrumb entirely."

Card 3: "Filters — Contextual"
"Include only filters relevant to the current view. 
Map view uses Region/Device Type/Status. 
Table views use Search + column filters."

Card 4: "Actions — Maximum 3"
"1 primary (filled), up to 2 secondary (outlined). 
Destructive actions require confirmation — never put 
a destructive action as the primary button."

Card 5: "View Switcher — Optional"
"Only include when the page supports multiple layout modes 
(e.g. grid vs list). Do not use for canvas-only views."

Card 6: "Count Badge — Optional"
"For inventory/table pages, show total record count as a 
muted badge next to the title. Example: 'Device Inventory  2,847'"

---

PART 3 · PAGE HEADER VARIANTS

Title: "Variants by Page Type"
Subtitle: "Each page type uses a different combination of 
header elements. The structure is consistent; the content adapts."

Show 5 header variants stacked vertically, each in a 
bordered dark frame (full width, 44px tall).
Label each variant on the left with its page type name 
in cyan monospace.

Variant 1 — Map View
Label: "Map / Canvas"
Content: 
  Left: Title "Network Map" + Breadcrumb "All Networks › DC-East"
  Center: Filter chips [Region ▾] [Device Type ▾] [Status: All ▾]
  Right: [Layers icon btn] [Export btn] [+ Add Device - primary]

Variant 2 — Inventory Table
Label: "Inventory / Table"
Content:
  Left: Title "Device Inventory" + badge "2,847 devices" 
        (muted gray badge inline with title)
  Center: Search input "Search by name, IP, type..." 
          + [Filter icon btn]
  Right: [Import btn] [Export CSV btn] [+ Add Device - primary]

Variant 3 — Dashboard
Label: "Dashboard"  
Content:
  Left: Title "Operations Dashboard"
  Center: Date range picker button "Last 24 hours ▾"
  Right: View switcher [grid][list] | [Edit Layout btn] 
         [+ Add Widget - primary]

Variant 4 — Detail Page
Label: "Detail Page"
Content:
  Left: Title "SW-Core-01" + Breadcrumb "Inventory › Switches › SW-Core-01"
        + Status badge inline: green dot + "Online"
  Center: (empty — no filters on detail pages)
  Right: [Run Diagnostic btn] [⋯ more actions] [Edit - primary]

Variant 5 — AI Troubleshoot
Label: "AI Troubleshoot"
Content:
  Left: Title "AI Assistant" 
        + Breadcrumb "Session: traceroute SW-Core-01 · 2:11 PM"
  Center: (empty)
  Right: [Clear Session btn] [Export Log btn]
  Note: No primary action — AI page is not a creation context