import { Link } from "wouter";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";

/* ─── Design System Colors (Hi-Fi) ─── */
const DS = {
  primary: "#B8654A",       // Warm terracotta
  primaryHover: "#9A5340",
  primaryFg: "#ffffff",
  secondary: "#FDF6F0",     // Warm cream tint
  secondaryFg: "#B8654A",
  accent: "#D4A853",        // Golden amber accent
  accentFg: "#ffffff",
  bg: "#FFFCF9",
  bgSoft: "#FBF7F3",
  bgMuted: "#F5EDE5",
  text: "#3D2E27",
  textMuted: "#6B5549",
  textLight: "#9C8A7E",
  border: "#E6D5C7",
  borderLight: "#F0E6DC",
  shadow: "0 2px 8px rgba(184,101,74,0.08)",
  shadowMd: "0 4px 16px rgba(184,101,74,0.12)",
  radius: "12px",
  radiusSm: "8px",
  radiusLg: "16px",
};

/* ─── Product images for Hi-Fi mode (4:5 aspect ratio, children's clothing catalog) ─── */
const productImages = [
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-01-tshirt-PhzFpLMhPri3pjxMyHi33P.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-02-dress-S6pJPG3xSPSpk5GFF6RLo2.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-03-jacket-mGd5C8jxfsYqp9xMeRfqWs.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-04-raincoat-6xR5ZsyZTgH6vTG4u9F4KB.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-05-shoes-4hR64fenXoitBWXqox3oyX.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-06-hoodie-4j2jyL7YaCv8RZxPmRcFnt.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-07-sweatshirt-doqY5xGUsCfzp9yNrRDpSe.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-08-shorts-V6hEoSjQpnbpKRWjUwYDKe.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-09-bag-Tya4AhZQYFGNH6f9gRR8KG.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-10-watch-MSPJ3Jz37n32J6DPrphWnc.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-11-pants-2323rtPJVXmr2Rnj656arU.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-12-skirt-4RGitJeMeYXNdP5Bzx3Tmc.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-13-hat-JmJVJ37PpaDnsmznNLdhSU.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-14-hoodie2-UZfWLhnZhFBgjgVq8FruoQ.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-15-tshirt2-Ww2MCo82gp9UdVEkkekMHd.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-16-dress2-AXD3t7XK5iUU4wUSHZMy7x.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-17-boots-eyKErh5LJQNrjCX97gNcgn.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-18-polo-HvkY8LpgSJ4Y8LgShAhDHY.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-19-wintercoat-WVLeHTbLcSxDUUsE9tcYzY.webp",
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663332337268/5dAnQahEr3KsPSbq9QaW5W/product-new-20-messenger-AFvTn7CGtTTE9LDRX7YkYT.webp",
];
let imgCounter = 0;
function getProductImg() {
  return productImages[imgCounter++ % productImages.length];
}

