# TinyThreads Wireframes

Interactive wireframe prototype for **TinyThreads**, a peer-to-peer marketplace for buying and selling pre-loved children's clothing in the UK. Built with React 19, Tailwind CSS 4, and shadcn/ui. Every screen supports both **Lo-Fi** (black-and-white placeholder) and **Hi-Fi** (detailed, styled) viewing modes.

---

## Getting Started

```bash
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`.

---

## Screens (41 total)

| # | Screen | Route | Description |
|---|--------|-------|-------------|
| 1 | Home Page | `/` | Main landing page with hero banner, Shop by Category grid, Shop by Age section (combined age/size labels), Sellers You Follow product carousel, Just Listed product carousel, Popular Brands row, How It Works steps, and Buyer Protection trust section. |
| 2 | Sign Up | `/signup` | Registration form with full name, email, and password fields, plus social sign-up options for Google, Facebook, and Apple. |
| 3 | Log In | `/login` | Authentication screen with email/password fields, social login options (Google, Facebook, Apple), and a Forgot Password link. |
| 4 | Forgot Password | `/forgot-password` | Password recovery entry point where the user enters their email to receive a verification code. Redirects to Verify Code. |
| 5 | Verify Code | `/verify-code` | Code verification step where the user enters a 6-digit code sent to their email. Redirects to Reset Password. |
| 6 | Reset Password | `/reset-password` | Final password recovery step where the user sets and confirms a new password. Redirects to the Home Page. |
| 7 | Products Listing | `/products` | Browsable catalogue with a left sidebar containing filters (Category, Age / Size combined, Condition, Brand) and a 5-column, 4-row product grid with pagination (3,248 items, 163 pages). |
| 8 | Product Detail (Buyer) | `/product-detail-buyer` | Detailed view of a single listing with vertical thumbnail stack, main photo, item info (Age / Size combined field), seller details, Buy Now/Make an Offer/Message Seller buttons, Make an Offer modal, Seller's Items section with Create Bundle button and View all link, and Similar Items section below. |
| 9 | Product Detail (Seller) | `/product-detail-seller` | Seller's own view of a listing with Mark as Sold, Edit Listing, and Delete Listing buttons. No favourite button, no bundle section, no Follow button on seller card. Seller is jane_smith_shop. View all link in Seller's Items redirects to My Profile. Similar Items section below. |
| 10 | Seller Profile | `/seller-profile` | Public seller profile with avatar, username, rating, bio, stats, filter chips, a 6-column product grid with pagination (82 listings, 5 pages), and a Create Bundle button. |
| 11 | Seller Reviews | `/seller-reviews` | Seller reviews page with overall rating breakdown, star distribution bar chart, and individual buyer review cards. Listings tab links back to Seller Profile. |
| 12 | My Profile | `/profile` | User's profile dashboard (jane_smith_shop) with avatar, bio, 4.6 rating, stats row, tabs (My Listings, Reviews, Followers, Followings), filter chips with Active/Sold status filters, product grid with edit buttons on active listings only (no edit on sold items), and "Sold" badges on last 3 products. Product cards link to Product Detail (Seller). |
| 13 | Followers | `/followers` | Lists all users following the current user. Shares the same profile header, stats, and tabs as My Profile with the Followers tab active. Displays 16 followers in a 5-column grid with Remove buttons. |
| 14 | Followings | `/followings` | Lists all users the current user follows. Shares the same profile header, stats, and tabs as My Profile with the Followings tab active. Displays 12 followed sellers in a 5-column grid. Seller names link to Seller Profile. |
| 15 | Edit Profile | `/edit-profile` | Profile editing form with fields for display name, username, email, bio, and photo upload. Includes address section (42 Primrose Lane, London, SW1A 1AA), Enable Bundle Discount section with toggle and discount % dropdowns for 2, 3, and 5 items, Linked Social Accounts, Change Password entry point, and Notification Preferences. |
| 16 | Change Password | `/change-password` | Password update screen requiring current password, new password, and confirmation. Redirects to Edit Profile. |
| 17 | Wallet | `/wallet` | Digital wallet dashboard with current balance, pending earnings, total earned, saved withdrawal methods, and transaction history with filter tabs. |
| 18 | Add Withdrawal Method | `/add-withdrawal-method` | Form for adding a bank account or PayPal as a withdrawal destination with account holder name, sort code, account number, and PayPal email fields. |
| 19 | Checkout | `/checkout` | Two-column checkout with Shipping Address (42 Primrose Lane, London, SW1A 1AA), Shipping Method, and Payment Method on the left, and Order Summary with price breakdown and Pay button on the right. |
| 20 | Shipping Selection | `/shipping-selection` | Expanded view of shipping options (Royal Mail, Evri, InPost, Local Collection) with delivery estimates, pricing, tracking availability, and a back button to Checkout. |
| 21 | Order Confirmation | `/order-confirmation` | Post-purchase confirmation with success message, order number, item summary, shipping details (42 Primrose Lane, London, SW1A 1AA), estimated delivery, payment summary, and links to Track Order. |
| 22 | My Purchases | `/my-purchases` | Buyer order management with Purchases/Sales tabs, search bar, status filter pills, and order cards with action buttons. Item titles use format "Item Name (age / size)". Shows 6 orders including one with an active dispute. |
| 23 | My Sales | `/my-sales` | Seller order management with Purchases/Sales tabs, search bar, status filter pills, and order cards with contextual action buttons. Item titles use format "Item Name (age / size)". Shows 5 orders. |
| 24 | Track Order | `/track-order` | Order tracking with visual timeline, estimated delivery, shipping details (42 Primrose Lane, London, SW1A 1AA), seller info, and a back button to My Purchases. |
| 25 | Dispute Request | `/dispute` | Dispute submission form with reason selector, description text area, photo upload, order reference details, and a back button to My Purchases. |
| 26 | Dispute Status | `/dispute-status` | Dispute progress tracker with status timeline (Submitted, Under Review, Seller Response, Resolution), communication thread, seller info, and order details sidebar. |
| 27 | Sell an Item | `/sell-item` | Multi-step listing form with 4-step stepper (Photos, Details, Pricing, Shipping). Details step includes combined Age / Size selector. Save as Draft and Publish Listing buttons redirect to My Profile. |
| 28 | Edit Item | `/edit-item` | Edit listing form, identical layout to Sell an Item but with "Edit Item" title and Save Changes / Delete Listing buttons. Includes combined Age / Size selector. Redirects to My Profile. |
| 29 | Create Bundle | `/create-bundle` | Bundle creation screen with a 5-column, 4-row product grid (20 items). First 3 items show tick marks indicating selection. Right sidebar shows seller info card, Bundle Summary with 3 bundled items (tiny photos, prices, remove buttons), pricing breakdown with 15% bundle discount, Make an Offer button, Proceed to Checkout button, and Message Seller button. |
| 30 | Leave a Review | `/leave-review` | Post-transaction review form with star rating selector, text area for feedback, order/item context, and a back button to My Purchases. |
| 31 | Saved Items | `/saved-items` | Favourited items grid with heart icons, "Price dropped" and "Sold" badges, filter chips, and a Sellers You Follow section showing 8 followed sellers with View All link. |
| 32 | Messages | `/messages` | Messaging hub with conversation sidebar listing 6 chats. sarah_mum_of_3 is the active conversation. First 3 conversations are clickable and navigate to their respective screens. View Profile links to Seller Profile. |
| 33 | Offer Sent | `/offer-sent` | Chat view with emma_preloved showing an offer sent by the user. Rich offer message bubble with item card, price comparison, buyer message, "Pending" status badge, and Cancel Offer button. View Profile links to Seller Profile. |
| 34 | Offer Received | `/offer-received` | Chat view with chloe_vintage showing an offer received. Rich offer message bubble with item card, price comparison, buyer message, "Pending" status badge, Decline and Accept buttons side by side, and full-width "Offer Your Price" button below. View Profile links to Seller Profile. |
| 35 | Notifications | `/notifications` | Notification centre with filter chips (All, Sales, Messages, Listings, Shipping, Reviews, Disputes). 10 notifications in chronological order with 3 unread. Each notification links to its relevant screen. |
| 36 | About Us | `/about` | Company information page covering TinyThreads' mission, values, team, and commitment to sustainability. |
| 37 | How It Works | `/how-it-works` | Step-by-step guide for buyers and sellers covering listing, browsing, purchasing, shipping, and buyer protection. |
| 38 | Buyer Protection | `/buyer-protection` | Detailed explanation of the buyer protection programme, coverage, claims process, refund policies, and dispute resolution. |
| 39 | Help Centre | `/help-centre` | Support hub with categorised FAQ sections, search functionality, and links to common help topics. |
| 40 | Terms & Conditions | `/terms` | Legal terms of service covering user responsibilities, prohibited items, transaction policies, and platform rules. |
| 41 | Privacy Policy | `/privacy` | Data privacy document detailing personal data collection, usage, third-party sharing, cookies, and user rights. |

