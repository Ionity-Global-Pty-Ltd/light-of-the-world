# Light of the World

A polished, static storefront for hand-poured Christian scented candles. It is designed for GitHub Pages and requires no build step or server.

## What is included

- Responsive product collection with filter controls
- Persistent browser-side shopping bag
- Delivery-order checkout that composes an email to `ai@ionity.today`
- A deterministic daily Verse of the Day rotation
- Search-ready metadata, Open Graph previews, Schema.org data, `robots.txt`, and `sitemap.xml`
- GitHub Actions workflow for GitHub Pages deployment

## Publishing

The deployment workflow in `.github/workflows/deploy-pages.yml` deploys every push to `main` once GitHub Pages is set to **GitHub Actions** in the repository settings.

## Delivery and payments

This is intentionally an email-first ordering flow. It produces a complete delivery enquiry without storing customer information on a third-party service. A payment processor such as Stripe can be connected later once the appropriate account credentials and delivery rules are supplied.

Created by Ionity Global Pty Ltd.