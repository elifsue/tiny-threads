import { WireframeNav, WireframeFooter, ImgPlaceholder, WireInput, WireBtn, TextBar, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { BankCardIcon, PayPalIcon, ApplePayIcon, GooglePayIcon } from "@/components/wireframe/PaymentIcons";
import { Link } from "wouter";

export default function Checkout() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl font-bold text-black mb-6">Checkout</h1>
            <div className="flex gap-8">
              <div className="flex-1">
                <div className="border border-black rounded p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">Shipping Address</h2>
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-3"><WireInput label="First Name" /><WireInput label="Last Name" /></div>
                    <WireInput label="Address Line 1" />
                    <WireInput label="Address Line 2" />
                    <div className="grid grid-cols-3 gap-3"><WireInput label="City" /><WireInput label="County" /><WireInput label="Postcode" /></div>
                    <WireInput label="Phone Number" />
                  </div>
                </div>
                <div className="border border-black rounded p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">Shipping Method</h2>
                  <div className="flex flex-col gap-3">
                    {[
                      { title: "Royal Mail 2nd Class", price: "£2.99", selected: true },
                      { title: "Royal Mail 1st Class", price: "£3.99", selected: false },
                      { title: "Pick-up Point (InPost)", price: "£2.49", selected: false },
                      { title: "Local Collection", price: "Free", selected: false },
                    ].map((opt, i) => (
                      <div key={i} className={`flex items-center gap-3 p-3 border rounded ${opt.selected ? "border-2 border-black" : "border-black"}`}>
                        <div className={`w-4 h-4 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0`}>
                          {opt.selected && <div className="w-2 h-2 rounded-full bg-black" />}
                        </div>
                        <div className="flex-1"><p className="text-sm font-semibold text-black">{opt.title}</p><div className="mt-0.5"><TextBar width="40%" /></div></div>
                        <span className="text-sm font-semibold text-black">{opt.price}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/shipping-selection" className="text-xs text-black underline mt-3 inline-block">View all shipping options</Link>
                </div>
                <div className="border border-black rounded p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">Payment Method</h2>
                  <div className="flex gap-3 mb-4">
                    {["Card", "PayPal", "Apple Pay", "Google Pay"].map((m, i) => (
                      <div key={m} className={`flex-1 border rounded p-3 text-center text-xs font-medium cursor-pointer ${i === 0 ? "border-2 border-black text-black" : "border-black text-black"}`}>{m}</div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4">
                    <WireInput label="Card Number" />
                    <div className="grid grid-cols-2 gap-3"><WireInput label="Expiry Date" /><WireInput label="CVC" /></div>
                    <WireInput label="Name on Card" />
                  </div>
                </div>
              </div>
              <div className="w-[320px] flex-shrink-0">
                <div className="border border-black rounded p-5 sticky top-6">
                  <h2 className="text-sm font-semibold text-black mb-4">Order Summary</h2>
                  <div className="flex items-center gap-3 pb-4 border-b border-black">
                    <ImgPlaceholder className="w-20 h-20 rounded flex-shrink-0" />
                    <div className="flex-1 flex flex-col gap-1">
                      <TextBar width="85%" />
                      <TextBar width="60%" />
                      <TextBar width="50%" />
                      <span className="text-sm font-semibold text-black mt-1">&pound;8.00</span>
                    </div>
                  </div>
                  <div className="py-4 flex flex-col gap-2 border-b border-black">
                    {["£8.00", "£0.50", "£2.99"].map((v, i) => (
                      <div key={i} className="flex justify-between text-sm"><TextBar width="80px" /><TextBar width="40px" /></div>
                    ))}
                  </div>
                  <div className="py-4 flex justify-between">
                    <span className="text-sm font-semibold text-black">Total</span>
                    <span className="text-lg font-bold text-black">&pound;11.49</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-xs text-black">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    <TextBar width="160px" />
                  </div>
                  <WireBtn to="/order-confirmation" variant="primary" full>Pay &pound;11.49</WireBtn>
                  <div className="flex justify-center mt-3"><TextBar width="200px" /></div>
                </div>
              </div>
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl font-bold text-gray-800 mb-6">Checkout</h1>
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="border border-gray-200 rounded p-5 mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-4">Shipping Address</h2>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <WireInput label="First Name" placeholder="Jane" />
                    <WireInput label="Last Name" placeholder="Smith" />
                  </div>
                  <WireInput label="Address Line 1" placeholder="42 Primrose Lane" />
                  <WireInput label="Address Line 2" placeholder="(optional)" />
                  <div className="grid grid-cols-3 gap-3">
                    <WireInput label="City" placeholder="London" />
                    <WireInput label="County" placeholder="Greater London" />
                    <WireInput label="Postcode" placeholder="SW1A 1AA" />
                  </div>
                  <WireInput label="Phone Number" placeholder="+44 7700 900000" />
                </div>
              </div>
              <div className="border border-gray-200 rounded p-5 mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-4">Shipping Method</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { method: "Royal Mail 2nd Class", price: "\u00A32.99", time: "3-5 working days", selected: true },
                    { method: "Royal Mail 1st Class", price: "\u00A33.99", time: "1-2 working days", selected: false },
                    { method: "Pick-up Point (InPost)", price: "\u00A32.49", time: "3-5 working days", selected: false },
                    { method: "Local Collection", price: "Free", time: "Arrange with seller", selected: false },
                  ].map((opt) => (
                    <div key={opt.method} className={`flex items-center gap-3 p-3 border rounded ${opt.selected ? "border-gray-800 bg-gray-50" : "border-gray-200"}`}>
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${opt.selected ? "border-gray-800" : "border-gray-300"}`}>
                        {opt.selected && <div className="w-2 h-2 rounded-full bg-gray-800" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700">{opt.method}</p>
                        <p className="text-xs text-gray-400">{opt.time}</p>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{opt.price}</span>
                    </div>
                  ))}
                </div>
                <Link to="/shipping-selection" className="text-xs text-gray-500 underline mt-3 inline-block">View all shipping options &rarr;</Link>
              </div>
              <div className="border border-gray-200 rounded p-5 mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-4">Payment Method</h2>
                <div className="flex gap-3 mb-4">
                  {isHifi ? (
                    <>
                      <div className="flex-1 border border-gray-800 bg-gray-50 rounded p-3 flex items-center justify-center cursor-pointer">
                        <BankCardIcon size={20} />
                      </div>
                      <div className="flex-1 border border-gray-200 rounded p-3 flex items-center justify-center cursor-pointer">
                        <PayPalIcon size={20} />
                      </div>
                      <div className="flex-1 border border-gray-200 rounded p-3 flex items-center justify-center cursor-pointer">
                        <ApplePayIcon size={20} />
                      </div>
                      <div className="flex-1 border border-gray-200 rounded p-3 flex items-center justify-center cursor-pointer">
                        <GooglePayIcon size={20} />
                      </div>
                    </>
                  ) : (
                    ["Card", "PayPal", "Apple Pay", "Google Pay"].map((m, i) => (
                      <div key={m} className={`flex-1 border rounded p-3 text-center text-xs font-medium cursor-pointer ${i === 0 ? "border-gray-800 bg-gray-50 text-gray-800" : "border-gray-200 text-gray-400"}`}>{m}</div>
                    ))
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <WireInput label="Card Number" placeholder="1234 5678 9012 3456" />
                  <div className="grid grid-cols-2 gap-3">
                    <WireInput label="Expiry Date" placeholder="MM / YY" />
                    <WireInput label="CVC" placeholder="123" />
                  </div>
                  <WireInput label="Name on Card" placeholder="Jane Smith" />
                </div>
              </div>
            </div>
            <div className="w-[320px] flex-shrink-0">
              <div className="border border-gray-200 rounded p-5 sticky top-6">
                <h2 className="text-sm font-semibold text-gray-700 mb-4">Order Summary</h2>
                <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                  <ImgPlaceholder label="Item" className="w-20 h-20 rounded flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700 mb-1">Boys Striped Cotton T-Shirt</p>
                    <p className="text-xs text-gray-400">4 years / 104 cm &middot; Very good</p>
                    <p className="text-xs text-gray-400">Seller: sarah_mum_of_3</p>
                    <p className="text-sm font-semibold text-gray-800 mt-1">&pound;8.00</p>
                  </div>
                </div>
                <div className="py-4 flex flex-col gap-2 border-b border-gray-100">
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Item price</span><span className="text-gray-700">&pound;8.00</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Buyer Protection fee</span><span className="text-gray-700">&pound;0.50</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-500">Shipping</span><span className="text-gray-700">&pound;2.99</span></div>
                </div>
                <div className="py-4 flex justify-between">
                  <span className="text-sm font-semibold text-gray-800">Total</span>
                  <span className="text-lg font-bold text-gray-800">&pound;11.49</span>
                </div>
                <div className="flex items-center gap-2 mb-4 text-xs text-gray-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  <span>Covered by Buyer Protection.</span>
                </div>
                <WireBtn to="/order-confirmation" variant="primary" full>Pay &pound;11.49</WireBtn>
                <p className="text-[10px] text-gray-400 text-center mt-3 leading-relaxed">By completing this purchase you agree to our <Link to="/terms" className="underline">Terms &amp; Conditions</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
