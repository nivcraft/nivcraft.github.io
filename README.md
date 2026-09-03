# nivcraft.github.io

Marketing landing page for the **NivCraft** app, served at <https://nivcraft.github.io/>.

Plain static HTML — no build step. `.nojekyll` disables Jekyll processing.

## Files

| Path | Purpose |
|------|---------|
| `index.html` | The entire landing page (inline CSS, no external requests) |
| `assets/icon-512.png` | Logo / favicon (Play Store icon) |
| `assets/og-image.png` | Open Graph / social preview image (Play feature graphic) |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

Legal documents live in the separate [`nivcraft/legal`](https://github.com/nivcraft/legal)
repo and render at <https://nivcraft.github.io/legal/>. This page links to them; it does not
duplicate them.

## Enabling GitHub Pages

Repo **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save.
Live within a minute or two at <https://nivcraft.github.io/>.

## Custom domain (optional, later)

Add a `CNAME` file containing the bare domain (e.g. `nivcraft.app`), set the DNS records
GitHub shows on the Pages settings screen, then enable *Enforce HTTPS*.
