import { WireframeNav, WireframeFooter, WireBtn, TextBar, WireSelect, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";
import { Link } from "wouter";

const followingPhotos = [PROFILE_PHOTOS.p15, PROFILE_PHOTOS.p3, PROFILE_PHOTOS.p16, PROFILE_PHOTOS.p4, PROFILE_PHOTOS.p5, PROFILE_PHOTOS.p6, PROFILE_PHOTOS.p14, PROFILE_PHOTOS.p13, PROFILE_PHOTOS.p2, PROFILE_PHOTOS.p9, PROFILE_PHOTOS.p12, PROFILE_PHOTOS.p7];

const followings = [
  { name: "emma_preloved", items: 24, joined: "Feb 2025" },
  { name: "sarah_mum_of_3", items: 82, joined: "Jan 2024" },
  { name: "lisa_vintage", items: 31, joined: "Apr 2025" },
  { name: "claire_mum", items: 8, joined: "Mar 2025" },
  { name: "rachel_tots", items: 36, joined: "Jan 2025" },
  { name: "tom_kidswear", items: 45, joined: "Nov 2024" },
  { name: "mark_reseller", items: 67, joined: "Dec 2024" },
  { name: "anna_bundles", items: 19, joined: "Jan 2025" },
  { name: "david_deals", items: 53, joined: "Oct 2024" },
  { name: "sophie_kids", items: 12, joined: "Feb 2025" },
  { name: "buyer_jane", items: 0, joined: "Mar 2025" },
  { name: "ben_bargains", items: 14, joined: "Apr 2025" },
];

export default function Followings() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        {/* Profile Header — same as My Profile */}
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
        {/* Tabs — Followings active */}
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <Link to="/profile" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">My Listings (56)</Link>
            <button className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Reviews (23)</button>
            <Link to="/followers" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Followers (16)</Link>
            <button className="py-3 text-sm font-medium text-black border-b-2 border-black">Followings (12)</button>
          </div>
        </div>
        {/* Followings List */}
        <div className="px-6 py-6 flex-1">
          <div className="flex items-center justify-between mb-4">
            <WireSelect placeholder="Sort: Newest first" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {followings.map((f) => (
              <div key={f.name} className="border border-black rounded p-4 flex flex-col items-center text-center">
                <div className="w-16 h-16 wireframe-circle-placeholder mb-3" />
                <Link to="/seller-profile" className="text-sm font-semibold text-black hover:underline mb-1">{f.name}</Link>
                <div className="flex items-center gap-2 mt-2 mb-0.5">
                  <TextBar width="60px" />
                </div>
                <div className="mb-2"><TextBar width="70px" /></div>
                <WireBtn variant="outline">Following</WireBtn>
              </div>
            ))}
          </div>

        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Mid-Fi ── */
  return (
    <div data-hifi={isHifi || undefined} className="flex flex-col min-h-[800px]">
      <WireframeNav />
      {/* Profile Header — same as My Profile */}
      <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-start gap-5">
          <div className="relative">
            {isHifi ? <img src={PROFILE_PHOTOS.p1} alt="My Profile" className="w-20 h-20 rounded-full object-cover" /> : <div className="w-20 h-20 rounded-full bg-gray-200 border border-gray-300" />}
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
      {/* Tabs — Followings active */}
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <Link to="/profile" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">My Listings (56)</Link>
          <button className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Reviews (23)</button>
          <Link to="/followers" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Followers (16)</Link>
          <button className="py-3 text-sm font-medium text-gray-800 border-b-2 border-gray-800">Followings (12)</button>
        </div>
      </div>
      {/* Followings List */}
      <div className="px-6 py-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <WireSelect placeholder="Sort: Newest first" />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {followings.map((f, idx) => (
            <div key={f.name} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center text-center hover:shadow-sm transition-shadow">
              {isHifi ? <img src={followingPhotos[idx % followingPhotos.length]} alt={f.name} className="w-16 h-16 rounded-full object-cover mb-3" /> : <div className="w-16 h-16 rounded-full bg-gray-200 border border-gray-300 mb-3" />}
              <Link to="/seller-profile" className="text-sm font-semibold text-gray-700 hover:underline mb-1">{f.name}</Link>
              <div className="flex items-center gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i < 4 ? "#9CA3AF" : "none"} stroke="#9CA3AF" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-400 mb-3">{f.items} items &middot; Joined {f.joined}</span>
              <WireBtn variant="outline">Following</WireBtn>
            </div>
          ))}
        </div>

      </div>
      <WireframeFooter />
    </div>
  );
}
