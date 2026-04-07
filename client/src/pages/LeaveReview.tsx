import { WireframeNav, WireframeFooter, ImgPlaceholder, WireBtn, WireTextarea, TextBar, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function LeaveReview() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Link to="/my-purchases" className="w-8 h-8 border border-black rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><path d="M15 18l-6-6 6-6" /></svg>
              </Link>
              <h1 className="text-xl font-bold text-black">Leave a Review</h1>
            </div>
            <TextBar width="260px" className="mb-6" />
            <div className="flex items-center gap-3 p-4 border border-black rounded mb-5 bg-white">
              <ImgPlaceholder className="w-14 h-14 rounded flex-shrink-0" />
              <div className="flex-1"><TextBar width="70%" className="mb-1" /><TextBar width="55%" className="mb-1" /><TextBar width="50%" /></div>
            </div>
            <div className="border-2 border-black rounded p-5 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-sm font-semibold text-black">Overall Rating</h2>
              </div>
              <div className="flex items-center gap-2 justify-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="32" height="32" viewBox="0 0 24 24" fill={i < 4 ? "#000" : "none"} stroke="#000" strokeWidth="1.5" className="cursor-pointer">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <div className="flex justify-center"><TextBar width="80px" /></div>
            </div>
            <div className="border border-black rounded p-5 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <label className="text-sm font-medium text-black">Rate Specific Aspects</label>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5 rounded">Optional</span>
              </div>
              <div className="flex flex-col gap-4">
                {["Item as described", "Communication", "Shipping speed", "Packaging"].map((aspect) => (
                  <div key={aspect} className="flex items-center justify-between">
                    <span className="text-sm text-black">{aspect}</span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.5" className="cursor-pointer">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-black rounded p-5 mb-5">
              <div className="flex items-center gap-2 mb-3">
                <label className="text-sm font-medium text-black">Your Review</label>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5 rounded">Optional</span>
              </div>
              <div className="h-28 border border-black bg-white px-3 py-2" />
            </div>
            <div className="border border-black rounded p-5 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <label className="text-sm font-medium text-black">Add Photos</label>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5 rounded">Optional</span>
              </div>
              <TextBar width="200px" className="mb-3" />
              <div className="flex gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="w-20 h-20 border-2 border-dashed border-black rounded flex items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <WireBtn to="/my-purchases" variant="outline" className="flex-1">Cancel</WireBtn>
              <WireBtn to="/my-purchases" variant="primary" className="flex-1">Submit Review</WireBtn>
            </div>
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
        <div className="max-w-lg mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/my-purchases" className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M15 18l-6-6 6-6" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Leave a Review</h1>
          </div>
          <p className="text-sm text-gray-400 mb-6">Share your experience with this purchase.</p>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg mb-5 bg-white">
            <ImgPlaceholder label="Item" className="w-14 h-14 rounded flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">Boys Striped Cotton T-Shirt</p>
              <p className="text-xs text-gray-400">Order #TT-20260405-7823</p>
              <p className="text-xs text-gray-400">Seller: sarah_mum_of_3</p>
            </div>
          </div>
          <div className="border-2 border-gray-300 rounded p-5 mb-5">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-sm font-semibold text-gray-700">Overall Rating</h2>
            </div>
            <div className="flex items-center gap-2 justify-center mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="32" height="32" viewBox="0 0 24 24" fill={i < 4 ? "#9CA3AF" : "none"} stroke="#9CA3AF" strokeWidth="1.5" className="cursor-pointer hover:fill-gray-500">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-gray-400 text-center">4 out of 5 stars</p>
          </div>
          <div className="border border-gray-200 rounded p-5 mb-5">
            <div className="flex items-center gap-2 mb-4">
              <label className="text-sm font-medium" style={{ color: isHifi ? '#3D2E27' : '#374151' }}>Rate Specific Aspects</label>
              <span className="text-[10px] font-medium border px-1.5 py-0.5 rounded" style={{ color: isHifi ? '#3D2E27' : '#9ca3af', borderColor: isHifi ? '#D4C8BE' : '#d1d5db' }}>Optional</span>
            </div>
            <div className="flex flex-col gap-4">
              {["Item as described", "Communication", "Shipping speed", "Packaging"].map((aspect) => (
                <div key={aspect} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{aspect}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="1.5" className="cursor-pointer hover:fill-gray-400">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-gray-200 rounded p-5 mb-5">
            <div className="flex items-center gap-2 mb-3">
              <label className="text-sm font-medium" style={{ color: isHifi ? '#3D2E27' : '#374151' }}>Your Review</label>
              <span className="text-[10px] font-medium border px-1.5 py-0.5 rounded" style={{ color: isHifi ? '#3D2E27' : '#9ca3af', borderColor: isHifi ? '#D4C8BE' : '#d1d5db' }}>Optional</span>
            </div>
            <WireTextarea placeholder="Tell other buyers about your experience — was the item as described? How was the packaging?" rows={5} />
          </div>
          <div className="border border-gray-200 rounded p-5 mb-5">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm font-medium" style={{ color: isHifi ? '#3D2E27' : '#374151' }}>Add Photos</label>
              <span className="text-[10px] font-medium border px-1.5 py-0.5 rounded" style={{ color: isHifi ? '#3D2E27' : '#9ca3af', borderColor: isHifi ? '#D4C8BE' : '#d1d5db' }}>Optional</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">Show other buyers what the item looks like in person.</p>
            <div className="flex gap-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="w-20 h-20 border-2 border-dashed border-gray-300 rounded flex items-center justify-center cursor-pointer hover:border-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <WireBtn to="/my-purchases" variant="secondary" className="flex-1">Cancel</WireBtn>
            <WireBtn to="/my-purchases" variant="primary" className="flex-1">Submit Review</WireBtn>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