---

## Dual-Mode Toggle (Lo-Fi / Hi-Fi)

Every screen supports two rendering modes, toggled from the top toolbar or by pressing **T**:

- **Lo-Fi mode**: Pure wireframe with black-and-white styling, TextBar placeholders for text, crossbox (X-pattern) image placeholders for both rectangular and circular shapes, empty input boxes, and structural layout elements. Key titles and labels are shown as real text for clarity.
- **Hi-Fi mode**: Full-fidelity wireframe with real text content, proper typography, realistic form fields with placeholder text, and detailed content matching the intended final design.

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Previous screen |
| `→` | Next screen |
| `T` | Toggle Lo-Fi / Hi-Fi mode |
| `F` | Toggle full-screen mode |
| `Esc` | Exit full-screen or close overlay |
| `?` | Show / hide keyboard shortcuts help |

---

## Navigation Shell

- **Sidebar**: Lists all 41 screens with numbered indices. Clicking a screen navigates to it. The active screen is highlighted and auto-scrolled into view.
- **Top toolbar**: Shows the current screen name, Lo-Fi/Hi-Fi toggle, Full Screen button, help (?) button, screen counter, and Prev/Next navigation arrows.
- **Full-screen mode**: Hides the sidebar and toolbar entirely, displaying the wireframe as a standalone page. Exit via Escape or F key.
- **Footer status**: Displays the current mode ("Lo-fi wireframes · Desktop" or "Hi-fi wireframes · Desktop").

