import { WireframeNav, ImgPlaceholder, WireBtn, TextBar, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";
import { Link } from "wouter";

const chatListPhotos = [PROFILE_PHOTOS.p10, PROFILE_PHOTOS.p7, PROFILE_PHOTOS.p12];

export default function Chat() {
  const { isLofi, isHifi } = useWireframeMode();

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
              {/* sarah_mum_of_3 — selected (current screen) */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white border-l-2 border-l-black border-b border-black">
                <div className="w-10 h-10 flex-shrink-0 wireframe-circle-placeholder" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between"><TextBar width="80px" /><TextBar width="30px" /></div>
                  <div className="mt-0.5"><TextBar width="80%" /></div>
                </div>
                <div className="w-2 h-2 rounded-full flex-shrink-0 bg-black" />
              </div>
              {/* emma_preloved → /offer-sent */}
              <Link to="/offer-sent" className="flex items-center gap-3 px-4 py-3 border-b border-black cursor-pointer hover:bg-gray-50">
                <div className="w-10 h-10 flex-shrink-0 wireframe-circle-placeholder" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between"><TextBar width="80px" /><TextBar width="30px" /></div>
                  <div className="mt-0.5"><TextBar width="80%" /></div>
                </div>
              </Link>
              {/* chloe_vintage → /offer-received */}
              <Link to="/offer-received" className="flex items-center gap-3 px-4 py-3 border-b border-black cursor-pointer hover:bg-gray-50">
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
            <div className="px-4 py-3 border-b border-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 wireframe-circle-placeholder" />
                <div><TextBar width="120px" /><div className="mt-0.5"><TextBar width="60px" /></div></div>
              </div>
              <WireBtn to="/seller-profile" variant="outline">View Profile</WireBtn>
            </div>

            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
              {[true, false, true, false].map((sent, i) => (
                <div key={i} className={`flex gap-2 max-w-[70%] ${sent ? "ml-auto flex-row-reverse" : ""}`}>
                  <div className="w-7 h-7 flex-shrink-0 mt-1 wireframe-circle-placeholder" />
                  <div>
                    <div className={`bg-white border border-black ${sent ? "rounded-lg rounded-tr-none" : "rounded-lg rounded-tl-none"} px-3 py-2`}>
                      <TextBar width={sent ? "200px" : "220px"} />
                    </div>
                    <div className={sent ? "text-right" : ""}><TextBar width="40px" className="mt-1" /></div>
                  </div>
                </div>
              ))}
            </div>
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

  /* ── Mid-Fi ── */
  return (
    <div data-hifi={isHifi || undefined} className="flex flex-col min-h-[800px]">
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
            {/* sarah_mum_of_3 — selected (current screen) */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-100 border-l-2 border-gray-800">
              {isHifi ? <img src={PROFILE_PHOTOS.p3} alt="sarah_mum_of_3" className="w-10 h-10 rounded-full object-cover flex-shrink-0" /> : <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />}
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-800 truncate">sarah_mum_of_3</p>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">2m ago</span>
                </div>
                <p className="text-xs text-gray-500 truncate">I can do £7 if you bundle both! That would be £14 for the two with the bundle discount.</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0" />
            </div>
            {/* emma_preloved → /offer-sent */}
            <Link to="/offer-sent" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
              {isHifi ? <img src={PROFILE_PHOTOS.p4} alt="emma_preloved" className="w-10 h-10 rounded-full object-cover flex-shrink-0" /> : <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />}
              <div className="flex-1 min-w-0 overflow-hidden">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700 truncate">emma_preloved</p>
                  <span className="text-[10px] text-gray-400 flex-shrink-0">1d ago</span>
                </div>
                <p className="text-xs text-gray-400 truncate">Offer sent: £9.00 for Girls Denim Jacket</p>
              </div>
            </Link>
            {/* chloe_vintage → /offer-received */}
            <Link to="/offer-received" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 border-b border-gray-100 cursor-pointer">
              {isHifi ? <img src={PROFILE_PHOTOS.p13} alt="chloe_vintage" className="w-10 h-10 rounded-full object-cover flex-shrink-0" /> : <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />}
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
                {isHifi ? <img src={chatListPhotos[i % chatListPhotos.length]} alt={c.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" /> : <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />}
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
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {isHifi ? <img src={PROFILE_PHOTOS.p3} alt="sarah_mum_of_3" className="w-8 h-8 rounded-full object-cover" /> : <div className="w-8 h-8 rounded-full bg-gray-200" />}
              <div>
                <p className="text-sm font-semibold text-gray-700">sarah_mum_of_3</p>
                <p className="text-[10px] text-gray-400">Last active 2 minutes ago.</p>
              </div>
            </div>
            <WireBtn to="/seller-profile" variant="outline">View Profile</WireBtn>
          </div>

          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
            <div className="flex gap-2 max-w-[70%] ml-auto flex-row-reverse">
              {isHifi ? <img src={PROFILE_PHOTOS.p1} alt="Me" className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-1" /> : <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0 mt-1" />}
              <div>
                <div className="bg-gray-800 rounded-lg rounded-tr-none px-3 py-2"><p className="text-sm text-white">Hi! Is the Boys Striped Cotton T-Shirt still available?</p></div>
                <p className="text-[10px] text-gray-400 mt-1 text-right">2:34 PM</p>
              </div>
            </div>
            <div className="flex gap-2 max-w-[70%]">
              {isHifi ? <img src={PROFILE_PHOTOS.p3} alt="sarah_mum_of_3" className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-1" /> : <div className="w-7 h-7 rounded-full bg-gray-200 flex-shrink-0 mt-1" />}
              <div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2"><p className="text-sm text-gray-700">Yes it is! It's in great condition. Would you like to buy it?</p></div>
                <p className="text-[10px] text-gray-400 mt-1">2:35 PM</p>
              </div>
            </div>
            <div className="flex gap-2 max-w-[70%] ml-auto flex-row-reverse">
              {isHifi ? <img src={PROFILE_PHOTOS.p1} alt="Me" className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-1" /> : <div className="w-7 h-7 rounded-full bg-gray-300 flex-shrink-0 mt-1" />}
              <div>
                <div className="bg-gray-800 rounded-lg rounded-tr-none px-3 py-2"><p className="text-sm text-white">Would you do &pound;6 for it? I'm also interested in the blue jumper.</p></div>
                <p className="text-[10px] text-gray-400 mt-1 text-right">2:36 PM</p>
              </div>
            </div>
            <div className="flex gap-2 max-w-[70%]">
              {isHifi ? <img src={PROFILE_PHOTOS.p3} alt="sarah_mum_of_3" className="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-1" /> : <div className="w-7 h-7 rounded-full bg-gray-200 flex-shrink-0 mt-1" />}
              <div>
                <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2"><p className="text-sm text-gray-700">I can do &pound;7 if you bundle both! That would be &pound;14 for the two with the bundle discount.</p></div>
                <p className="text-[10px] text-gray-400 mt-1">2:38 PM</p>
              </div>
            </div>
          </div>
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
