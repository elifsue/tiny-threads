import { Link, useLocation } from "wouter";
import { Menu, X, Layout, ChevronRight, Eye, Pencil, Maximize2, HelpCircle, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useWireframeMode } from "@/contexts/WireframeModeContext";

const screens = [
  { path: "/", label: "Home Page" },
  { path: "/signup", label: "Sign Up" },
  { path: "/login", label: "Log In" },
  { path: "/forgot-password", label: "Forgot Password" },
  { path: "/verify-code", label: "Verify Code" },
  { path: "/reset-password", label: "Reset Password" },
  { path: "/products", label: "Products Listing" },
  { path: "/product-detail-buyer", label: "Product Detail (Buyer)" },
  { path: "/product-detail-seller", label: "Product Detail (Seller)" },
  { path: "/seller-profile", label: "Seller Profile" },
  { path: "/seller-reviews", label: "Seller Reviews" },
  { path: "/profile", label: "My Profile" },
  { path: "/followers", label: "Followers" },
  { path: "/followings", label: "Followings" },
  { path: "/edit-profile", label: "Edit Profile" },
  { path: "/change-password", label: "Change Password" },
  { path: "/wallet", label: "Wallet" },
  { path: "/add-withdrawal-method", label: "Add Withdrawal Method" },
  { path: "/checkout", label: "Checkout" },
  { path: "/shipping-selection", label: "Shipping Selection" },
  { path: "/order-confirmation", label: "Order Confirmation" },
  { path: "/my-purchases", label: "My Purchases" },
  { path: "/my-sales", label: "My Sales" },
  { path: "/track-order", label: "Track Order" },
  { path: "/dispute", label: "Dispute Request" },
  { path: "/dispute-status", label: "Dispute Status" },
  { path: "/sell-item", label: "Sell an Item" },
  { path: "/edit-item", label: "Edit Item" },
  { path: "/create-bundle", label: "Create Bundle" },
  { path: "/leave-review", label: "Leave a Review" },
  { path: "/saved-items", label: "Saved Items" },
  { path: "/messages", label: "Messages" },
  { path: "/offer-sent", label: "Offer Sent" },
  { path: "/offer-received", label: "Offer Received" },
  { path: "/notifications", label: "Notifications" },
  { path: "/about", label: "About Us" },
  { path: "/how-it-works", label: "How It Works" },
  { path: "/buyer-protection", label: "Buyer Protection" },
  { path: "/help-centre", label: "Help Centre" },
  { path: "/terms", label: "Terms & Conditions" },
  { path: "/privacy", label: "Privacy Policy" },
];

