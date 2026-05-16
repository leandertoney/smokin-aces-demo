# Smokin' Aces Motorcycle Apparel — Demo Site

High-converting ecommerce demo for Smokin' Aces, built with Next.js 15 and designed for seamless transition to live Shopify integration.

## 🏍️ Features

- **93 Real Products** across 13 categories from 10 trusted brands
- **Adaptive Variant Selector** — handles everything from single-option products to 24+ design variants
- **Smart Cart** with localStorage persistence and free shipping progress bar
- **Responsive Design** — mobile-first, tested at 375px, 390px, 414px
- **Shopify-Ready Architecture** — swap from static to live API with one env var
- **Performance Optimized** — Next.js 15 App Router, Image optimization, Static Generation

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📊 Data Architecture

### Static Demo Mode (Current)

Products are sourced from `lib/products.json`, generated from your Shopify export:

```bash
npx tsx scripts/build-catalog.ts
```

This transforms `data/shopify-products.json` into the optimized format used throughout the app.

### Components Never Import Data Directly

All product queries go through the **data adapter layer** (`lib/data-source.ts`), which selects the appropriate backend:

```typescript
// ✅ Good
import { getAllProducts } from "@/lib/products";
const products = await getAllProducts();

// ❌ Never do this
import productsJson from "@/lib/products.json";
```

## 🔄 Go-Live with Shopify Storefront API

When you're ready to connect to live Shopify, follow these steps:

### 1. Create Storefront API Access Token

1. Go to your Shopify admin → **Settings** → **Apps and sales channels**
2. Click **Develop apps** → **Create an app**
3. Name it "Storefront API"
4. Under **Configure**, enable **Storefront API** scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
5. **Install app** and copy the **Storefront Access Token**

### 2. Update Environment Variables

Edit `.env.local`:

```bash
# Change this line:
DATA_SOURCE=static

# To:
DATA_SOURCE=shopify

# Add your credentials:
SHOPIFY_STORE_DOMAIN=smokin-aces-motorcycle-apparell.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_token_here
```

### 3. Implement Storefront API Queries

The placeholder is at `lib/data-sources/shopify.ts`. Implement these GraphQL queries:

```typescript
// Example: getAllProducts()
const query = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          vendor
          productType
          availableForSale
          priceRange {
            minVariantPrice { amount }
            maxVariantPrice { amount }
          }
          variants(first: 50) {
            edges {
              node {
                id
                title
                price { amount }
                availableForSale
                selectedOptions { name value }
              }
            }
          }
          images(first: 10) {
            edges {
              node { url width height }
            }
          }
        }
      }
    }
  }
`;
```

Map Shopify's response to match the `Product` type in `lib/types.ts`.

### 4. Update Cart for Shopify Checkout

When using the Shopify backend, the cart should create a Shopify checkout:

```typescript
// In lib/cart-store.ts, add:
async checkout() {
  const cartLines = this.items.map(item => ({
    merchandiseId: `gid://shopify/ProductVariant/${item.variantId}`,
    quantity: item.qty
  }));

  const mutation = `
    mutation CreateCheckout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout { webUrl }
      }
    }
  `;

  const { data } = await shopifyFetch(mutation, {
    input: { lineItems: cartLines }
  });

  window.location.href = data.checkoutCreate.checkout.webUrl;
}
```

Update the checkout button to call this instead of routing to `/checkout`.

### 5. Deploy

```bash
npm run build
# Push to GitHub
# Netlify will auto-deploy
```

## 🎨 Brand Customization

### Colors

Edit `app/globals.css`:

```css
@theme inline {
  --color-bg: #0A0A0A;           /* Main background */
  --color-accent: #C8102E;       /* Primary CTA red */
  --color-accent-2: #B8956A;     /* Secondary accent */
  /* ... */
}
```

### Typography

Fonts are loaded in `app/layout.tsx` via Google Fonts. Current stack:
- **Display (Headings):** Anton
- **Body:** Inter

### Featured Products

Edit `FEATURED_HANDLES` in `scripts/build-catalog.ts` to control which products appear on the home page rails.

## 📁 Project Structure

```
app/
  page.tsx                      # Home page
  collections/[slug]/page.tsx   # Category pages
  products/[handle]/page.tsx    # Product detail
  shop/page.tsx                 # All products
  cart/page.tsx                 # Cart
  checkout/page.tsx             # Mock checkout
components/
  product/
    ProductCard.tsx             # Product tile
    Gallery.tsx                 # Adaptive image gallery
    VariantSelector.tsx         # Adaptive option selector
  cart/
    CartSheet.tsx               # Slide-out cart
    CartLineItem.tsx            # Cart item row
  home/
    Hero.tsx                    # Homepage hero
    CategoryGrid.tsx            # Category tiles
    FeaturedRail.tsx            # Horizontal scroll
lib/
  data-source.ts                # Data adapter factory
  data-sources/
    static.ts                   # Static JSON backend
    shopify.ts                  # Shopify API backend (TODO)
  products.ts                   # Query helpers
  cart-store.ts                 # Zustand cart state
  types.ts                      # TypeScript types
data/
  shopify-products.json         # Raw Shopify export
scripts/
  build-catalog.ts              # Data transformation script
```

## 🛠️ Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (Custom design tokens)
- **shadcn/ui** (Accessible UI primitives)
- **Zustand** (Cart state management)
- **Framer Motion** (Subtle animations)
- **lucide-react** (Icon library)

## ✅ Quality Checklist

- [x] 93 products with Shopify CDN images
- [x] All 13 categories render correctly
- [x] Adaptive variant selector handles 1-24+ options
- [x] Cart persists across page reloads
- [x] Free shipping progress bar updates
- [x] Mobile navigation functional at 375px
- [x] All buttons are square (radius ≤ 2px)
- [x] CTAs use blood red (`--color-accent`)
- [x] Build completes with no errors

## 📦 Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Connect repo to Netlify
3. Build settings are auto-detected (Next.js plugin)
4. Deploy

`netlify.toml` is already configured.

### Vercel

```bash
npx vercel
```

## 📞 Support

Built for Smokin' Aces Motorcycle Apparel.
For questions or modifications, contact the development team.

---

**Demo URL:** [To be deployed]
**Live Site:** [To be launched post-approval]
