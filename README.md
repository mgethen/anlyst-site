# anlyst.co

Static site for Anlyst Global Intelligence. One page, no build step.

- `index.html` – the site. Fonts from Google Fonts; everything else inline.
- `img/` – hero art, photos, logos. `favicon*.png`, `apple-touch-icon.png`.
- `whitepaper/Anlyst-Frontier-Cloud-AI-vs-Local-LLMs.pdf` – the whitepaper (name set as `WHITEPAPER_PDF` in `index.html`).
- `CNAME` – the custom domain for GitHub Pages.

## Forms
Two delivery routes, switched by one constant at the bottom of `index.html`:
- `FORMSPREE_ID` set: every submission is emailed to the address registered with the Formspree form (sign up at formspree.io with m@anlyst.co, create one form, paste its ID). The subject line says whether it was an enquiry or a whitepaper download, and reply-to is set to the sender.
- `FORMSPREE_ID` empty (as shipped): submissions post to HubSpot's Forms API (portal 6334981, the "Contact Us" form) and land in the CRM.
After a successful whitepaper registration the PDF opens from `whitepaper/`.

## Deploy (GitHub Pages)
1. Push this folder to the repository's default branch.
2. Settings → Pages → Source: Deploy from a branch, branch `main`, folder `/ (root)`. Custom domain: `www.anlyst.co`, Enforce HTTPS on.
3. GoDaddy DNS for anlyst.co:
   - `CNAME  www  →  <github-username>.github.io`
   - `A  @  →  185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (apex redirect to www is handled by GitHub once both are set)
   - remove the Squarespace A/CNAME records first.
