import { WireframeNav, WireframeFooter, ImgPlaceholder, TextBar, TextLines, WireBtn, ProductCard, WireSelect, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";
import { Link } from "wouter";

export default function SellerProfile() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 border-b border-black bg-white">
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 flex-shrink-0 wireframe-circle-placeholder" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-xl font-bold text-black"><TextBar width="160px" /></h1>
                <WireBtn variant="outline">Follow</WireBtn>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < 4 ? "#000" : "none"} stroke="#000" strokeWidth="2">
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
                <TextBar width="90px" /><TextBar width="75px" /><TextBar width="85px" /><TextBar width="90px" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <button className="py-3 text-sm font-medium text-black border-b-2 border-black">Listings (82)</button>
            <Link to="/seller-reviews" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Reviews (47)</Link>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {["All items","Boys","Shoes","Accessories"].map((f, i) => (
                <div key={f} className={`border rounded-full px-3 py-1.5 text-xs cursor-pointer ${i === 0 ? "bg-white text-black border-2 border-black font-semibold" : "border-black text-black"}`}>{f}</div>
              ))}
            </div>
            <WireSelect placeholder="Sort: Newest first" />
          </div>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 18 }).map((_, i) => (<ProductCard key={i} to="/product-detail-buyer" />))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-8 h-8 border border-black rounded flex items-center justify-center text-xs text-black">&larr;</div>
            {[1,2,3,4,5].map((p) => (
              <div key={p} className={`w-8 h-8 border rounded flex items-center justify-center text-xs ${p === 1 ? "bg-white text-black border-2 border-black font-semibold" : "border-black text-black"}`}>{p}</div>
            ))}
            <div className="w-8 h-8 border border-black rounded flex items-center justify-center text-xs text-black">&rarr;</div>
          </div>
          <div className="mt-6 border border-dashed border-black rounded p-5 bg-white flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-black">Bundle &amp; Save</p>
              <TextBar width="250px" />
            </div>
            <WireBtn to="/create-bundle" variant="primary">Create Bundle</WireBtn>
          </div>
        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Detailed (exact original) ── */
  return (
    <div data-hifi={isHifi || undefined} className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-start gap-5">
          {isHifi ? <img src={PROFILE_PHOTOS.p3} alt="Seller" className="w-20 h-20 rounded-full object-cover flex-shrink-0" /> : <div className="w-20 h-20 rounded-full bg-gray-200 border border-gray-300 flex-shrink-0" />}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold text-gray-800">sarah_mum_of_3</h1>
              <WireBtn variant="outline">Follow</WireBtn>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < 4 ? "#9CA3AF" : "none"} stroke="#9CA3AF" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">4.2 (47 reviews)</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-3 max-w-xl">
              Mum of three boys (ages 2, 5, and 8). Regularly clearing out clothes they've outgrown.
              Everything is washed, ironed, and from a smoke-free home. Happy to bundle!
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-400">
              <span>📍 Manchester, UK</span>
              <span>94 items sold</span>
              <span>Joined Jan 2024</span>
              <span>Last active 2h ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <button className="py-3 text-sm font-medium text-gray-800 border-b-2 border-gray-800">Listings (82)</button>
          <Link to="/seller-reviews" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Reviews (47)</Link>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {["All items","Boys","Shoes","Accessories"].map((f, i) => (
              <div key={f} className={`border rounded-full px-3 py-1.5 text-xs cursor-pointer ${i === 0 ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-100"}`}>{f}</div>
            ))}
          </div>
          <WireSelect placeholder="Sort: Newest first" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 18 }).map((_, i) => (<ProductCard key={i} to="/product-detail-buyer" />))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:bg-gray-100">&larr;</div>
          {[1,2,3,4,5].map((p) => (
            <div key={p} className={`w-8 h-8 border rounded flex items-center justify-center text-xs cursor-pointer ${p === 1 ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-100"}`}>{p}</div>
          ))}
          <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:bg-gray-100">&rarr;</div>
        </div>
        <div className="mt-6 border border-dashed border-gray-300 rounded p-5 bg-gray-50 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-700">Bundle &amp; Save</p>
            <p className="text-xs text-gray-400">Buy 3+ items from this seller and get 15% off.</p>
          </div>
          <WireBtn to="/create-bundle" variant="primary">Create Bundle</WireBtn>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
