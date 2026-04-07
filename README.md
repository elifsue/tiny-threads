# TinyThreads Prototypes

Interactive multi-fidelity prototype for **TinyThreads**, a peer-to-peer marketplace for buying and selling pre-loved children's clothing in the UK. Built with React 19, Tailwind CSS 4, and shadcn/ui. Every screen supports three rendering modes — **Lo-Fi** (black-and-white wireframe), **Mid-Fi** (grayscale with labels), and **Hi-Fi** (full colour with real photography) — toggled from the top toolbar or via keyboard shortcut.

---

## Getting Started

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`. Hi-Fi mode is the default.

---

## Three-Mode Fidelity System

Every screen renders in three distinct modes, each designed for a different stage of the design review process.

| Mode | Visual Style | Images | Text |
|------|-------------|--------|------|
| **Lo-Fi** | Black-and-white, no rounded corners | Diagonal-line crossbox placeholders (no labels) | TextBar / TextLines placeholders; key titles shown as real text |
| **Mid-Fi** | Grayscale with borders and labels | Gray boxes with descriptive labels (e.g. "Main Product Photo") | Full real text content with gray typography |
| **Hi-Fi** | Full colour with warm terracotta palette | Real product photography (20 CDN-hosted images, 4:5 ratio), real profile photos, category photos, brand logos | Full real text with styled typography |

The mode toggle sits in the centre of the top toolbar. Each mode has its own icon for quick visual identification. Press **T** to cycle through modes.

---

## Design System (Hi-Fi Mode)

The Hi-Fi colour palette uses a warm, earthy tone system defined in `WireframePrimitives.tsx`:

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#B8654A` (Warm terracotta) | Primary buttons, active states, accents |
| `secondary` | `#FDF6F0` (Warm cream) | Secondary backgrounds, hover states |
| `accent` | `#D4A853` (Golden amber) | Highlight accents |
| `bg` | `#FFFCF9` | Page background |
| `text` | `#3D2E27` | Primary text |
| `textMuted` | `#6B5549` | Secondary text |
| `border` | `#E6D5C7` | Card and section borders |

---

## Screens (41 Total)

