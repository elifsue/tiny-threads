import { WireframeNav, WireframeFooter, ImgPlaceholder, WireBtn, TextBar } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function ShippingSelection() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Link to="/checkout" className="w-8 h-8 border border-black rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><path d="M15 18l-6-6 6-6" /></svg>
              </Link>
              <h1 className="text-xl font-bold text-black">Choose Shipping Method</h1>
            </div>
            <TextBar width="300px" className="mb-6" />
            <div className="flex items-center gap-3 p-4 border border-black rounded mb-5 bg-white">
              <ImgPlaceholder className="w-12 h-12 rounded flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <TextBar width="180px" />
                <TextBar width="150px" />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { method: "Royal Mail 2nd Class", price: "£2.99", selected: true },
                { method: "Royal Mail 1st Class", price: "£3.99", selected: false },
                { method: "Evri ParcelShop Drop-off", price: "£2.49", selected: false },
                { method: "Pick-up Point (InPost)", price: "£2.49", selected: false },
                { method: "Local Collection", price: "Free", selected: false },
              ].map((opt, i) => (
                <div key={i} className={`flex items-start gap-4 p-4 border rounded cursor-pointer ${opt.selected ? "border-2 border-black" : "border-black"}`}>
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {opt.selected && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-black">{opt.method}</p>
                      <span className="text-sm font-bold text-black">{opt.price}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <TextBar width="70%" />
                      <TextBar width="40%" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 border border-black rounded overflow-hidden mb-5">
              <div className="p-3 border-b border-black bg-white"><p className="text-xs font-semibold text-black">Nearby Pick-up Points</p></div>
              <ImgPlaceholder className="h-48" />
              <div className="p-3 flex flex-col gap-2">
                {[50, 60, 70].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-black rounded-full flex-shrink-0" />
                    <TextBar width={`${w}%`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <WireBtn to="/checkout" variant="outline" className="flex-1">Back to Checkout</WireBtn>
              <WireBtn to="/checkout" variant="primary" className="flex-1">Confirm Shipping</WireBtn>
            </div>
          </div>
        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Detailed (exact original) ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Link to="/checkout" className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M15 18l-6-6 6-6" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Choose Shipping Method</h1>
          </div>
          <p className="text-sm text-gray-400 mb-6">Select how you'd like to receive your item.</p>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded mb-5 bg-gray-50">
            <ImgPlaceholder label="Item" className="w-12 h-12 rounded flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-gray-700">Boys Striped Cotton T-Shirt</p>
              <p className="text-xs text-gray-400">From: sarah_mum_of_3 · Manchester</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { method: "Royal Mail 2nd Class", price: "£2.99", time: "3-5 working days", desc: "Standard tracked delivery to your door.", selected: true },
              { method: "Royal Mail 1st Class", price: "£3.99", time: "1-2 working days", desc: "Fast tracked delivery to your door.", selected: false },
              { method: "Evri ParcelShop Drop-off", price: "£2.49", time: "3-5 working days", desc: "Collect from your nearest Evri ParcelShop.", selected: false },
              { method: "Pick-up Point (InPost)", price: "£2.49", time: "3-5 working days", desc: "Collect from a 24/7 InPost locker near you.", selected: false },
              { method: "Local Collection", price: "Free", time: "Arrange with seller", desc: "Meet the seller in person to collect the item.", selected: false },
            ].map((opt) => (
              <div key={opt.method} className={`flex items-start gap-4 p-4 border rounded cursor-pointer ${opt.selected ? "border-gray-800 bg-gray-50" : "border-gray-200 hover:border-gray-400"}`}>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${opt.selected ? "border-gray-800" : "border-gray-300"}`}>
                  {opt.selected && <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-gray-700">{opt.method}</p>
                    <span className="text-sm font-semibold text-gray-800">{opt.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{opt.desc}</p>
                  <p className="text-xs text-gray-400">{opt.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 border border-gray-200 rounded overflow-hidden mb-5">
            <div className="p-3 border-b border-gray-200 bg-gray-50">
              <p className="text-xs font-semibold text-gray-600">Nearby Pick-up Points</p>
            </div>
            <ImgPlaceholder label="Map — Pick-up Points" className="h-48" />
            <div className="p-3 flex flex-col gap-2">
              {["InPost Locker — Tesco Express, 0.3 mi", "Evri ParcelShop — Corner News, 0.5 mi", "InPost Locker — Sainsbury's Local, 0.8 mi"].map((loc) => (
                <div key={loc} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">{loc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <WireBtn to="/checkout" variant="secondary" className="flex-1">Back to Checkout</WireBtn>
            <WireBtn to="/checkout" variant="primary" className="flex-1">Confirm Shipping</WireBtn>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