/* ─── Image Placeholder ─── */
export function ImgPlaceholder({
  label = "Image",
  className = "",
  aspectRatio,
  src,
}: {
  label?: string;
  className?: string;
  aspectRatio?: string;
  src?: string;
}) {
  const { isLofi, isHifi } = useWireframeMode();
  if (isLofi) {
    return (
      <div
        className={`wireframe-img-placeholder ${className}`}
        data-label={label}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    );
  }
  if (isHifi) {
    const imgSrc = src || getProductImg();
    const hasCustomRadius = className.includes('rounded-none') || className.includes('rounded-t');
    return (
      <div
        className={`overflow-hidden ${className}`}
        style={{ aspectRatio: aspectRatio || undefined, ...(hasCustomRadius ? {} : { borderRadius: DS.radiusSm }) }}
      >
        <img
          src={imgSrc}
          alt={label}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }
  // Mid-Fi: gray box with label text
  return (
    <div
      className={`bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-400 text-xs ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {label}
    </div>
  );
}

/* ─── Text Lines ─── */
export function TextLines({
  lines = 3,
  className = "",
  detailedText,
}: {
  lines?: number;
  className?: string;
  detailedText?: string;
}) {
  const { isLofi, isHifi } = useWireframeMode();
  if (isLofi) {
    const widths = ["full", "long", "medium", "short", "long", "full", "medium", "short"];
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={`wireframe-text-line ${widths[i % widths.length]}`} />
        ))}
      </div>
    );
  }
  // Mid-Fi & Hi-Fi: show actual text
  return (
    <div className={className}>
      <p className="text-sm leading-relaxed" style={{ color: isHifi ? DS.textMuted : "#6b7280" }}>
        {detailedText || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
      </p>
    </div>
  );
}

/* ─── Single inline text bar ─── */
export function TextBar({
  width = "60%",
  className = "",
  detailedText,
}: {
  width?: string;
  className?: string;
  detailedText?: string;
}) {
  const { isLofi, isHifi } = useWireframeMode();
  if (isLofi) {
    return <span className={`wireframe-text-bar ${className}`} style={{ width }} />;
  }
  return (
    <span className={`text-sm ${className}`} style={{ color: isHifi ? DS.textMuted : "#6b7280" }}>
      {detailedText || "Sample text"}
    </span>
  );
}

/* ─── Button Placeholder ─── */
export function WireBtn({
  children,
  variant = "primary",
  className = "",
  to,
  full = false,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  to?: string;
  full?: boolean;
  onClick?: () => void;
}) {
  const { isLofi, isHifi } = useWireframeMode();
  const base = `px-5 py-2.5 text-sm font-medium border text-center transition-colors duration-150 ${full ? "w-full" : ""} ${className}`;

  let variantCls: string;
  let inlineStyle: React.CSSProperties = {};

  if (isLofi) {
    variantCls = "bg-white text-black border-black";
  } else if (isHifi) {
    variantCls = "";
    if (variant === "primary") {
      inlineStyle = { background: DS.primary, color: DS.primaryFg, borderColor: DS.primary, borderRadius: DS.radiusSm };
    } else if (variant === "secondary") {
      inlineStyle = { background: DS.secondary, color: DS.secondaryFg, borderColor: DS.border, borderRadius: DS.radiusSm };
    } else {
      inlineStyle = { background: "transparent", color: DS.text, borderColor: DS.border, borderRadius: DS.radiusSm };
    }
  } else {
    const variants = {
      primary: "bg-gray-800 text-white border-gray-800 rounded-md hover:bg-gray-700",
      secondary: "bg-gray-100 text-gray-800 border-gray-300 rounded-md hover:bg-gray-200",
      outline: "bg-white text-gray-800 border-gray-300 rounded-md hover:bg-gray-50",
    };
    variantCls = variants[variant];
  }
  const cls = `${base} ${variantCls}`;

  if (to) {
    return <Link to={to} className={`block ${cls}`} style={inlineStyle} onClick={onClick}>{children}</Link>;
  }
  return <button className={cls} style={inlineStyle} onClick={onClick}>{children}</button>;
}

/* ─── Input Field ─── */
export function WireInput({
  label,
  placeholder = "",
  type = "text",
  className = "",
  value,
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
}) {
  const { isLofi, isHifi } = useWireframeMode();
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && <label className="text-sm font-medium text-black">{label}</label>}
        <div className="h-10 border border-black bg-white px-3 flex items-center" />
      </div>
    );
  }
  const borderColor = isHifi ? DS.border : "#d1d5db";
  const labelColor = isHifi ? DS.text : "#374151";
  const inputBg = isHifi ? DS.bgSoft : "#ffffff";
  const radius = isHifi ? DS.radiusSm : "6px";
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium" style={{ color: labelColor }}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder || label || ""}
        defaultValue={value}
        className="h-10 border px-3 text-sm placeholder-gray-400"
        style={{ borderColor, borderRadius: radius, background: inputBg, color: isHifi ? DS.text : "#374151" }}
        readOnly
      />
    </div>
  );
}

/* ─── Textarea ─── */
export function WireTextarea({
  label,
  placeholder = "",
  rows = 4,
  className = "",
}: {
  label?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
}) {
  const { isLofi, isHifi } = useWireframeMode();
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && <label className="text-sm font-medium text-black">{label}</label>}
        <div
          className="border border-black bg-white px-3 py-3"
          style={{ minHeight: `${rows * 24}px` }}
        />
      </div>
    );
  }
  const borderColor = isHifi ? DS.border : "#d1d5db";
  const labelColor = isHifi ? DS.text : "#374151";
  const radius = isHifi ? DS.radiusSm : "6px";
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium" style={{ color: labelColor }}>{label}</label>}
      <textarea
        placeholder={placeholder || label || ""}
        rows={rows}
        className="border px-3 py-2 text-sm placeholder-gray-400 resize-none"
        style={{ borderColor, borderRadius: radius, background: isHifi ? DS.bgSoft : "#ffffff", color: isHifi ? DS.text : "#374151" }}
        readOnly
      />
    </div>
  );
}

/* ─── Select Dropdown ─── */
export function WireSelect({
  label,
  placeholder = "Select...",
  className = "",
}: {
  label?: string;
  placeholder?: string;
  className?: string;
}) {
  const { isLofi, isHifi } = useWireframeMode();
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && <label className="text-sm font-medium text-black">{label}</label>}
        <div className="h-10 border border-black bg-white px-3 flex items-center justify-between">
          <span className="text-xs text-black">{placeholder}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-black ml-2">
            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }
  const borderColor = isHifi ? DS.border : "#d1d5db";
  const labelColor = isHifi ? DS.text : "#374151";
  const radius = isHifi ? DS.radiusSm : "6px";
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium" style={{ color: labelColor }}>{label}</label>}
      <div className="h-10 border px-3 flex items-center justify-between" style={{ borderColor, borderRadius: radius, background: isHifi ? DS.bgSoft : "#ffffff" }}>
        <span className="text-sm" style={{ color: isHifi ? DS.textLight : "#9ca3af" }}>{placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-2" style={{ color: isHifi ? DS.textLight : "#9ca3af" }}>
          <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Product Card ─── */
export function ProductCard({
  showFavorite = true,
  to,
}: {
  showFavorite?: boolean;
  to?: string;
}) {
  const { isLofi, isHifi } = useWireframeMode();

  const inner = isLofi ? (
    <div className="border border-black bg-white group">
      <div className="relative">
        <ImgPlaceholder label="Product Photo" aspectRatio="4/5" />
        {showFavorite && (
          <div className="absolute top-2 right-2 w-8 h-8 bg-white border border-black flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1.5 border-t border-black">
        <TextBar width="45%" />
        <TextBar width="75%" />
        <TextBar width="55%" />
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-semibold text-black">&pound;8.00</span>
          <TextBar width="50px" />
        </div>
      </div>
    </div>
  ) : isHifi ? (
    <div className="group overflow-hidden" style={{ border: `1px solid ${DS.borderLight}`, borderRadius: DS.radius, boxShadow: DS.shadow, background: DS.bg, transition: "box-shadow 0.2s, transform 0.2s" }}>
      <div className="relative overflow-hidden">
        <ImgPlaceholder label="Product Photo" aspectRatio="4/5" className="rounded-none" />
        {showFavorite && (
          <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.9)", borderRadius: "50%", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={DS.accent} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1" style={{ borderTop: `1px solid ${DS.borderLight}` }}>
        <span className="text-xs" style={{ color: DS.textLight }}>Next Kids</span>
        <span className="text-sm font-medium" style={{ color: DS.text }}>Striped Cotton T-Shirt</span>
        <span className="text-xs" style={{ color: DS.textLight }}>4 years / 104 cm</span>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-bold" style={{ color: DS.primary }}>&pound;8.00</span>
          <span className="text-xs px-2 py-0.5" style={{ background: DS.secondary, color: DS.primaryHover, borderRadius: "4px" }}>Like new</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="border border-gray-200 rounded-lg bg-white group hover:shadow-md transition-shadow">
      <div className="relative">
        <ImgPlaceholder label="Product Photo" aspectRatio="4/5" className="rounded-t-lg" />
        {showFavorite && (
          <div className="absolute top-2 right-2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-3 flex flex-col gap-1 border-t border-gray-100">
        <span className="text-xs text-gray-400">Brand Name</span>
        <span className="text-sm text-gray-700">Product Title</span>
        <span className="text-xs text-gray-400">4 years / 104 cm</span>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm font-semibold text-gray-800">&pound;8.00</span>
          <span className="text-xs text-gray-400">Like new</span>
        </div>
      </div>
    </div>
  );

  if (to) {
    return <Link to={to} className="block">{inner}</Link>;
  }
  return inner;
}

/* ─── Navigation Header ─── */
export function WireframeNav({ hideAccountLinks = false }: { hideAccountLinks?: boolean } = {}) {
  const { isLofi, isHifi } = useWireframeMode();

  if (isLofi) {
    return (
      <div className="border-b border-black">
        <div className="flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white border border-black flex items-center justify-center">
              <span className="text-black text-xs font-bold">TT</span>
            </div>
            <span className="text-base font-semibold text-black">TinyThreads</span>
          </Link>
          <div className="flex-1 max-w-xl mx-8">
            <div className="h-10 border border-black bg-white px-4 flex items-center gap-2 rounded-full">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black flex-shrink-0">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/notifications" className="text-black">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </Link>
            <Link to="/messages" className="text-black">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </Link>
            <Link to="/saved-items" className="text-black">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </Link>
            <Link to="/profile" className="text-black">
              <div className="w-8 h-8 bg-white border border-black flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </div>
            </Link>
            <WireBtn to="/sell-item" variant="primary">Sell Now</WireBtn>
          </div>
        </div>
        <div className="flex items-center gap-6 px-6 py-2 border-t border-black">
          <Link to="/products" className="text-sm text-black font-medium">Boys</Link>
          <Link to="/products" className="text-sm text-black font-medium">Girls</Link>
          <Link to="/products" className="text-sm text-black font-medium">Unisex</Link>
          <Link to="/products" className="text-sm text-black font-medium">Shoes</Link>
          <Link to="/products" className="text-sm text-black font-medium">Accessories</Link>
          {!hideAccountLinks && (
            <div className="ml-auto flex items-center gap-4">
              <Link to="/my-purchases" className="text-xs text-black">My Orders</Link>
              <Link to="/wallet" className="text-xs text-black">Wallet</Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (isHifi) {
    return (
      <div style={{ borderBottom: `1px solid ${DS.border}`, background: DS.bg }}>
        <div className="flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/kUgQoLnnoqrWNYKV.png" alt="TinyThreads" className="w-8 h-8 object-contain" />
            <span className="text-base font-semibold" style={{ color: DS.text }}>TinyThreads</span>
          </Link>
          <div className="flex-1 max-w-xl mx-8">
            <div className="h-10 px-4 flex items-center gap-2" style={{ border: `1px solid ${DS.border}`, borderRadius: "999px", background: DS.bgSoft }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={DS.textLight} strokeWidth="2" className="flex-shrink-0">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <span className="text-sm" style={{ color: DS.textLight }}>Search for items, brands, categories...</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/notifications" style={{ color: DS.textMuted }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </Link>
            <Link to="/messages" style={{ color: DS.textMuted }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </Link>
            <Link to="/saved-items" style={{ color: DS.textMuted }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </Link>
            <Link to="/profile">
              <img src={PROFILE_PHOTOS.p1} alt="Profile" className="w-8 h-8 rounded-full object-cover" style={{ border: `2px solid ${DS.border}` }} />
            </Link>
            <WireBtn to="/sell-item" variant="primary">Sell Now</WireBtn>
          </div>
        </div>
        <div className="flex items-center gap-6 px-6 py-2" style={{ borderTop: `1px solid ${DS.borderLight}` }}>
          <Link to="/products" className="text-sm font-medium" style={{ color: DS.text }}>Boys</Link>
          <Link to="/products" className="text-sm font-medium" style={{ color: DS.text }}>Girls</Link>
          <Link to="/products" className="text-sm font-medium" style={{ color: DS.text }}>Unisex</Link>
          <Link to="/products" className="text-sm font-medium" style={{ color: DS.text }}>Shoes</Link>
          <Link to="/products" className="text-sm font-medium" style={{ color: DS.text }}>Accessories</Link>
          {!hideAccountLinks && (
            <div className="ml-auto flex items-center gap-4">
              <Link to="/my-purchases" className="text-xs" style={{ color: DS.textMuted }}>My Orders</Link>
              <Link to="/wallet" className="text-xs" style={{ color: DS.textMuted }}>Wallet</Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Mid-Fi nav
  return (
    <div className="border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-800 rounded-md flex items-center justify-center">
            <span className="text-white text-xs font-bold">TT</span>
          </div>
          <span className="text-base font-semibold text-gray-800">TinyThreads</span>
        </Link>
        <div className="flex-1 max-w-xl mx-8">
          <div className="h-10 border border-gray-300 rounded-full bg-gray-50 px-4 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <span className="text-sm text-gray-400">Search for items, brands, categories...</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/notifications" className="text-gray-500 hover:text-gray-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          </Link>
          <Link to="/messages" className="text-gray-500 hover:text-gray-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
          </Link>
          <Link to="/saved-items" className="text-gray-500 hover:text-gray-700">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
          </Link>
          <Link to="/profile" className="text-gray-500 hover:text-gray-700">
            <div className="w-8 h-8 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </div>
          </Link>
          <WireBtn to="/sell-item" variant="primary">Sell Now</WireBtn>
        </div>
      </div>
      <div className="flex items-center gap-6 px-6 py-2 border-t border-gray-100">
        <Link to="/products" className="text-sm text-gray-700 font-medium hover:text-gray-900">Boys</Link>
        <Link to="/products" className="text-sm text-gray-700 font-medium hover:text-gray-900">Girls</Link>
        <Link to="/products" className="text-sm text-gray-700 font-medium hover:text-gray-900">Unisex</Link>
        <Link to="/products" className="text-sm text-gray-700 font-medium hover:text-gray-900">Shoes</Link>
        <Link to="/products" className="text-sm text-gray-700 font-medium hover:text-gray-900">Accessories</Link>
        {!hideAccountLinks && (
          <div className="ml-auto flex items-center gap-4">
            <Link to="/my-purchases" className="text-xs text-gray-500 hover:text-gray-700">My Orders</Link>
            <Link to="/wallet" className="text-xs text-gray-500 hover:text-gray-700">Wallet</Link>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Footer ─── */
export function WireframeFooter() {
  const { isLofi, isHifi } = useWireframeMode();

  if (isLofi) {
    return (
      <div className="border-t border-black bg-white px-6 py-8 mt-auto">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-white border border-black flex items-center justify-center">
                <span className="text-black text-[8px] font-bold">TT</span>
              </div>
              <span className="text-sm font-semibold text-black">TinyThreads</span>
            </div>
            <TextLines lines={2} />
          </div>
          <div>
            <p className="text-xs font-semibold text-black mb-2 uppercase tracking-wider">Shop</p>
            <div className="flex flex-col gap-2">
              <TextBar width="50%" /><TextBar width="40%" /><TextBar width="55%" /><TextBar width="45%" /><TextBar width="65%" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-black mb-2 uppercase tracking-wider">Company</p>
            <div className="flex flex-col gap-2">
              <TextBar width="55%" /><TextBar width="65%" /><TextBar width="75%" /><TextBar width="60%" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-black mb-2 uppercase tracking-wider">Support</p>
            <div className="flex flex-col gap-2">
              <TextBar width="60%" /><TextBar width="75%" /><TextBar width="65%" />
            </div>
          </div>
        </div>
        <div className="border-t border-black mt-6 pt-4 flex items-center justify-between">
          <TextBar width="180px" />
          <div className="flex items-center gap-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-6 h-6 border border-black bg-white">
                <svg viewBox="0 0 24 24" className="w-full h-full"><line x1="0" y1="0" x2="24" y2="24" stroke="black" strokeWidth="1" /><line x1="24" y1="0" x2="0" y2="24" stroke="black" strokeWidth="1" /></svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isHifi) {
    return (
      <div className="px-6 py-8 mt-auto" style={{ borderTop: `1px solid ${DS.border}`, background: DS.bgSoft }}>
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/kUgQoLnnoqrWNYKV.png" alt="TinyThreads" className="w-6 h-6 object-contain" />
              <span className="text-sm font-semibold" style={{ color: DS.text }}>TinyThreads</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: DS.textMuted }}>Give kids' clothes a second life. Buy and sell quality second-hand children's clothing.</p>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: DS.text }}>Shop</p>
            <div className="flex flex-col gap-1.5">
              {["Boys", "Girls", "Unisex", "Shoes", "Accessories"].map(l => (
                <Link key={l} to="/products" className="text-xs" style={{ color: DS.textMuted }}>{l}</Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: DS.text }}>Company</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/about" className="text-xs" style={{ color: DS.textMuted }}>About Us</Link>
              <Link to="/how-it-works" className="text-xs" style={{ color: DS.textMuted }}>How It Works</Link>
              <Link to="/buyer-protection" className="text-xs" style={{ color: DS.textMuted }}>Buyer Protection</Link>
              <span className="text-xs" style={{ color: DS.textMuted }}>Careers</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: DS.text }}>Support</p>
            <div className="flex flex-col gap-1.5">
              <Link to="/help-centre" className="text-xs" style={{ color: DS.textMuted }}>Help Centre</Link>
              <Link to="/terms" className="text-xs" style={{ color: DS.textMuted }}>Terms &amp; Conditions</Link>
              <Link to="/privacy" className="text-xs" style={{ color: DS.textMuted }}>Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 flex items-center justify-between" style={{ borderTop: `1px solid ${DS.border}` }}>
          <span className="text-xs" style={{ color: DS.textLight }}>&copy; 2026 TinyThreads. All rights reserved.</span>
          <div className="flex items-center gap-5">
            {/* Facebook */}
            <div className="flex items-center justify-center" style={{ width: 22, height: 22 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" fill="#1877F2" />
                <path d="M16.671 15.47L17.203 12h-3.328V9.75c0-.95.465-1.875 1.956-1.875h1.513V4.922s-1.374-.234-2.686-.234c-2.741 0-4.533 1.66-4.533 4.668V12H7.078v3.47h3.047v8.385a12.09 12.09 0 0 0 3.75 0V15.47h2.796z" fill="#fff" />
              </svg>
            </div>
            {/* Instagram */}
            <div className="flex items-center justify-center" style={{ width: 22, height: 22 }}>
              <svg width="22" height="22" viewBox="0.5 0.5 131 131" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <linearGradient id="ig-b">
                    <stop offset="0" stopColor="#3771c8" />
                    <stop stopColor="#3771c8" offset=".128" />
                    <stop offset="1" stopColor="#60f" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="ig-a">
                    <stop offset="0" stopColor="#fd5" />
                    <stop offset=".1" stopColor="#fd5" />
                    <stop offset=".5" stopColor="#ff543e" />
                    <stop offset="1" stopColor="#c837ab" />
                  </linearGradient>
                  <radialGradient id="ig-c" cx="158.429" cy="578.088" r="65" xlinkHref="#ig-a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088" />
                  <radialGradient id="ig-d" cx="147.694" cy="473.455" r="65" xlinkHref="#ig-b" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455" />
                </defs>
                <path fill="url(#ig-c)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)" />
                <path fill="url(#ig-d)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)" />
                <path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z" />
              </svg>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center justify-center" style={{ width: 22, height: 22 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mid-Fi footer
  return (
    <div className="border-t border-gray-200 bg-gray-50 px-6 py-8 mt-auto">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">TT</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">TinyThreads</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">Give kids' clothes a second life. Buy and sell quality second-hand children's clothing.</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wider">Shop</p>
          <div className="flex flex-col gap-1.5">
            {["Boys", "Girls", "Unisex", "Shoes", "Accessories"].map(l => (
              <Link key={l} to="/products" className="text-xs text-gray-500 hover:text-gray-700">{l}</Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wider">Company</p>
          <div className="flex flex-col gap-1.5">
            <Link to="/about" className="text-xs text-gray-500 hover:text-gray-700">About Us</Link>
            <Link to="/how-it-works" className="text-xs text-gray-500 hover:text-gray-700">How It Works</Link>
            <Link to="/buyer-protection" className="text-xs text-gray-500 hover:text-gray-700">Buyer Protection</Link>
            <span className="text-xs text-gray-500 cursor-default">Careers</span>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wider">Support</p>
          <div className="flex flex-col gap-1.5">
            <Link to="/help-centre" className="text-xs text-gray-500 hover:text-gray-700">Help Centre</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-700">Terms &amp; Conditions</Link>
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-700">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 pt-4 flex items-center justify-between">
        <span className="text-xs text-gray-400">&copy; 2026 TinyThreads. All rights reserved.</span>
        <div className="flex items-center gap-3">
          {["Facebook", "Instagram", "LinkedIn"].map(s => (
            <div key={s} className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-[8px] text-gray-500">{s[0]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section Label ─── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  const { isLofi, isHifi } = useWireframeMode();
  if (isLofi) {
    return (
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg font-semibold text-black">{children}</h2>
        <div className="flex-1 h-px bg-black" />
      </div>
    );
  }
  if (isHifi) {
    return (
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg font-semibold" style={{ color: DS.text }}>{children}</h2>
        <div className="flex-1 h-px" style={{ background: DS.border }} />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-3 mb-4">
      <h2 className="text-lg font-semibold text-gray-800">{children}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}

/* ─── Export design system for use in pages ─── */
export { DS, productImages };