---

## Shared Components

- **WireframeNav**: Top navigation bar with TinyThreads logo, pill-shaped search bar, notification/chat/saved/profile icons, "Sell Now" button, and category links. Supports `hideAccountLinks` prop for auth screens.
- **WireframeFooter**: Site footer with Shop, Company (About Us, How It Works, Buyer Protection), and Support (Help Centre, Terms & Conditions, Privacy Policy) sections with active navigation links.
- **WireBtn**: Wireframe-styled button with primary/secondary/outline variants. Supports `onClick` prop for modals and interactive elements.
- **WireInput / WireTextarea / WireSelect**: Form components rendering as empty bordered boxes in Lo-Fi and functional-looking inputs in Hi-Fi.
- **ImgPlaceholder**: Rectangular image placeholder with CSS-based diagonal crossbox pattern.
- **TextBar / TextLines**: Gray bar placeholders for text content in Lo-Fi mode.
- **ProductCard**: Reusable product card with image, text, and price.

---

## Cross-Screen Links

Complete navigation map derived from every `Link` and `WireBtn` in the codebase:

- **Global Nav (WireframeNav)** → Home Page, Notifications, Messages, Saved Items, My Profile, Sell an Item, Products Listing, My Purchases (via "My Orders" nav link), Wallet
- **Global Footer (WireframeFooter)** → Products Listing, About Us, How It Works, Buyer Protection, Help Centre, Terms & Conditions, Privacy Policy
- **Home Page** → Products Listing (Shop Now, category links, age links, brand links, View All), Product Detail (Buyer) (product cards in Sellers You Follow and Just Listed), Sell an Item (Start Selling), Buyer Protection (Learn More)
- **Sign Up** → Log In, Terms & Conditions, Privacy Policy
- **Log In** → Forgot Password, Sign Up
- **Forgot Password** → Verify Code (Send Reset Link), Log In (Back to Log In), Sign Up (Create Account)
- **Verify Code** → Reset Password (Verify Code button)
- **Reset Password** → Home Page (Reset Password button)
- **Products Listing** → Product Detail (Buyer) (product cards)
- **Product Detail (Buyer)** → Checkout (Buy Now), Messages (Message Seller), Create Bundle (Create Bundle button), Seller Profile (seller name link, View all in Seller's Items), Product Detail (Buyer) (Similar Items and Seller's Items cards). Make an Offer modal opens inline with price input, message field, and Submit/Cancel buttons.
- **Product Detail (Seller)** → Edit Item (Edit Listing), My Profile (seller name link, View all in Seller's Items), Product Detail (Buyer) (Similar Items cards), Product Detail (Seller) (Seller's Items cards)
- **Seller Profile** → Seller Reviews (Reviews tab), Product Detail (Buyer) (product cards), Create Bundle (Create Bundle button)
- **Seller Reviews** → Seller Profile (Listings tab)
- **My Profile** → Sell an Item (Sell an Item button), Edit Item (edit icon on active product cards), Edit Profile, Wallet (Wallet Balance card), Followers (Followers tab), Followings (Followings tab), Product Detail (Seller) (product cards)
- **Followers** → My Profile (My Listings tab), Sell an Item (Sell an Item button), Edit Profile, Wallet (Wallet Balance card), Followings (Followings tab), Seller Profile (follower name links)
- **Followings** → My Profile (My Listings tab), Sell an Item (Sell an Item button), Edit Profile, Wallet (Wallet Balance card), Followers (Followers tab), Seller Profile (seller name links)
- **Edit Profile** → My Profile (back button, Cancel), Change Password
- **Change Password** → Edit Profile (Update Password button, Back to Edit Profile link)
- **Wallet** → My Profile (Back to Profile), Add Withdrawal Method (Withdraw button, + Add Method link)
- **Add Withdrawal Method** → Wallet (back button, Cancel, Add Withdrawal Method button)
- **Checkout** → Shipping Selection (View all shipping options), Order Confirmation (Pay button), Terms & Conditions
- **Shipping Selection** → Checkout (back button, Back to Checkout, Confirm Shipping)
- **Order Confirmation** → My Purchases (View My Orders), Products Listing (Continue Shopping)
- **My Purchases** → Track Order (Track Order button), Leave a Review (Leave Review), Dispute Request (Report Issue), Dispute Status (View Dispute), Messages (Message Seller), My Sales (Sales tab)
- **My Sales** → My Purchases (Purchases tab), Track Order (Track Order button), Messages (Message Buyer)
- **Track Order** → My Purchases (back button), Seller Profile (seller name link), Messages (Message Seller)
- **Dispute Request** → My Purchases (back button, Cancel), Dispute Status (Submit Dispute)
- **Dispute Status** → My Purchases (back button), Seller Profile (seller name link), Messages (Message Seller Directly)
- **Sell an Item** → My Profile (Save as Draft, Publish Listing), Buyer Protection (Learn more)
- **Edit Item** → My Profile (Delete Listing, Save Changes), Buyer Protection (Learn more)
- **Create Bundle** → Product Detail (Buyer) (product cards), Seller Profile (seller name link), Checkout (Proceed to Checkout), Messages (Message Seller)
- **Leave a Review** → My Purchases (back button, Cancel, Submit Review)
- **Saved Items** → Product Detail (Buyer) (product cards), Followings (View All in Sellers You Follow), Seller Profile (seller avatars)
- **Messages** → Offer Sent (emma_preloved conversation), Offer Received (chloe_vintage conversation), Seller Profile (View Profile), Checkout (Buy Now in chat)
- **Offer Sent** → Messages (sarah_mum_of_3 conversation), Offer Received (chloe_vintage conversation), Seller Profile (View Profile), Product Detail (Buyer) (item card link)
- **Offer Received** → Messages (sarah_mum_of_3 conversation), Offer Sent (emma_preloved conversation), Seller Profile (View Profile), Product Detail (Buyer) (item card link)
- **Notifications** → Wallet (sale notification), Dispute Status (dispute notifications), Offer Received (offer notification), My Purchases (shipping notification), Product Detail (Buyer) (price drop, new listing), My Profile (review notification), Messages (message notification)
- **About Us** → How It Works, Buyer Protection, Sign Up, Products Listing
- **How It Works** → Sell an Item (Start Selling), Products Listing (Browse Items)
- **Buyer Protection** → Products Listing (Browse Items), Help Centre (Contact Support)
- **Help Centre** → *(no outbound links)*
- **Terms & Conditions** → *(no outbound links)*
- **Privacy Policy** → *(no outbound links)*

---

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS 4** for styling
- **shadcn/ui** component library
- **Wouter** for client-side routing
- **Lucide React** for icons
- **Vite** for development and bundling

---

## Project Structure

```
client/
  src/
    pages/          ← All 41 screen components
    components/
      wireframe/    ← WireframePrimitives (shared UI blocks) & WireframeShell (sidebar + navigation)
      ui/           ← shadcn/ui components
    contexts/       ← WireframeModeContext (Lo-Fi/Hi-Fi toggle) & ThemeContext
    hooks/          ← Custom React hooks
    lib/            ← Utility helpers
    App.tsx         ← Routes & top-level layout
    main.tsx        ← React entry point
    index.css       ← Global styles & design tokens
```