| # | Screen | Route | File | Description |
|---|--------|-------|------|-------------|
| 1 | Home Page | `/` | `Home.tsx` | Hero section with boy (left) and girl (right) kid photos in Hi-Fi, diagonal-line placeholders in Lo-Fi, centred text and CTA buttons. Shop by Category (5 categories with CDN-hosted photos), Shop by Age/Size, Sellers You Follow carousel, Just Listed carousel, Popular Brands row (6 normalised logos on 300x80px canvases), How It Works steps, and Buyer Protection trust section. |
| 2 | Sign Up | `/signup` | `SignUp.tsx` | Registration form with full name, email, and password fields, plus social sign-up options for Google, Facebook, and Apple. |
| 3 | Log In | `/login` | `Login.tsx` | Authentication screen with email/password fields, social login options (Google, Facebook, Apple), and a Forgot Password link. |
| 4 | Forgot Password | `/forgot-password` | `ForgotPassword.tsx` | Password recovery entry point where the user enters their email to receive a verification code. |
| 5 | Verify Code | `/verify-code` | `VerifyCode.tsx` | Code verification step where the user enters a 6-digit code sent to their email. |
| 6 | Reset Password | `/reset-password` | `ResetPassword.tsx` | Final password recovery step where the user sets and confirms a new password. |
| 7 | Products Listing | `/products` | `Products.tsx` | Browsable catalogue with a left sidebar containing filters (Category, Age/Size, Condition, Brand) and a 5-column, 4-row product grid with pagination (3,248 items, 163 pages). Uses WireSelect sorting dropdown with ml-2 left padding beside the arrow. |
| 8 | Product Detail (Buyer) | `/product-detail-buyer` | `ProductDetailBuyer.tsx` | Detailed view of a single listing with an 8-thumbnail vertical carousel and large main photo. In Hi-Fi mode, the first carousel thumbnail always matches the main product photo. Includes item info, seller details, Buy Now / Make an Offer / Message Seller buttons, Make an Offer modal, Seller's Items section with Create Bundle button, and Similar Items section. |
| 9 | Product Detail (Seller) | `/product-detail-seller` | `ProductDetailSeller.tsx` | Seller's own view of a listing with Mark as Sold, Edit Listing, and Delete Listing buttons. Same carousel sync behaviour as page 8 (first thumbnail matches main photo in Hi-Fi). No favourite button, no bundle section, no Follow button on seller card. Uses a different product image offset from page 8. |
| 10 | Seller Profile | `/seller-profile` | `SellerProfile.tsx` | Public seller profile with avatar, username, rating, bio, stats, filter chips, a 6-column product grid with pagination (82 listings, 5 pages), and a Create Bundle button. |
| 11 | Seller Reviews | `/seller-reviews` | `SellerReviews.tsx` | Seller reviews page with overall rating breakdown, star distribution bar chart, and individual buyer review cards. |
| 12 | My Profile | `/profile` | `Profile.tsx` | User's profile dashboard (jane_smith_shop) with avatar, bio, 4.6 rating, stats row, tabs (My Listings, Reviews, Followers, Followings), filter chips with Active/Sold status filters, product grid with edit buttons on active listings only, and "Sold" badges on last 3 products. |
| 13 | Followers | `/followers` | `Followers.tsx` | Lists all users following the current user. Shares the same profile header, stats, and tabs as My Profile with the Followers tab active. Displays 16 followers in a 5-column grid with Remove buttons. All 16 profile photos are unique (no repeats, excluding p1). |
| 14 | Followings | `/followings` | `Followings.tsx` | Lists all users the current user follows. Shares the same profile header, stats, and tabs as My Profile with the Followings tab active. Displays 12 followed sellers in a 5-column grid with unique profile photos. |
| 15 | Edit Profile | `/edit-profile` | `EditProfile.tsx` | Profile editing form with fields for display name, username, email, bio, and photo upload. Includes address section, Enable Bundle Discount section with toggle and discount % dropdowns, Linked Social Accounts, Change Password entry point, and Notification Preferences. |
| 16 | Change Password | `/change-password` | `ChangePassword.tsx` | Password update screen requiring current password, new password, and confirmation. |
| 17 | Wallet | `/wallet` | `Wallet.tsx` | Digital wallet dashboard with current balance, pending earnings, total earned, saved withdrawal methods, and transaction history with filter tabs. |
| 18 | Add Withdrawal Method | `/add-withdrawal-method` | `AddWithdrawalMethod.tsx` | Form for adding a bank account or PayPal as a withdrawal destination. |
| 19 | Checkout | `/checkout` | `Checkout.tsx` | Two-column checkout with Shipping Address, Shipping Method, and Payment Method on the left, and Order Summary with price breakdown and Pay button on the right. |
| 20 | Shipping Selection | `/shipping-selection` | `ShippingSelection.tsx` | Expanded view of shipping options (Royal Mail, Evri, InPost, Local Collection) with delivery estimates, pricing, and tracking availability. |
| 21 | Order Confirmation | `/order-confirmation` | `OrderConfirmation.tsx` | Post-purchase confirmation with success message, order number, item summary, shipping details, estimated delivery, and payment summary. |
| 22 | My Purchases | `/my-purchases` | `MyPurchases.tsx` | Buyer order management with Purchases/Sales tabs, search bar, status filter pills, and order cards with action buttons. Shows 6 orders including one with an active dispute. |
| 23 | My Sales | `/my-sales` | `MySales.tsx` | Seller order management with Purchases/Sales tabs, search bar, status filter pills, and order cards with contextual action buttons. Shows 5 orders. |
| 24 | Track Order | `/track-order` | `TrackOrder.tsx` | Order tracking with visual timeline, estimated delivery, shipping details, seller info, and a back button to My Purchases. |
| 25 | Dispute Request | `/dispute` | `DisputeRequest.tsx` | Dispute submission form with reason selector, description text area, photo upload, and order reference details. |
| 26 | Dispute Status | `/dispute-status` | `DisputeStatus.tsx` | Dispute progress tracker with status timeline, communication thread, seller info, and order details sidebar. |
| 27 | Sell an Item | `/sell-item` | `SellItem.tsx` | Multi-step listing form with 4-step stepper (Photos, Details, Pricing, Shipping). Details step includes combined Age/Size selector. |
| 28 | Edit Item | `/edit-item` | `EditItem.tsx` | Edit listing form, identical layout to Sell an Item but with "Edit Item" title and Save Changes / Delete Listing buttons. |
| 29 | Create Bundle | `/create-bundle` | `CreateBundle.tsx` | Bundle creation screen with a 5-column, 4-row product grid (20 items). First 3 items show tick marks indicating selection. Right sidebar shows seller info, Bundle Summary with pricing breakdown and 15% bundle discount. |
| 30 | Leave a Review | `/leave-review` | `LeaveReview.tsx` | Post-transaction review form with star rating selector, text area for feedback, and order/item context. |
| 31 | Saved Items | `/saved-items` | `SavedItems.tsx` | Favourited items grid with heart icons, "Price dropped" and "Sold" badges, filter chips, and a Sellers You Follow section showing 8 followed sellers. Profile photos are correctly assigned (swapped emma/claire and sarah/lisa, replaced rachel/anna, male photos for tom/mark). |
| 32 | Messages | `/messages` | `Messages.tsx` | Messaging hub with conversation sidebar listing 6 chats. sarah_mum_of_3 is the active conversation. First 3 conversations are clickable. |
| 33 | Offer Sent | `/offer-sent` | `OfferSent.tsx` | Chat view with emma_preloved showing an offer sent by the user. Rich offer message bubble with item card, price comparison, "Pending" status badge, and Cancel Offer button. |
| 34 | Offer Received | `/offer-received` | `OfferReceived.tsx` | Chat view with chloe_vintage showing an offer received. Rich offer message bubble with item card, Decline and Accept buttons, and full-width "Offer Your Price" button. |
| 35 | Notifications | `/notifications` | `Notifications.tsx` | Notification centre with filter chips (All, Sales, Messages, Listings, Shipping, Reviews, Disputes). 10 notifications in chronological order with 3 unread. |
| 36 | About Us | `/about` | `About.tsx` | Company information page covering TinyThreads' mission, values, team, and commitment to sustainability. |
| 37 | How It Works | `/how-it-works` | `HowItWorks.tsx` | Step-by-step guide for buyers and sellers covering listing, browsing, purchasing, shipping, and buyer protection. |
| 38 | Buyer Protection | `/buyer-protection` | `BuyerProtection.tsx` | Detailed explanation of the buyer protection programme, coverage, claims process, refund policies, and dispute resolution. |
| 39 | Help Centre | `/help-centre` | `HelpCentre.tsx` | Support hub with categorised FAQ sections and search functionality. |
| 40 | Terms & Conditions | `/terms` | `TermsAndConditions.tsx` | Legal terms of service covering user responsibilities, prohibited items, transaction policies, and platform rules. |
| 41 | Privacy Policy | `/privacy` | `PrivacyPolicy.tsx` | Data privacy document detailing personal data collection, usage, third-party sharing, cookies, and user rights. |

