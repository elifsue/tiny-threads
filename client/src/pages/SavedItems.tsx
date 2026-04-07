import { WireframeNav, WireframeFooter, ProductCard, SectionLabel, TextBar, WireSelect, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";
import { Link } from "wouter";

const sellerPhotos = [PROFILE_PHOTOS.p4, PROFILE_PHOTOS.p3, PROFILE_PHOTOS.p16, PROFILE_PHOTOS.p15, PROFILE_PHOTOS.p5, PROFILE_PHOTOS.p6, PROFILE_PHOTOS.p14, PROFILE_PHOTOS.p13];

export default function SavedItems() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl font-bold text-black mb-1">Saved Items</h1>
              <TextBar width="80px" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              {["All", "Boys", "Girls", "Shoes", "Accessories"].map((f, i) => (
                <div key={f} className={`border border-black rounded-full px-3 py-1.5 text-xs text-black cursor-pointer ${i === 0 ? "bg-white font-medium border-2" : ""}`}>{f}</div>
              ))}
            </div>
            <WireSelect placeholder="Sort: Recently saved" />
          </div>
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className="relative">
                <ProductCard to="/product-detail-buyer" />
                {i < 2 && (
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-black text-black font-medium">Price dropped</span>
                  </div>
                )}
                {i === 4 && (
                  <div className="absolute top-2 left-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-black text-black font-medium">Sold</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-6 border-t border-black">
          <div className="flex items-center justify-between mb-4">
            <SectionLabel>Sellers You Follow</SectionLabel>
            <Link to="/followings" className="text-sm text-black underline">View all &rarr;</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex-shrink-0 border border-black bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="grid grid-cols-8 gap-4 flex-1">
              {[
                { name: "emma_preloved", items: 24 },
                { name: "sarah_mum_of_3", items: 82 },
                { name: "lisa_vintage", items: 31 },
                { name: "claire_mum", items: 8 },
                { name: "rachel_tots", items: 36 },
                { name: "tom_kidswear", items: 45 },
                { name: "mark_reseller", items: 67 },
                { name: "anna_bundles", items: 19 },
              ].map((s) => (
                <Link key={s.name} to="/seller-profile" className="flex flex-col items-center gap-2 border border-black rounded p-3 hover:bg-gray-50">
                  <div className="w-14 h-14 wireframe-circle-placeholder" />
                  <span className="text-xs text-black font-medium text-center">{s.name}</span>
                  <TextBar width="50px" />
                </Link>
              ))}
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

  /* ── Detailed (exact original) ── */
  return (
    <div data-hifi={isHifi || undefined} className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="px-6 py-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-1">Saved Items</h1>
            <p className="text-sm text-gray-400">14 items saved</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            {["All", "Boys", "Girls", "Shoes", "Accessories"].map((f, i) => (
              <div key={f} className={`border rounded-full px-3 py-1.5 text-xs cursor-pointer ${i === 0 ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-100"}`}>{f}</div>
            ))}
          </div>
          <WireSelect placeholder="Sort: Recently saved" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="relative">
              <ProductCard to="/product-detail-buyer" />
              {i < 2 && (
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 font-medium">Price dropped</span>
                </div>
              )}
              {i === 4 && (
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 font-medium">Sold</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <SectionLabel>Sellers You Follow</SectionLabel>
          <Link to="/followings" className="text-sm text-gray-500 hover:text-gray-800 underline">View all &rarr;</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex-shrink-0 border border-gray-200 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <div className="grid grid-cols-8 gap-4 flex-1">
            {[
              { name: "emma_preloved", items: 24 },
              { name: "sarah_mum_of_3", items: 82 },
              { name: "lisa_vintage", items: 31 },
              { name: "claire_mum", items: 8 },
              { name: "rachel_tots", items: 36 },
              { name: "tom_kidswear", items: 45 },
              { name: "mark_reseller", items: 67 },
              { name: "anna_bundles", items: 19 },
            ].map((s, idx) => (
              <Link key={s.name} to="/seller-profile" className="flex flex-col items-center gap-2 border border-gray-200 rounded-lg p-3 hover:shadow-sm hover:border-gray-300 transition-all">
                {isHifi ? <img src={sellerPhotos[idx % sellerPhotos.length]} alt={s.name} className="w-14 h-14 rounded-full object-cover" /> : <div className="w-14 h-14 rounded-full bg-gray-200 border border-gray-300" />}
                <p className="text-xs text-gray-600 font-medium text-center">{s.name}</p>
                <p className="text-[10px] text-gray-400">{s.items} items</p>
              </Link>
            ))}
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
