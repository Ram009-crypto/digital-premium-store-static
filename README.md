# Digital Premium Store — Static Website

A clean, fully static version of the Digital Premium Store ready for **VS Code editing** and **GitHub Pages publishing**. No backend, no build step, no dependencies.

## File Structure

```
static-site/
├── index.html              ← Homepage (hero, pricing, products, why us, FAQ, footer)
├── admin.html              ← Password-protected admin dashboard
├── privacy-policy.html
├── terms-of-service.html
├── style.css               ← All styles (colors, layout, animations)
├── script.js               ← Products, plans, FAQs, checkout & admin logic
├── images/                 ← Drop your product PNG/JPG images here
└── assets/                 ← Optional folder for extra files (logos, favicons)
```

## Quick Edits

Open `script.js` and look for the comment blocks:

- `/* Add More Products Here */` — add, remove, or change product cards.
- `/* Pricing Plans */` — edit the three pricing plans.
- `/* Why Buy From Us */` — change benefit cards.
- `/* FAQs */` — edit Q&A.
- `SITE_CONFIG` — change WhatsApp number, Telegram URL, UPI ID, **admin password**.

Open `style.css` and look for `/* Change Colors Here */` to edit the brand colors.

## Adding Product Images

1. Save your image into the `images/` folder, e.g. `images/capcut-pro.png`.
2. In `script.js`, set `image: "images/capcut-pro.png"` on that product.

If an image is missing, the card auto-falls back to a stylish letter placeholder.

## Admin Page

- Visit `/admin.html` and log in with the password set in `SITE_CONFIG.adminPassword` (default: `@RAMKRISHNA090@#`).
- Orders submitted on the site are saved in **localStorage** of the visitor's browser. Admin sees orders saved on the same browser/device.
- Use the **Export CSV** button to download all orders.
- For real multi-device order syncing, you'll need a backend (e.g. Google Sheets, Firebase). The static site sends a WhatsApp confirmation link after each order so customers can notify you instantly.

## Publish to GitHub Pages

1. Create a new GitHub repository.
2. Upload the entire `static-site/` folder contents (or rename it to your project) to the root of the repo.
3. Go to **Settings → Pages → Source: Deploy from branch → main / root**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Local Preview

Just double-click `index.html` to open in your browser. No server needed.