---

## Navigation Shell

The prototype is wrapped in a **WireframeShell** component that provides the sidebar, top toolbar, and full-screen mode.

**Sidebar** (left panel, 270px wide): Lists all 41 screens with numbered indices. The active screen is highlighted in indigo and auto-scrolled into view. The header displays the TinyThreads logo with "PROTOTYPES" beneath it. The footer shows the current mode (e.g. "Hi-fi prototypes · Desktop"). The sidebar can be collapsed via the close button.

**Top Toolbar** (horizontal bar above the content area): Displays the current screen name on the left, the three-mode fidelity toggle in the centre (each with a unique icon: Pencil for Lo-Fi, Eye for Mid-Fi, Sparkles for Hi-Fi), and on the right: Full Screen button, help (?) button, screen counter (e.g. "8 / 41"), and Prev/Next navigation arrows.

**Full-Screen Mode**: Hides the sidebar and toolbar entirely, displaying the prototype as a standalone page. A toast notification appears briefly indicating how to exit. Exit via Escape or F key.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous screen |
| `→` | Next screen |
| `T` | Cycle Lo-Fi → Mid-Fi → Hi-Fi mode |
| `F` | Toggle full-screen mode |
| `Esc` | Exit full-screen or close overlay |
| `?` | Show / hide keyboard shortcuts help |

---

## Shared Components

All shared wireframe primitives are defined in `client/src/components/wireframe/WireframePrimitives.tsx`:

**WireframeNav**: Top navigation bar with TinyThreads logo, pill-shaped search bar, notification/chat/saved/profile icons, "Sell Now" button, and category links. In Hi-Fi mode, the profile icon uses the p1 profile photo. Supports `hideAccountLinks` prop for auth screens.

**WireframeFooter**: Site footer with Shop, Company (About Us, How It Works, Buyer Protection), and Support (Help Centre, Terms & Conditions, Privacy Policy) sections with active navigation links. Includes social media icons and payment method icons.

**WireBtn**: Wireframe-styled button with primary/secondary/outline variants. Supports `onClick` for modals and `to` for navigation links.

**WireInput / WireTextarea / WireSelect**: Form components rendering as empty bordered boxes in Lo-Fi and functional-looking inputs in Mid-Fi/Hi-Fi. WireSelect includes ml-2 left padding beside the dropdown arrow in all modes.

