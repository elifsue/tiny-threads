import { WireframeNav, WireframeFooter, ImgPlaceholder, ProductCard, WireBtn, SectionLabel, TextLines, TextBar } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function ProductDetailSeller() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-3 border-b border-black">
          <div className="flex items-center gap-2 text-xs text-black">
            <span>Home</span><span>/</span><span>Boys</span><span>/</span><TextBar width="80px" /><span>/</span><TextBar width="90px" />
          </div>
        </div>
        <div className="flex gap-6 px-6 py-6 items-start">
          <div className="flex gap-2" style={{ width: '50%', maxWidth: 'calc(560px + 56px + 8px)' }}>
            <div className="flex flex-col gap-2 flex-shrink-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={`w-[56px] h-[56px] rounded cursor-pointer ${i === 0 ? "ring-2 ring-black" : ""}`}>
                  <ImgPlaceholder className="w-full h-full rounded" aspectRatio="1/1" />
                </div>
              ))}
            </div>
            <div className="flex-1" style={{ maxWidth: '560px', maxHeight: '700px' }}>
              <ImgPlaceholder className="w-full rounded" aspectRatio="4/5" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <TextBar width="80px" className="mb-1" />
              <h1 className="text-xl font-bold text-black mb-2"><TextBar width="70%" /></h1>
              <div className="flex items-center gap-4 mb-3">
                <span className="text-2xl font-bold text-black">&pound;8.00</span>
                <TextBar width="120px" />
              </div>
            </div>
            <div className="border border-black rounded p-4 mb-4">
              <div className="grid grid-cols-2 gap-3">
                {['Condition','Category','Age / Size','Brand','Colour'].map((label) => (
                  <div key={label}>
                    <p className="text-xs text-black">{label}</p>
                    <TextBar width="70%" />
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs font-semibold text-black uppercase tracking-wider mb-2">Description</p>
              <TextLines lines={3} />
            </div>
            {/* Seller action buttons */}
            <div className="flex gap-3 mb-4">
              <WireBtn variant="primary" className="flex-1">Mark as Sold</WireBtn>
              <WireBtn to="/edit-item" variant="outline" className="flex-1">Edit Listing</WireBtn>
            </div>
            <div className="mb-5">
              <WireBtn variant="outline" full>Delete Listing</WireBtn>
            </div>
            {/* Seller section - no Follow button */}
            <div className="border border-black rounded p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 wireframe-circle-placeholder" />
                <div className="flex-1">
                  <Link to="/profile" className="text-sm font-semibold text-black hover:underline"><TextBar width="120px" /></Link>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < 4 ? "#000" : "none"} stroke="#000" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <TextBar width="70px" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TextBar width="80px" /><span className="text-xs text-black">&middot;</span><TextBar width="70px" /><span className="text-xs text-black">&middot;</span><TextBar width="90px" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-black">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <TextBar width="200px" />
            </div>
          </div>
        </div>
        <div className="px-6 py-6">
          <SectionLabel>Similar Items</SectionLabel>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex-shrink-0 border border-black bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="grid grid-cols-6 gap-4 flex-1">
              {Array.from({ length: 6 }).map((_, i) => (<ProductCard key={i} to="/product-detail-buyer" />))}
            </div>
            <button className="w-10 h-10 flex-shrink-0 border border-black bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
        <div className="px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <SectionLabel>Seller's Items</SectionLabel>
            <Link to="/profile" className="text-sm text-black underline">View all &rarr;</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex-shrink-0 border border-black bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="grid grid-cols-6 gap-4 flex-1">
              {Array.from({ length: 6 }).map((_, i) => (<ProductCard key={i} to="/product-detail-seller" />))}
            </div>
            <button className="w-10 h-10 flex-shrink-0 border border-black bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Hi-Fi ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="px-6 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Home</span><span>/</span><span>Boys</span><span>/</span><span>Tops &amp; T-shirts</span><span>/</span><span className="text-gray-600">Product Title</span>
        </div>
      </div>
      <div className="flex gap-6 px-6 py-6 items-start">
        <div className="flex gap-2" style={{ width: '50%', maxWidth: 'calc(560px + 56px + 8px)' }}>
          <div className="flex flex-col gap-2 flex-shrink-0">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={`w-[56px] h-[56px] rounded cursor-pointer ${i === 0 ? "ring-2 ring-gray-800" : ""}`}>
                <ImgPlaceholder key={i} label={`${i + 1}`} className="w-full h-full rounded" aspectRatio="1/1" />
              </div>
            ))}
          </div>
          <div className="flex-1" style={{ maxWidth: '560px', maxHeight: '700px' }}>
            <ImgPlaceholder label="Main Product Photo" className="w-full rounded" aspectRatio="4/5" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Brand Name</p>
            <h1 className="text-xl font-bold text-gray-800 mb-2">Boys Striped Cotton T-Shirt</h1>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-2xl font-bold text-gray-800">&pound;8.00</span>
              <span className="text-sm text-gray-400">&pound;8.50 incl. Buyer Protection</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded p-4 mb-4">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Condition","Very good"],["Category","Boys \u2014 Tops"],
                ["Age / Size","4 years / 104 cm"],
                ["Brand","Next"],["Colour","Blue / White"],
              ].map(([label, val]) => (
                <div key={label}>
                  <p className="text-xs text-gray-400">{label}</p>
                  <p className="text-sm text-gray-700 font-medium">{val}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Description</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lovely striped cotton t-shirt from Next. Worn a handful of times, in very good condition.
              No stains or marks. From a smoke-free, pet-free home. Happy to bundle with other items.
            </p>
          </div>
          {/* Seller action buttons */}
          <div className="flex gap-3 mb-4">
            <WireBtn variant="primary" className="flex-1">Mark as Sold</WireBtn>
            <WireBtn to="/edit-item" variant="outline" className="flex-1">Edit Listing</WireBtn>
          </div>
          <div className="mb-5">
            <WireBtn variant="outline" full>Delete Listing</WireBtn>
          </div>
          {/* Seller section - no Follow button */}
          <div className="border border-gray-200 rounded p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300" />
              <div className="flex-1">
                <Link to="/profile" className="text-sm font-semibold text-gray-700 hover:underline">jane_smith_shop</Link>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < 4 ? "#9CA3AF" : "none"} stroke="#9CA3AF" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">(23 reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>56 items listed</span><span>&middot;</span><span>Joined Mar 2025</span><span>&middot;</span><span>London, UK</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Covered by TinyThreads Buyer Protection.</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-6">
        <SectionLabel>Similar Items</SectionLabel>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex-shrink-0 border border-gray-200 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="grid grid-cols-6 gap-4 flex-1">
            {Array.from({ length: 6 }).map((_, i) => (<ProductCard key={i} to="/product-detail-buyer" />))}
          </div>
          <button className="w-10 h-10 flex-shrink-0 border border-gray-200 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
      <div className="px-6 py-6">
        <div className="flex items-center justify-between mb-4">
          <SectionLabel>Seller's Items</SectionLabel>
          <Link to="/profile" className="text-sm text-gray-500 hover:text-gray-800 underline">View all &rarr;</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex-shrink-0 border border-gray-200 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="grid grid-cols-6 gap-4 flex-1">
            {Array.from({ length: 6 }).map((_, i) => (<ProductCard key={i} to="/product-detail-seller" />))}
          </div>
          <button className="w-10 h-10 flex-shrink-0 border border-gray-200 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
