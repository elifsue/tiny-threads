import { WireframeNav, ImgPlaceholder, WireBtn, TextBar } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function OfferSent() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="flex flex-1 border-b border-black">
          <aside className="w-[300px] border-r border-black flex flex-col">
            <div className="p-4 border-b border-black">
              <h2 className="text-sm font-semibold text-black mb-3">Messages</h2>
              <div className="h-8 border border-black rounded bg-white px-3 flex items-center" />
            </div>
            <div className="flex-1 overflow-y-auto">
              {/* sarah_mum_of_3 → /messages */}
              <Link to="/messages" className="flex items-center gap-3 px-4 py-3 border-b border-black cursor-pointer">
                <div className="w-10 h-10 flex-shrink-0 wireframe-circle-placeholder" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between"><TextBar width="80px" /><TextBar width="30px" /></div>
                  <div className="mt-0.5"><TextBar width="80%" /></div>
                </div>
                <div className="w-2 h-2 rounded-full flex-shrink-0 bg-black" />
              </Link>
              {/* emma_preloved — selected (current screen) */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white border-l-2 border-l-black border-b border-black">
                <div className="w-10 h-10 flex-shrink-0 wireframe-circle-placeholder" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between"><TextBar width="80px" /><TextBar width="30px" /></div>
                  <div className="mt-0.5"><TextBar width="80%" /></div>
                </div>
              </div>
              {/* chloe_vintage → /offer-received */}
              <Link to="/offer-received" className="flex items-center gap-3 px-4 py-3 border-b border-black cursor-pointer">
                <div className="w-10 h-10 flex-shrink-0 wireframe-circle-placeholder" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between"><TextBar width="80px" /><TextBar width="30px" /></div>
                  <div className="mt-0.5"><TextBar width="80%" /></div>
                </div>
                <div className="w-2 h-2 rounded-full flex-shrink-0 bg-black" />
              </Link>
              {/* remaining conversations */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-black">
                  <div className="w-10 h-10 flex-shrink-0 wireframe-circle-placeholder" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between"><TextBar width="80px" /><TextBar width="30px" /></div>
                    <div className="mt-0.5"><TextBar width="80%" /></div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
          <div className="flex-1 flex flex-col">
            {/* Chat header */}
            <div className="px-4 py-3 border-b border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 wireframe-circle-placeholder" />
                <div><TextBar width="120px" /><div className="mt-0.5"><TextBar width="60px" /></div></div>
              </div>
              <WireBtn to="/seller-profile" variant="outline">View Profile</WireBtn>
            </div>

            {/* Chat messages */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {/* Seller message */}
              <div className="flex gap-2 max-w-[70%]">
                <div className="w-7 h-7 flex-shrink-0 mt-1 wireframe-circle-placeholder" />
                <div>
                  <div className="bg-white border border-black rounded-lg rounded-tl-none px-3 py-2">
                    <TextBar width="220px" />
                  </div>
                  <TextBar width="40px" className="mt-1" />
                </div>
              </div>
              {/* User message */}
              <div className="flex gap-2 max-w-[70%] ml-auto flex-row-reverse">
                <div className="w-7 h-7 flex-shrink-0 mt-1 wireframe-circle-placeholder" />
                <div>
                  <div className="bg-white border border-black rounded-lg rounded-tr-none px-3 py-2">
                    <TextBar width="200px" />
                  </div>
                  <div className="text-right"><TextBar width="40px" className="mt-1" /></div>
                </div>
              </div>
              {/* OFFER SENT bubble (from user) */}
              <div className="flex gap-2 ml-auto flex-row-reverse">
                <div className="w-7 h-7 flex-shrink-0 mt-1 wireframe-circle-placeholder" />
                <div className="w-[360px]">
                  <div className="border border-black rounded-lg rounded-tr-none p-4 bg-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-black uppercase tracking-wider">Offer Sent</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-black text-black font-medium ml-auto">Pending</span>
                    </div>
                    {/* Item in offer */}
                    <Link to="/product-detail-buyer" className="flex items-center gap-3 p-3 border border-black rounded mb-3 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                      <ImgPlaceholder className="w-12 h-12 rounded flex-shrink-0" aspectRatio="1/1" />
                      <div className="flex-1 min-w-0">
                        <TextBar width="70%" className="mb-1" />
                        <TextBar width="50%" />
                      </div>
                    </Link>
                    {/* Price comparison */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="border border-black rounded p-2 text-center">
                        <p className="text-[10px] text-black mb-0.5">Listed Price</p>
                        <p className="text-sm font-bold text-black">&pound;12.00</p>
                      </div>
                      <div className="border border-black rounded p-2 text-center">
                        <p className="text-[10px] text-black mb-0.5">Your Offer</p>
                        <p className="text-sm font-bold text-black">&pound;9.00</p>
                      </div>
                    </div>
                    {/* Message */}
                    <div className="border border-black rounded p-2 mb-3">
                      <TextBar width="95%" className="mb-1" />
                      <TextBar width="70%" />
                    </div>
                    {/* Action */}
                    <WireBtn variant="outline" full>Cancel Offer</WireBtn>
                  </div>
                  <div className="text-right"><TextBar width="40px" className="mt-1" /></div>
                </div>
              </div>
            </div>
            {/* Message input */}
            <div className="px-4 py-3 border-t border-black">
              <div className="flex items-center gap-3">
                <button className="w-9 h-9 border border-black rounded flex items-center justify-center"><span className="text-sm text-black">+</span></button>
                <div className="flex-1 h-10 border border-black rounded bg-white px-3 flex items-center" />
                <button className="h-10 px-4 border border-black rounded flex items-center justify-center"><span className="text-sm text-black">Send</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Hi-Fi ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="flex flex-1 border-b border-gray-200">
        <aside className="w-[300px] border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Messages</h2>
            <div className="h-8 border border-gray-300 rounded bg-gray-50 px-3 flex items-center">
              <span className="text-xs text-gray-400">Search conversations...</span>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* sarah_mum_of_3 → /messages */}
            <Link to="/messages" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800 truncate">sarah_mum_of_3</p>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">2m ago</span>
                </div>
                <p className="text-xs text-gray-500 truncate">I can do £7 if you bundle both! That would be £14 for the two with the bundle discount.</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
            </Link>
            {/* emma_preloved — selected (current screen) */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-l-2 border-gray-800">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800 truncate">emma_preloved</p>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">1d ago</span>
                </div>
                <p className="text-xs text-gray-500 truncate">Offer sent: &pound;9.00 for Girls Denim Jacket</p>
              </div>
            </div>
            {/* chloe_vintage → /offer-received */}
            <Link to="/offer-received" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800 truncate">chloe_vintage</p>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">2d ago</span>
                </div>
                <p className="text-xs text-gray-500 truncate">Offer received: £6.00 for Boys Striped T-Shirt</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
            </Link>
            {/* remaining conversations */}
            {[
              { name: "rainy_day_kids", time: "3d ago", msg: "Great, I'll take it. Thanks!" },
              { name: "kidsstyle_uk", time: "4d ago", msg: "Thanks for the quick delivery!" },
              { name: "mum_of_twins", time: "5d ago", msg: "Lovely item, my daughter loves it!" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-700 truncate">{c.name}</p>
                    <span className="text-[10px] text-gray-400">{c.time}</span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{c.msg}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
        <div className="flex-1 flex flex-col">
          {/* Chat header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div>
                <p className="text-sm font-semibold text-gray-700">emma_preloved</p>
                <p className="text-[10px] text-gray-400">Last active 1 day ago</p>
              </div>
            </div>
            <WireBtn to="/seller-profile" variant="outline">View Profile</WireBtn>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            {/* Seller message */}
            <div className="flex gap-2 max-w-[70%]">
              <div className="w-7 h-7 rounded-full bg-gray-200 flex-shrink-0 mt-1" />
              <div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2"><p className="text-sm text-gray-700">Hi there! Yes, the jacket is still available. Let me know if you have any questions.</p></div>
                <p className="text-[10px] text-gray-400 mt-1">Yesterday, 10:15 AM</p>
              </div>
            </div>
            {/* User message */}
            <div className="flex gap-2 max-w-[70%] ml-auto flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0 mt-1" />
              <div>
                <div className="bg-gray-800 rounded-lg rounded-tr-none px-3 py-2"><p className="text-sm text-white">It looks lovely! I&apos;d like to make an offer if that&apos;s okay.</p></div>
                <p className="text-[10px] text-gray-400 mt-1 text-right">Yesterday, 10:22 AM</p>
              </div>
            </div>
            {/* OFFER SENT bubble (from user — right side) */}
            <div className="flex gap-2 ml-auto flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0 mt-1" />
              <div className="w-[360px]">
                <div className="border border-gray-300 rounded-lg rounded-tr-none p-4 bg-white shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Offer Sent</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600 font-medium ml-auto">Pending</span>
                  </div>
                  {/* Item in offer */}
                  <Link to="/product-detail-buyer" className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg mb-3 bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                    <ImgPlaceholder label="Item" className="w-11 h-11 rounded flex-shrink-0" aspectRatio="1/1" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-700">Girls Denim Jacket</p>
                      <p className="text-xs text-gray-400">Next &middot; 5 years / 110 cm &middot; Very Good</p>
                    </div>
                  </Link>
                  {/* Price comparison */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="border border-gray-200 rounded-lg p-2.5 text-center bg-white">
                      <p className="text-[10px] text-gray-400 mb-0.5">Listed Price</p>
                      <p className="text-sm font-bold text-gray-800">&pound;12.00</p>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-2.5 text-center bg-gray-50">
                      <p className="text-[10px] text-gray-500 mb-0.5">Your Offer</p>
                      <p className="text-sm font-bold text-gray-800">&pound;9.00</p>
                    </div>
                  </div>
                  {/* Message */}
                  <div className="border border-gray-200 rounded bg-gray-50 px-3 py-2 mb-3">
                    <p className="text-xs text-gray-600 leading-relaxed">Hi! Would you consider &pound;9.00 for the denim jacket? Happy to buy right away. I&apos;ve been looking for one just like this for my little one.</p>
                  </div>
                  {/* Action */}
                  <WireBtn variant="outline" full>Cancel Offer</WireBtn>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 text-right">Yesterday, 10:23 AM</p>
              </div>
            </div>
          </div>
          {/* Message input */}
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
              </button>
              <div className="flex-1 h-10 border border-gray-300 rounded bg-gray-50 px-3 flex items-center">
                <span className="text-sm text-gray-400">Type a message...</span>
              </div>
              <button className="w-9 h-9 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
