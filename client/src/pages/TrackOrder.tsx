import { WireframeNav, WireframeFooter, ImgPlaceholder, TextBar, WireBtn, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";
import { Link } from "wouter";

const trackingSteps = [
  { label: "Order Placed", date: "5 Apr 2026, 10:14", detail: "Payment confirmed", done: true },
  { label: "Seller Confirmed", date: "5 Apr 2026, 11:30", detail: "Seller is preparing your item", done: true },
  { label: "Shipped", date: "5 Apr 2026, 16:45", detail: "Handed to Royal Mail", done: true },
  { label: "Out for Delivery", date: "8 Apr 2026, 07:15", detail: "With local courier for delivery", done: true, active: true },
  { label: "Delivered", date: "", detail: "", done: false },
];

export default function TrackOrder() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-1">
              <Link to="/my-purchases" className="w-8 h-8 border border-black rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><path d="M15 18l-6-6 6-6" /></svg>
              </Link>
              <h1 className="text-xl font-bold text-black">Track Order</h1>
            </div>
            <TextBar width="200px" className="mb-6" />

            <div className="grid grid-cols-3 gap-6">
              {/* Left Column: Tracking Timeline */}
              <div className="col-span-2">
                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] px-3 py-1 rounded bg-white border-2 border-black text-black font-bold uppercase tracking-wider">Out for Delivery</span>
                  <TextBar width="180px" />
                </div>

                {/* Tracking Timeline */}
                <div className="border border-black rounded p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">Tracking History</h2>
                  <div className="flex flex-col gap-0">
                    {trackingSteps.map((step, i) => (
                      <div key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${step.done ? "bg-black border-black" : "bg-white border-black"}`}>
                            {step.done && !step.active && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                            {step.active && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          {i < trackingSteps.length - 1 && (
                            <div className={`w-px flex-1 ${step.done ? "bg-black" : "bg-black opacity-30"}`} />
                          )}
                        </div>
                        <div className="pb-8">
                          <p className={`text-sm ${step.done ? "font-semibold text-black" : "text-black opacity-50"}`}>{step.label}</p>
                          {step.done && <TextBar width="140px" className="mt-0.5" />}
                          {step.done && step.detail && <TextBar width="180px" className="mt-0.5" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Estimate */}
                <div className="border border-black rounded p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-3">Estimated Delivery</h2>
                  <div>
                    <p className="text-sm font-semibold text-black">Tuesday, 8 April 2026</p>
                    <TextBar width="200px" className="mt-1" />
                  </div>
                </div>
                {/* Shipping Details */}
                <div className="border border-black rounded p-5">
                  <h2 className="text-sm font-semibold text-black mb-3">Shipping Details</h2>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center"><span className="text-black w-28 flex-shrink-0">Carrier</span><TextBar width="100px" /></div>
                    <div className="flex items-center"><span className="text-black w-28 flex-shrink-0">Tracking No.</span><TextBar width="140px" /></div>
                    <div className="flex items-center"><span className="text-black w-28 flex-shrink-0">Method</span><TextBar width="120px" /></div>

                  </div>
                </div>
              </div>

              {/* Right Column: Order Summary + Actions */}
              <div className="col-span-1">
                {/* Order Summary */}
                <div className="border border-black rounded p-4 mb-4 bg-white">
                  <h2 className="text-sm font-semibold text-black mb-3">Order</h2>
                  <ImgPlaceholder className="w-full aspect-square rounded mb-3" />
                  <TextBar width="85%" className="mb-1" />
                  <TextBar width="60%" className="mb-2" />
                  <div className="pt-2 border-t border-black">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs text-black">Total Paid</span>
                      <span className="text-sm font-bold text-black">&pound;11.49</span>
                    </div>
                  </div>
                </div>

                {/* Seller Info */}
                <div className="border border-black rounded p-4 mb-4 bg-white">
                  <h2 className="text-sm font-semibold text-black mb-3">Seller</h2>
                  <Link to="/seller-profile" className="flex items-center gap-3">
                    <div className="w-10 h-10 wireframe-circle-placeholder" />
                    <div className="flex-1">
                      <TextBar width="80%" className="mb-1" />
                      <TextBar width="50%" />
                    </div>
                  </Link>
                </div>

                {/* Delivery Address */}
                <div className="border border-black rounded p-4 mb-4 bg-white">
                  <h2 className="text-sm font-semibold text-black mb-3">Delivery Address</h2>
                  <TextBar width="80%" className="mb-1" />
                  <TextBar width="70%" className="mb-1" />
                  <TextBar width="60%" className="mb-1" />
                  <TextBar width="50%" />
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2">
                  <WireBtn to="/messages" variant="outline" full>Message Seller</WireBtn>
                </div>
              </div>
            </div>
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
      <div className="px-6 py-6 flex-1">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-1">
            <Link to="/my-purchases" className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M15 18l-6-6 6-6" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Track Order</h1>
          </div>
          <p className="text-sm text-gray-400 mb-6">Order #TT-20260405-7823</p>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column: Tracking Timeline */}
            <div className="col-span-2">
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] px-3 py-1 rounded-full bg-gray-200 text-gray-700 font-semibold uppercase tracking-wider">Out for Delivery</span>
                <span className="text-xs text-gray-400">Last updated: 8 Apr 2026, 07:15</span>
              </div>

              {/* Tracking Timeline */}
              <div className="border border-gray-200 rounded-lg p-5 mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-4">Tracking History</h2>
                <div className="flex flex-col gap-0">
                  {trackingSteps.map((step, i) => (
                    <div key={step.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${step.done ? (step.active ? "bg-white border-gray-700" : "bg-gray-700 border-gray-700") : "bg-white border-gray-300"}`}>
                          {step.done && !step.active && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                          {step.active && <div className="w-2 h-2 rounded-full bg-gray-700" />}
                        </div>
                        {i < trackingSteps.length - 1 && (
                          <div className={`w-px flex-1 ${step.done ? "bg-gray-700" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className={`text-sm ${step.done ? "font-semibold text-gray-800" : "text-gray-400"}`}>{step.label}</p>
                        {step.date && <p className="text-xs text-gray-400 mt-0.5">{step.date}</p>}
                        {step.detail && <p className="text-xs text-gray-500 mt-0.5">{step.detail}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Estimate */}
              <div className="border border-gray-200 rounded-lg p-5 mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Estimated Delivery</h2>
                <div>
                  <p className="text-sm font-semibold text-gray-800">Tuesday, 8 April 2026</p>
                  <p className="text-xs text-gray-400 mt-1">Your order will arrive today.</p>
                </div>
              </div>
              {/* Shipping Details */}
              <div className="border border-gray-200 rounded-lg p-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Shipping Details</h2>
                <div className="flex flex-col gap-2.5 text-xs">
                  <div className="flex">
                    <span className="text-gray-500 w-28 flex-shrink-0">Carrier</span>
                    <span className="text-gray-700 font-medium">Royal Mail — 2nd Class</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-28 flex-shrink-0">Tracking No.</span>
                    <span className="text-gray-700 font-medium">RM 2345 6789 0GB</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 w-28 flex-shrink-0">Method</span>
                    <span className="text-gray-700 font-medium">Standard Delivery (2–4 days)</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Order Summary + Actions */}
            <div className="col-span-1">
              {/* Order Summary */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Order</h2>
                <ImgPlaceholder label="Item" className="w-full aspect-square rounded mb-3" />
                <p className="text-sm font-medium text-gray-700 mb-0.5">Boys Striped Cotton T-Shirt</p>
                <p className="text-xs text-gray-400 mb-3">4 years / 104 cm &middot; Very good &middot; Next</p>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-gray-500">Total Paid</span>
                    <span className="text-sm font-bold text-gray-800">&pound;11.49</span>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Seller</h2>
                <div className="flex items-center gap-3">
                  {isHifi ? <img src={PROFILE_PHOTOS.p3} alt="Seller" className="w-10 h-10 rounded-full object-cover flex-shrink-0" /> : <ImgPlaceholder label="" className="w-10 h-10 rounded-full flex-shrink-0" />}
                  <div className="flex-1">
                    <Link to="/seller-profile" className="text-sm font-medium text-gray-700 hover:underline">sarah_mum_of_3</Link>
                    <p className="text-xs text-gray-400">4.2 &#9733; &middot; 94 items sold</p>
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Delivery Address</h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Jane Smith<br />
                  42 Primrose Lane<br />
                  London, SW1A 1AA<br />
                  United Kingdom
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <WireBtn to="/messages" variant="outline" full>Message Seller</WireBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
