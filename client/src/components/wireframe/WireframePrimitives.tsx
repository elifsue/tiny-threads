import { Link } from "wouter";
import { useWireframeMode } from "@/contexts/WireframeModeContext";

/* ─── Image Placeholder ─── */
export function ImgPlaceholder({
  label = "Image",
  className = "",
  aspectRatio,
}: {
  label?: string;
  className?: string;
  aspectRatio?: string;
}) {
  const { isLofi } = useWireframeMode();
  if (isLofi) {
    return (
      <div
        className={`wireframe-img-placeholder ${className}`}
        data-label={label}
        style={aspectRatio ? { aspectRatio } : undefined}
      />
    );
  }
  // Detailed: gray box with label text
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
  const { isLofi } = useWireframeMode();
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
  // Detailed: show actual text or placeholder text
  return (
    <div className={className}>
      <p className="text-sm text-gray-500 leading-relaxed">
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
  const { isLofi } = useWireframeMode();
  if (isLofi) {
    return <span className={`wireframe-text-bar ${className}`} style={{ width }} />;
  }
  return (
    <span className={`text-sm text-gray-500 ${className}`}>
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
  const { isLofi } = useWireframeMode();
  const base = `px-5 py-2.5 text-sm font-medium border text-center ${full ? "w-full" : ""} ${className}`;

  let variantCls: string;
  if (isLofi) {
    variantCls = "bg-white text-black border-black";
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
    return <Link to={to} className={`block ${cls}`} onClick={onClick}>{children}</Link>;
  }
  return <button className={cls} onClick={onClick}>{children}</button>;
}

/* ─── Input Field ─── */
export function WireInput({
  label,
  placeholder = "",
  type = "text",
  className = "",
}: {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  const { isLofi } = useWireframeMode();
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && <label className="text-sm font-medium text-black">{label}</label>}
        <div className="h-10 border border-black bg-white px-3 flex items-center" />
      </div>
    );
  }
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder || label || ""}
        className="h-10 border border-gray-300 rounded-md bg-white px-3 text-sm text-gray-700 placeholder-gray-400"
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
  const { isLofi } = useWireframeMode();
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
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <textarea
        placeholder={placeholder || label || ""}
        rows={rows}
        className="border border-gray-300 rounded-md bg-white px-3 py-2 text-sm text-gray-700 placeholder-gray-400 resize-none"
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
  const { isLofi } = useWireframeMode();
  if (isLofi) {
    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        {label && <label className="text-sm font-medium text-black">{label}</label>}
        <div className="h-10 border border-black bg-white px-3 flex items-center justify-between">
          <span className="text-xs text-black">{placeholder}</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-black">
            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="h-10 border border-gray-300 rounded-md bg-white px-3 flex items-center justify-between">
        <span className="text-sm text-gray-400">{placeholder}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-400">
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
  const { isLofi } = useWireframeMode();

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
  const { isLofi } = useWireframeMode();

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

  // Detailed nav
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
  const { isLofi } = useWireframeMode();

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

  // Detailed footer
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
          {["Facebook", "Instagram", "Twitter"].map(s => (
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
  const { isLofi } = useWireframeMode();
  if (isLofi) {
    return (
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-lg font-semibold text-black">{children}</h2>
        <div className="flex-1 h-px bg-black" />
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
