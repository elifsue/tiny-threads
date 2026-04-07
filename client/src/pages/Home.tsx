import {
  WireframeNav, WireframeFooter, ImgPlaceholder, ProductCard,
  WireBtn, SectionLabel, TextLines, TextBar,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function Home() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="relative bg-white px-6 py-16">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold text-black mb-3">Give kids' clothes a second life</h1>
            <TextLines lines={2} className="mb-6" />
            <div className="flex gap-3">
              <WireBtn to="/products" variant="primary">Shop Now</WireBtn>
              <WireBtn to="/sell-item" variant="outline">Start Selling</WireBtn>
            </div>
          </div>
          <div className="absolute right-6 top-6 bottom-6 w-[400px]">
            <ImgPlaceholder label="Hero Image" className="h-full" />
          </div>
        </div>
        <div className="px-6 py-8">
          <SectionLabel>Shop by Category</SectionLabel>
          <div className="grid grid-cols-5 gap-4">
            {["Boys","Girls","Unisex","Shoes","Accessories"].map((cat) => (
              <Link key={cat} to="/products" className="block">
                <div className="border border-black h-32 relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="0.5" /><line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.5" /></svg>
                  <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-medium text-black py-1.5">{cat}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-6 pb-6">
          <SectionLabel>Shop by Age / Size</SectionLabel>
          <div className="flex gap-3 flex-wrap">
            {["Newborns / 44 cm","Up to 1 month / 50 cm","1-3 months / 56 cm","3-6 months / 62 cm","6-9 months / 68 cm","9-12 months / 74 cm","12-18 months / 80 cm","18-24 months / 86 cm","2-3 years / 92 cm","3-5 years / 98-110 cm","5-7 years / 110-122 cm","7-10 years / 122-140 cm","10-13 years / 140-158 cm","13-16 years / 158-176 cm"].map((age) => (
              <Link key={age} to="/products" className="block">
                <div className="border border-black rounded-full px-4 py-2 text-xs text-black">{age}</div>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-6 py-6">
          <SectionLabel>Sellers You Follow</SectionLabel>
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
            <SectionLabel>Just Listed</SectionLabel>
            <Link to="/products" className="text-sm text-black underline">View all &rarr;</Link>
          </div>
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
        <div className="px-6 py-8">
          <SectionLabel>Popular Brands</SectionLabel>
          <div className="grid grid-cols-6 gap-4">
            {["Next","M&S","H&M","Zara Kids","John Lewis","Primark"].map((brand) => (
              <Link key={brand} to="/products" className="block">
                <div className="border border-black p-4 text-center h-16 flex items-center justify-center">
                  <span className="text-sm text-black font-medium">{brand}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="px-6 py-8">
          <SectionLabel>How It Works</SectionLabel>
          <div className="grid grid-cols-4 gap-6 mt-4">
            {[
              { step: "1", title: "Snap a photo" },
              { step: "2", title: "Set your price" },
              { step: "3", title: "Sell & ship" },
              { step: "4", title: "Get paid" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-black">{item.step}</span>
                </div>
                <p className="text-sm font-semibold text-black mb-2">{item.title}</p>
                <div className="flex justify-center"><TextBar width="80%" /></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-6 mb-8 border border-black p-6 flex items-center gap-6 bg-white">
          <div className="w-16 h-16 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-black mb-2">Buyer Protection</p>
            <TextLines lines={2} />
          </div>
          <Link to="/buyer-protection"><WireBtn variant="outline" className="ml-auto flex-shrink-0">Learn More</WireBtn></Link>
        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Detailed (exact original) ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="relative bg-gray-100 px-6 py-16">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Give kids' clothes a second life</h1>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Buy and sell quality second-hand children's clothing, shoes, and accessories.
            Save money, reduce waste, and keep little ones looking great.
          </p>
          <div className="flex gap-3">
            <WireBtn to="/products" variant="primary">Shop Now</WireBtn>
            <WireBtn to="/sell-item" variant="outline">Start Selling</WireBtn>
          </div>
        </div>
        <div className="absolute right-6 top-6 bottom-6 w-[400px]">
          <ImgPlaceholder label="Hero Image — Happy Kids" className="h-full rounded" />
        </div>
      </div>
      <div className="px-6 py-8">
        <SectionLabel>Shop by Category</SectionLabel>
        <div className="grid grid-cols-5 gap-4">
          {["Boys","Girls","Unisex","Shoes","Accessories"].map((cat) => (
            <Link key={cat} to="/products" className="block">
              <div className="border border-gray-200 rounded h-32 relative overflow-hidden hover:shadow-sm transition-shadow">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 text-xs">{cat}</div>
                <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-medium text-gray-700 py-1.5">{cat}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-6 pb-6">
        <SectionLabel>Shop by Age / Size</SectionLabel>
        <div className="flex gap-3 flex-wrap">
          {[
            "Newborns / 44 cm","Up to 1 month / 50 cm","1\u20133 months / 56 cm","3\u20136 months / 62 cm",
            "6\u20139 months / 68 cm","9\u201312 months / 74 cm","12\u201318 months / 80 cm","18\u201324 months / 86 cm",
            "2\u20133 years / 92 cm","3\u20135 years / 98\u2013110 cm","5\u20137 years / 110\u2013122 cm","7\u201310 years / 122\u2013140 cm",
            "10\u201313 years / 140\u2013158 cm","13\u201316 years / 158\u2013176 cm",
          ].map((age) => (
            <Link key={age} to="/products" className="block">
              <div className="border border-gray-300 rounded-full px-4 py-2 text-xs text-gray-600 hover:bg-gray-100 transition-colors">{age}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-6 py-6">
        <SectionLabel>Sellers You Follow</SectionLabel>
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
          <SectionLabel>Just Listed</SectionLabel>
          <Link to="/products" className="text-sm text-gray-500 hover:text-gray-800 underline">View all &rarr;</Link>
        </div>
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
      <div className="px-6 py-8">
        <SectionLabel>Popular Brands</SectionLabel>
        <div className="grid grid-cols-6 gap-4">
          {["Next","M&S","H&M","Zara Kids","John Lewis","Primark"].map((brand) => (
            <Link key={brand} to="/products" className="block">
              <div className="border border-gray-200 rounded p-4 text-center hover:shadow-sm transition-shadow h-16 flex items-center justify-center">
                <span className="text-sm text-gray-500 font-medium">{brand}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-6 py-8">
        <SectionLabel>How It Works</SectionLabel>
        <div className="grid grid-cols-4 gap-6 mt-4">
          {[
            { step: "1", title: "Snap a photo", desc: "Take a quick photo of the item your child has outgrown." },
            { step: "2", title: "Set your price", desc: "We'll suggest a fair price based on similar items. You decide." },
            { step: "3", title: "Sell & ship", desc: "Buyer pays securely. Use our prepaid label or arrange local pick-up." },
            { step: "4", title: "Get paid", desc: "Funds are released once the buyer confirms receipt." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-gray-500">{item.step}</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-1">{item.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-6 mb-8 border border-gray-200 rounded p-6 flex items-center gap-6 bg-gray-50">
        <div className="w-16 h-16 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-1">Buyer Protection</p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Every purchase is covered by TinyThreads Buyer Protection. If your item doesn't arrive or doesn't match the description, we've got you covered.
          </p>
        </div>
        <Link to="/buyer-protection"><WireBtn variant="outline" className="ml-auto flex-shrink-0">Learn More</WireBtn></Link>
      </div>
      <WireframeFooter />
    </div>
  );
}