**ImgPlaceholder**: Renders differently per mode. Lo-Fi: diagonal crossbox pattern with no labels. Mid-Fi: gray box with descriptive label text. Hi-Fi: real product photography from a pool of 20 CDN-hosted images (4:5 aspect ratio). Accepts an optional `src` prop to override the auto-assigned image.

**TextBar / TextLines**: Gray bar placeholders for text content in Lo-Fi mode; render real text in Mid-Fi and Hi-Fi.

**ProductCard**: Reusable product card with image, text, and price. In Hi-Fi mode, images are square at the bottom with only the top corners rounded.

**SectionLabel**: Section heading component used consistently across all pages.

---

## Image Assets

All images are hosted on CDN and referenced via URL. No images are stored in the project directory.

| Asset Type | Count | Format | Dimensions / Ratio | Storage |
|-----------|-------|--------|-------------------|---------|
| Product photos | 20 | WebP | 4:5 ratio | CloudFront CDN |
| Category photos | 5 (Boys, Girls, Unisex, Shoes, Accessories) | WebP/PNG | 3:2 landscape | CloudFront CDN / manuscdn |
| Hero kid photos | 2 (boy left, girl right) | PNG | Transparent background | CloudFront CDN |
| Brand logos | 6 (Primark, Next, Zara, H&M, M&S, John Lewis) | PNG | 300x80px canvas, 280x70px bounding box | CloudFront CDN |
| Profile photos | 17 (p1–p17) | Various | Square, face-cropped | CloudFront CDN |

**Profile photo conventions**: p1 is reserved for the navigation bar and must not be reused elsewhere. No profile photo repeats within a single page. Male-sounding usernames (tom_kidswear, mark_reseller) use male photos.

**Product image carousel** (pages 8 and 9): In Hi-Fi mode, the first carousel thumbnail always displays the same image as the large main product photo. Page 8 uses `productImages[0]` and page 9 uses `productImages[10]` as their respective main images, ensuring the two detail pages show different products.

---

## Cross-Screen Links

Complete navigation map derived from every `Link` and `WireBtn` in the codebase:

- **Global Nav (WireframeNav)** → Home Page, Notifications, Messages, Saved Items, My Profile, Sell an Item, Products Listing, My Purchases (via "My Orders"), Wallet
- **Global Footer (WireframeFooter)** → Products Listing, About Us, How It Works, Buyer Protection, Help Centre, Terms & Conditions, Privacy Policy
- **Home Page** → Products Listing (Shop Now, category links, age links, brand links, View All), Product Detail Buyer (product cards), Sell an Item (Start Selling), Buyer Protection (Learn More)
- **Sign Up** → Log In, Terms & Conditions, Privacy Policy
- **Log In** → Forgot Password, Sign Up
- **Forgot Password** → Verify Code, Log In, Sign Up
- **Verify Code** → Reset Password
- **Reset Password** → Home Page
- **Products Listing** → Product Detail Buyer (product cards)
- **Product Detail Buyer** → Checkout (Buy Now), Messages (Message Seller), Create Bundle, Seller Profile (seller name, View all), Product Detail Buyer (Similar Items, Seller's Items cards)
- **Product Detail Seller** → Edit Item, My Profile (seller name, View all), Product Detail Buyer (Similar Items), Product Detail Seller (Seller's Items)
- **Seller Profile** → Seller Reviews (Reviews tab), Product Detail Buyer (product cards), Create Bundle
- **Seller Reviews** → Seller Profile (Listings tab)
- **My Profile** → Sell an Item, Edit Item (edit icon), Edit Profile, Wallet, Followers, Followings, Product Detail Seller (product cards)
- **Followers** → My Profile, Sell an Item, Edit Profile, Wallet, Followings, Seller Profile (follower names)
- **Followings** → My Profile, Sell an Item, Edit Profile, Wallet, Followers, Seller Profile (seller names)
- **Edit Profile** → My Profile, Change Password
- **Change Password** → Edit Profile
- **Wallet** → My Profile, Add Withdrawal Method
- **Add Withdrawal Method** → Wallet
- **Checkout** → Shipping Selection, Order Confirmation, Terms & Conditions
- **Shipping Selection** → Checkout
- **Order Confirmation** → My Purchases, Products Listing
- **My Purchases** → Track Order, Leave a Review, Dispute Request, Dispute Status, Messages, My Sales
- **My Sales** → My Purchases, Track Order, Messages
- **Track Order** → My Purchases, Seller Profile, Messages
- **Dispute Request** → My Purchases, Dispute Status
- **Dispute Status** → My Purchases, Seller Profile, Messages
- **Sell an Item** → My Profile, Buyer Protection
- **Edit Item** → My Profile, Buyer Protection
- **Create Bundle** → Product Detail Buyer, Seller Profile, Checkout, Messages
- **Leave a Review** → My Purchases
- **Saved Items** → Product Detail Buyer, Followings, Seller Profile
- **Messages** → Offer Sent, Offer Received, Seller Profile, Checkout
- **Offer Sent** → Messages, Offer Received, Seller Profile, Product Detail Buyer
- **Offer Received** → Messages, Offer Sent, Seller Profile, Product Detail Buyer
- **Notifications** → Wallet, Dispute Status, Offer Received, My Purchases, Product Detail Buyer, My Profile, Messages
- **About Us** → How It Works, Buyer Protection, Sign Up, Products Listing
- **How It Works** → Sell an Item, Products Listing
- **Buyer Protection** → Products Listing, Help Centre

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19 | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| shadcn/ui | Latest | Component library |
| Wouter | Latest | Client-side routing |
| Lucide React | Latest | Icon library |
| Vite | 7.x | Development server and bundling |
| Sonner | Latest | Toast notifications |

---

## Project Structure

```
client/
  src/
    pages/                ← All 41 screen components
      Home.tsx
      SignUp.tsx
      Login.tsx
      ForgotPassword.tsx
      VerifyCode.tsx
      ResetPassword.tsx
      Products.tsx
      ProductDetailBuyer.tsx
      ProductDetailSeller.tsx
      SellerProfile.tsx
      SellerReviews.tsx
      Profile.tsx
      Followers.tsx
      Followings.tsx
      EditProfile.tsx
      ChangePassword.tsx
      Wallet.tsx
      AddWithdrawalMethod.tsx
      Checkout.tsx
      ShippingSelection.tsx
      OrderConfirmation.tsx
      MyPurchases.tsx
      MySales.tsx
      TrackOrder.tsx
      DisputeRequest.tsx
      DisputeStatus.tsx
      SellItem.tsx
      EditItem.tsx
      CreateBundle.tsx
      LeaveReview.tsx
      SavedItems.tsx
      Messages.tsx
      OfferSent.tsx
      OfferReceived.tsx
      Notifications.tsx
      About.tsx
      HowItWorks.tsx
      BuyerProtection.tsx
      HelpCentre.tsx
      TermsAndConditions.tsx
      PrivacyPolicy.tsx
    components/
      wireframe/
        WireframePrimitives.tsx  ← Shared UI blocks (ImgPlaceholder, ProductCard, WireBtn, etc.)
        WireframeShell.tsx       ← Sidebar, top toolbar, full-screen mode, keyboard shortcuts
        PaymentIcons.tsx         ← Payment method SVG icons for footer
        SocialIcons.tsx          ← Social media SVG icons for footer
      ui/                        ← shadcn/ui components (button, dialog, card, etc.)
      ErrorBoundary.tsx
    contexts/
      WireframeModeContext.tsx    ← Lo-Fi / Mid-Fi / Hi-Fi toggle state
      ThemeContext.tsx            ← Light/dark theme provider
    hooks/
      useMobile.tsx              ← Mobile breakpoint detection
    lib/
      profilePhotos.ts           ← PROFILE_PHOTOS object mapping p1–p17 to CDN URLs
      utils.ts                   ← Utility helpers (cn, etc.)
    App.tsx                      ← Routes & top-level layout
    main.tsx                     ← React entry point
    index.css                    ← Global styles & Tailwind design tokens
```

---

## Design Conventions

The following conventions are enforced throughout the prototype to maintain visual consistency:

**Lo-Fi mode** uses only black and white. Image placeholders render as bordered rectangles with diagonal crossed lines (no text labels, no rounded corners). Circular placeholders (e.g. profile avatars) also include a cross pattern. Input boxes are empty (no placeholder lines).

**Product card images** in Hi-Fi mode are square at the bottom with only the top corners rounded, achieved via `rounded-t` classes.

**WireSelect dropdown** includes `ml-2` left padding beside the arrow icon in all three modes. This applies to screens 7, 10, 11, 12, 13, 14, and 31.

**Brand logos** in the Popular Brands section on the Home page are normalised to a uniform visual size: each logo is scaled to fit within a 280x70px bounding box on a 300x80px transparent canvas, ensuring equal visual weight regardless of original dimensions.

**Hero section** features a boy on the left and a girl on the right with centred text and CTA buttons between them. In Lo-Fi mode, the kids are represented by diagonal-line placeholders without labels.

**Toast notifications** use Sonner (not react-toastify). Placeholder UI elements that are not yet implemented show a "Feature coming soon" toast on click.