export default function WireframeShell({ children }: { children: React.ReactNode }) {
  const [location, navigate] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const fsToastPhaseRef = useRef<'idle' | 'fade-in' | 'visible' | 'fade-out'>('idle');
  const [fsToastOpacity, setFsToastOpacity] = useState(0);
  const fsToastTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { mode, setMode, isLofi, isMidfi, isHifi } = useWireframeMode();
  const sidebarNavRef = useRef<HTMLElement>(null);
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const currentScreen = screens.find((s) => s.path === location);
  const currentIndex = screens.findIndex((s) => s.path === location);

  /* ── Auto-scroll sidebar to active item ── */
  useEffect(() => {
    if (activeItemRef.current && sidebarNavRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [location]);
  const prevScreen = currentIndex > 0 ? screens[currentIndex - 1] : null;
  const nextScreen = currentIndex < screens.length - 1 ? screens[currentIndex + 1] : null;

  /* ── Keyboard shortcuts: Escape exits full-screen, Arrow keys navigate screens ── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input/textarea
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      if (e.key === "Escape" && showHelp) {
        setShowHelp(false);
      } else if (e.key === "Escape" && fullScreen) {
        setFullScreen(false);
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        navigate(screens[currentIndex - 1].path);
      } else if (e.key === "ArrowRight" && currentIndex < screens.length - 1) {
        navigate(screens[currentIndex + 1].path);
      } else if (e.key === "t" || e.key === "T") {
        setMode(isLofi ? "midfi" : isMidfi ? "hifi" : "lofi");
      } else if (e.key === "f" || e.key === "F") {
        setFullScreen((prev) => {
          if (!prev) showFsToast();
          return !prev;
        });
      } else if (e.key === "?") {
        setShowHelp((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullScreen, showHelp, currentIndex, navigate, isLofi, isMidfi, isHifi, setMode]);

  /* ── Fullscreen toast helpers ── */
  const clearFsTimers = () => {
    fsToastTimers.current.forEach(clearTimeout);
    fsToastTimers.current = [];
  };
  const showFsToast = () => {
    clearFsTimers();
    fsToastPhaseRef.current = 'idle';
    setFsToastOpacity(0);
    // Use a small delay to ensure the opacity:0 is painted before transitioning to 1
    fsToastTimers.current.push(setTimeout(() => {
      fsToastPhaseRef.current = 'fade-in';
      setFsToastOpacity(1);
    }, 50));
    // After 2s total, start fade-out
    fsToastTimers.current.push(setTimeout(() => {
      fsToastPhaseRef.current = 'fade-out';
      setFsToastOpacity(0);
    }, 2000));
    // After fade-out transition (500ms), mark idle
    fsToastTimers.current.push(setTimeout(() => {
      fsToastPhaseRef.current = 'idle';
    }, 2500));
  };
  useEffect(() => {
    return () => clearFsTimers();
  }, []);

  /* ── Help overlay ── */
  const helpOverlay = showHelp ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50" onClick={() => setShowHelp(false)}>
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Keyboard Shortcuts</h2>
          <button onClick={() => setShowHelp(false)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
        </div>
        <div className="flex flex-col gap-3">
          {[
            { keys: ["←"], desc: "Previous screen" },
            { keys: ["→"], desc: "Next screen" },
            { keys: ["T"], desc: "Cycle Lo-Fi / Mid-Fi / Hi-Fi mode" },
            { keys: ["F"], desc: "Toggle full-screen mode" },
            { keys: ["Esc"], desc: "Exit full-screen or close overlay" },
            { keys: ["?"], desc: "Show / hide this help" },
          ].map(({ keys, desc }) => (
            <div key={desc} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{desc}</span>
              <div className="flex gap-1">
                {keys.map((k) => (
                  <kbd key={k} className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 bg-gray-100 border border-gray-300 rounded text-xs font-mono font-semibold text-gray-700">{k}</kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-400 text-center">Press <kbd className="px-1 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs font-mono">?</kbd> or <kbd className="px-1 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs font-mono">Esc</kbd> to close</p>
      </div>
    </div>
  ) : null;

  /* ── Full-screen view ── */
  if (fullScreen) {
    return (
      <div className="h-screen w-screen overflow-auto bg-white">
        {helpOverlay}
        <div className="fixed top-6 left-0 right-0 z-[9998] flex justify-center pointer-events-none">
          <div
            className="transition-all duration-500 ease-in-out"
            style={{
              opacity: fsToastOpacity,
              transform: `translateY(${fsToastOpacity ? '0' : '-12px'})`,
            }}
          >
            <div className="bg-gray-900/90 text-white text-sm px-5 py-3 rounded-lg shadow-lg flex items-center gap-2">
              Press <kbd className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 bg-white/20 border border-white/30 rounded text-xs font-mono font-semibold">Esc</kbd> or <kbd className="inline-flex items-center justify-center min-w-[24px] h-6 px-1.5 bg-white/20 border border-white/30 rounded text-xs font-mono font-semibold">F</kbd> to exit full screen
            </div>
          </div>
        </div>
        {children}
      </div>
    );
  }

  /* ── Normal shell view ── */
  return (
    <div className="shell-container flex h-screen" style={{ background: "#f5f5f5" }}>
      {helpOverlay}
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-[270px]" : "w-0"
        } transition-all duration-300 ease-in-out flex-shrink-0 overflow-hidden`}
        style={{ background: "#1a1a2e", color: "#e0e0e0" }}
      >
        <div className="w-[270px] h-full flex flex-col">
          {/* Logo area */}
          <div className="px-5 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                <span className="text-white text-sm font-bold">TT</span>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-white tracking-wide">TinyThreads</h2>
                <p className="text-[10px] uppercase tracking-widest" style={{ color: "#8888aa" }}>
                  Prototypes
                </p>
              </div>
            </div>
          </div>

          {/* Screen count badge */}
          <div className="px-5 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <Layout size={12} style={{ color: "#8888aa" }} />
              <p className="text-[11px] font-medium uppercase tracking-wider" style={{ color: "#8888aa" }}>
                Screens
              </p>
              <span
                className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ background: "rgba(99,102,241,0.2)", color: "#a5b4fc" }}
              >
                {screens.length}
              </span>
            </div>
          </div>

          {/* Navigation list */}
          <nav ref={sidebarNavRef} className="flex-1 overflow-y-auto px-3 py-1" style={{ scrollbarWidth: "thin", scrollbarColor: "#333 transparent" }}>
            {screens.map((screen, i) => {
              const isActive = location === screen.path;
              return (
                <Link
                  key={screen.path}
                  to={screen.path}
                  ref={isActive ? activeItemRef : undefined}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-all duration-150 mb-0.5"
                  style={{
                    background: isActive ? "rgba(99,102,241,0.15)" : "transparent",
                    color: isActive ? "#c7d2fe" : "#9999b0",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-semibold flex-shrink-0"
                    style={{
                      background: isActive ? "#6366f1" : "rgba(255,255,255,0.06)",
                      color: isActive ? "#ffffff" : "#7777a0",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="truncate">{screen.label}</span>
                  {isActive && <ChevronRight size={14} className="ml-auto flex-shrink-0" style={{ color: "#6366f1" }} />}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="px-5 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-[10px] text-center" style={{ color: "#5a5a7a" }}>
              {isLofi ? "Lo-fi" : isMidfi ? "Mid-fi" : "Hi-fi"} prototypes &middot; Desktop
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header
          className="h-14 flex items-center px-5 gap-4 flex-shrink-0"
          style={{
            background: "#ffffff",
            borderBottom: "1px solid #e5e5e5",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg transition-colors duration-150"
            style={{ color: "#555", background: "transparent" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="h-6 w-px" style={{ background: "#e0e0e0" }} />

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>
              {currentScreen?.label || "Unknown Screen"}
            </span>
          </div>

          {/* Mode Toggle */}
          <div className="flex items-center gap-1 ml-6" style={{ background: "#f3f4f6", borderRadius: "8px", padding: "3px" }}>
            <button
              onClick={() => setMode("lofi")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200"
              style={{
                background: isLofi ? "#ffffff" : "transparent",
                color: isLofi ? "#6366f1" : "#888",
                boxShadow: isLofi ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              <Pencil size={12} />
              Lo-Fi
            </button>
            <button
              onClick={() => setMode("midfi")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200"
              style={{
                background: isMidfi ? "#ffffff" : "transparent",
                color: isMidfi ? "#6366f1" : "#888",
                boxShadow: isMidfi ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              <Eye size={12} />
              Mid-Fi
            </button>
            <button
              onClick={() => setMode("hifi")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200"
              style={{
                background: isHifi ? "#ffffff" : "transparent",
                color: isHifi ? "#6366f1" : "#888",
                boxShadow: isHifi ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              }}
            >
              <Sparkles size={12} />
              Hi-Fi
            </button>
          </div>

          <div className="ml-auto flex items-center gap-3">
            {/* Full Screen toggle */}
            <button
              onClick={() => {
                setFullScreen(true);
                showFsToast();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
              style={{ color: "#666", background: "#f5f5f5" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#eee")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f5f5f5")}
              title="View wireframe in full screen"
            >
              <Maximize2 size={13} />
              Full Screen
            </button>

            <div className="h-5 w-px" style={{ background: "#e0e0e0" }} />

            {/* Help button */}
            <button
              onClick={() => setShowHelp(true)}
              className="flex items-center justify-center w-7 h-7 rounded-md transition-colors duration-150"
              style={{ color: "#999", background: "transparent" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f0f0f0"; e.currentTarget.style.color = "#666"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#999"; }}
              title="Keyboard shortcuts (?)"
            >
              <HelpCircle size={16} />
            </button>

            <div className="h-5 w-px" style={{ background: "#e0e0e0" }} />

            {/* Prev / Next navigation */}
            {prevScreen && (
              <Link
                to={prevScreen.path}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
                style={{ color: "#666", background: "#f5f5f5" }}
              >
                &larr; Prev
              </Link>
            )}
            <span
              className="text-xs font-medium px-3 py-1.5 rounded-md"
              style={{ background: "#f0f0ff", color: "#6366f1" }}
            >
              {currentIndex + 1} / {screens.length}
            </span>
            {nextScreen && (
              <Link
                to={nextScreen.path}
                className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-colors duration-150"
                style={{ color: "#666", background: "#f5f5f5" }}
              >
                Next &rarr;
              </Link>
            )}
          </div>
        </header>

        {/* Wireframe Canvas */}
        <main className="flex-1 overflow-auto p-6" style={{ background: "#f0f0f0" }}>
          <div
            className="max-w-[1200px] mx-auto bg-white min-h-[800px]"
            style={{
              border: "1px solid #000",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
