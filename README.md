# Calibrate Networks Operations Handbook

Pure static HTML — open `index.html` directly in any browser. No server, no build step, no Node.js.

## Quick start

1. Open `index.html` in Chrome, Firefox, Safari, or Edge.
2. Use the sidebar or press **Ctrl+K** (Cmd+K on Mac) to search.
3. Toggle dark mode from the top bar.

## Folder structure

```
html-version/
├── index.html              # Home page
├── pages/                  # Section pages (each file is self-contained)
├── assets/
│   ├── css/global.css
│   ├── js/                 # Theme, search, page filters
│   └── images/
│       └── diagrams/       # Diagram screenshots (.png)
└── README.md
```

## Editing content

Open the HTML file and edit the `<main class="content">` section.

| Page | File |
|------|------|
| Home | `index.html` |
| System Architecture | `pages/architecture.html` |
| Sales Order Flow | `pages/sales-order.html` |
| Purchase Order Flow | `pages/purchase-order.html` |
| Return / RMA Flow | `pages/returns.html` |
| Inventory Flow | `pages/inventory.html` |
| Integration Guide | `pages/integration.html` |
| Troubleshooting Matrix | `pages/troubleshooting.html` |
| Onboarding Guide | `pages/onboarding.html` |
| Critical Screens | `pages/critical-screens.html` |
| Glossary | `pages/glossary.html` |
| Documentation Structure | `pages/doc-structure.html` |

## Adding a new page

1. Copy an existing page in `pages/`.
2. Update `<title>`, `data-page` on `<body>`, and the `<main>` content.
3. Add a sidebar link on **every page** (search for `sidebar__nav` to find the block).
4. Set `class="nav-link active"` on the new page only.

## Diagrams

Use screenshot images in `assets/images/diagrams/`:

```html
<figure class="diagram">
  <img src="../assets/images/diagrams/my-diagram.png" alt="Description" />
  <figcaption>Caption here.</figcaption>
</figure>
```
