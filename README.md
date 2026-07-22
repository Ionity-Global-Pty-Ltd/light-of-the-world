# Light of the World

A polished, static storefront for hand-poured botanical Christian candles and essential oils from Centurion, Gauteng, South Africa. It is designed for GitHub Pages and requires no build step or server.

## What is included

- An animated digital candle landing experience with Lavender, Jasmine, and Herbal ambience controls
- A lavender-led botanical collection with jasmine, rosemary, eucalyptus, sage, geranium, lemongrass, and diffuser oils
- Market-positioned South African rand prices from `R149` to `R699`
- Responsive product collection with candle, gift-set, and diffuser-oil filters
- Private, on-device blend concierge that recommends a product, blessing, and direct add-to-bag action without collecting visitor answers
- Persistent browser-side shopping bag and delivery-order checkout that composes an email to `ai@ionity.today`
- A deterministic daily Verse of the Day rotation
- Search-ready metadata, Open Graph previews, Schema.org data, `robots.txt`, and `sitemap.xml`
- GitHub Actions workflow for GitHub Pages deployment

## Publishing

The deployment workflow in `.github/workflows/deploy-pages.yml` deploys every push to `main` once GitHub Pages is set to **GitHub Actions** in the repository settings.

## Delivery and payments

This is intentionally an email-first ordering flow. It produces a complete delivery enquiry in South African rand without storing customer information on a third-party service. Centurion collection and South African delivery are confirmed personally by email. A payment processor such as PayFast, Ozow, or Stripe can be connected later once the appropriate account credentials and delivery rules are supplied.

## Blend concierge

The current concierge is transparent by design: it is a deterministic, browser-only botanical recommendation engine, not a remote language model. It provides useful instant guidance without sending customer answers or requiring an API key. It can be upgraded to a real AI assistant once a model provider, product-safety policy, and customer-data handling approach are approved.

Created by Ionity Global Pty Ltd.