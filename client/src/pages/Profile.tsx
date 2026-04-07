import { WireframeNav, WireframeFooter, ProductCard, WireBtn, TextBar, WireSelect } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function Profile() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 border-b border-black bg-white">
          <div className="flex items-start gap-5">
            <div className="relative">
              <div className="w-20 h-20 wireframe-circle-placeholder" />
              <button className="absolute bottom-0 right-0 w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </button>
            </div>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-black mb-1"><TextBar width="150px" /></h1>
              <TextBar width="130px" className="mb-2" />
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < 4 ? "#000" : "none"} stroke="#000" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <TextBar width="100px" />
              </div>
              <div className="mb-3 max-w-xl flex flex-col gap-1.5">
                <TextBar width="95%" /><TextBar width="75%" />
              </div>
              <div className="flex items-center gap-4">
                <TextBar width="80px" /><TextBar width="80px" /><TextBar width="80px" />
              </div>
            </div>
            <div className="flex gap-2">
              <WireBtn to="/sell-item" variant="primary">Sell an Item</WireBtn>
              <WireBtn to="/edit-profile" variant="outline">Edit Profile</WireBtn>
            </div>
          </div>
        </div>
        {/* Wallet Balance + Stats — single row */}
        <div className="px-6 py-4 border-b border-black">
          <div className="grid grid-cols-2 gap-4">
            <Link to="/wallet" className="border border-black rounded p-4 flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1 mb-1 h-7">
                <span className="text-lg font-bold text-black">&pound;</span>
                <TextBar width="60px" className="h-5" />
              </div>
              <p className="text-xs text-black">Wallet Balance</p>
            </Link>
            {["Total Sales"].map((label) => (
              <div key={label} className="border border-black rounded p-4 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1 mb-1 h-7">
                  <span className="text-lg font-bold text-black">&pound;</span>
                  <TextBar width="60px" className="h-5" />
                </div>
                <p className="text-xs text-black">{label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Tabs */}
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <button className="py-3 text-sm font-medium text-black border-b-2 border-black">My Listings (56)</button>
            <button className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Reviews (23)</button>
            <Link to="/followers" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Followers (16)</Link>
            <Link to="/followings" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Followings (12)</Link>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {["All items","Boys","Girls","Shoes","Accessories"].map((f, i) => (
                <div key={f} className={`border rounded-full px-3 py-1.5 text-xs cursor-pointer ${i === 0 ? "bg-white text-black border-2 border-black font-semibold" : "border-black text-black"}`}>{f}</div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {["Active","Sold"].map((f) => (
                <div key={f} className="border border-black rounded-full px-3 py-1.5 text-xs cursor-pointer text-black">{f}</div>
              ))}
              <WireSelect placeholder="Sort: Newest first" />
            </div>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="relative">
                <ProductCard showFavorite={false} to="/product-detail-seller" />
                {i >= 15 && (
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-black text-black font-medium">Sold</span>
                  </div>
                )}
                {i < 15 && (
                  <Link to="/edit-item" className="absolute top-2 right-2 w-8 h-8 bg-white border border-black flex items-center justify-center z-10" onClick={(e) => e.stopPropagation()}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 mt-8">
            <div className="w-8 h-8 border border-black rounded flex items-center justify-center text-xs text-black">&larr;</div>
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className={`w-8 h-8 border rounded flex items-center justify-center text-xs ${n === 1 ? "border-2 border-black bg-white text-black font-semibold" : "border-black text-black"}`}>{n}</div>
            ))}
            <div className="w-8 h-8 border border-black rounded flex items-center justify-center text-xs text-black">&rarr;</div>
          </div>
        </div>

        <WireframeFooter />
      </div>
    );
  }

  /* ── Detailed (Hi-Fi) ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-start gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-200 border border-gray-300" />
            <button className="absolute bottom-0 right-0 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-gray-800 mb-1">jane_smith_shop</h1>
            <p className="text-sm text-gray-500 mb-2">jane@example.com</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < 4 ? "#6B7280" : "none"} stroke="#6B7280" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">4.6 (23 reviews)</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xl">
              Selling quality pre-loved kids' clothes from our London home. Love bundling — just ask!
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <span>📍 London, UK</span>
              <span>41 items sold</span>
              <span>Joined Mar 2025</span>
            </div>
          </div>
          <div className="flex gap-2">
            <WireBtn to="/sell-item" variant="primary">Sell an Item</WireBtn>
            <WireBtn to="/edit-profile" variant="outline">Edit Profile</WireBtn>
          </div>
        </div>
      </div>
      {/* Wallet Balance + Stats — single row */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <Link to="/wallet" className="border border-gray-200 rounded p-4 text-center">
            <p className="text-lg font-bold text-gray-800">&pound;142.50</p>
            <p className="text-xs text-gray-400">Wallet Balance</p>
          </Link>
          {[
            { label: "Total Sales", value: "\u00A3684.50" },
          ].map((stat) => (
            <div key={stat.label} className="border border-gray-200 rounded p-4 text-center">
              <p className="text-lg font-bold text-gray-800">{stat.value}</p>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Tabs */}
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <button className="py-3 text-sm font-medium text-gray-800 border-b-2 border-gray-800">My Listings (56)</button>
          <button className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Reviews (23)</button>
          <Link to="/followers" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Followers (16)</Link>
          <Link to="/followings" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Followings (12)</Link>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {["All items","Boys","Girls","Shoes","Accessories"].map((f, i) => (
              <div key={f} className={`border rounded-full px-3 py-1.5 text-xs cursor-pointer ${i === 0 ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-100"}`}>{f}</div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {["Active","Sold"].map((f) => (
              <div key={f} className="border border-gray-300 rounded-full px-3 py-1.5 text-xs cursor-pointer text-gray-500 hover:bg-gray-100">{f}</div>
            ))}
            <WireSelect placeholder="Sort: Newest first" />
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="relative">
              <ProductCard showFavorite={false} to="/product-detail-seller" />
              {i >= 15 && (
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 font-medium">Sold</span>
                </div>
              )}
              {i < 15 && (
                <Link to="/edit-item" className="absolute top-2 right-2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm z-10" onClick={(e) => e.stopPropagation()}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1 mt-8">
          <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:bg-gray-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          {[1, 2, 3, 4].map((n) => (
            <button key={n} className={`w-8 h-8 border rounded flex items-center justify-center text-xs ${n === 1 ? "border-gray-800 bg-gray-800 text-white font-medium" : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}>{n}</button>
          ))}
          <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:bg-gray-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
