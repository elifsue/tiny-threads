import { WireframeNav, WireframeFooter, ImgPlaceholder, WireBtn, TextBar, TextLines } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";
import { Link } from "wouter";

const timelineSteps = [
  { label: "Dispute Submitted", date: "5 Apr 2026, 14:32", done: true },
  { label: "Under Review", date: "5 Apr 2026, 15:00", done: true },
  { label: "Seller Notified", date: "5 Apr 2026, 15:05", done: true },
  { label: "Awaiting Seller Response", date: "Due by 8 Apr 2026", done: false, active: true },
  { label: "Decision", date: "", done: false },
  { label: "Resolution", date: "", done: false },
];

const messages = [
  { from: "system", time: "5 Apr, 14:32", text: "Dispute submitted. Our team will review your case within 24 hours." },
  { from: "system", time: "5 Apr, 15:00", text: "Your dispute is now under review. We've notified the seller and they have 3 days to respond." },
  { from: "buyer", time: "5 Apr, 15:10", text: "I've added additional photos showing the damage to the collar area." },
  { from: "seller", time: "6 Apr, 09:22", text: "I'm sorry about this. The item was in good condition when I shipped it. It may have been damaged in transit." },
  { from: "system", time: "6 Apr, 09:25", text: "Seller has responded. Our team is reviewing all evidence provided by both parties." },
];

export default function DisputeStatus() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <Link to="/my-purchases" className="w-8 h-8 border border-black rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><path d="M15 18l-6-6 6-6" /></svg>
              </Link>
              <h1 className="text-xl font-bold text-black">Dispute Status</h1>
            </div>
            <TextBar width="180px" className="mb-6" />

            <div className="grid grid-cols-3 gap-6">
              {/* Left Column: Timeline + Messages */}
              <div className="col-span-2">
                {/* Status Badge */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-[10px] px-3 py-1 rounded bg-white border-2 border-black text-black font-bold uppercase tracking-wider">In Progress</span>
                  <TextBar width="140px" />
                </div>

                {/* Progress Timeline */}
                <div className="border border-black rounded p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">Progress</h2>
                  <div className="flex flex-col gap-0">
                    {timelineSteps.map((step, i) => (
                      <div key={step.label} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${step.done ? "bg-black border-black" : step.active ? "bg-white border-black" : "bg-white border-black"}`}>
                            {step.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                            {step.active && <div className="w-2 h-2 rounded-full bg-black" />}
                          </div>
                          {i < timelineSteps.length - 1 && (
                            <div className={`w-px flex-1 ${step.done ? "bg-black" : "bg-black opacity-30"}`} />
                          )}
                        </div>
                        <div className="pb-8">
                          <p className={`text-sm ${step.done || step.active ? "font-semibold text-black" : "text-black opacity-50"}`}>{step.label}</p>
                          {step.date && <TextBar width="120px" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Communication Thread */}
                <div className="border border-black rounded p-5 mb-5">
                  <h2 className="text-sm font-semibold text-black mb-4">Communication</h2>
                  <div className="flex flex-col gap-4">
                    {messages.map((msg, i) => (
                      <div key={i} className={`p-3 rounded border border-black ${msg.from === "buyer" ? "ml-8 bg-white" : msg.from === "seller" ? "mr-8 bg-white" : "bg-white"}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-black uppercase">
                            {msg.from === "system" ? "TinyThreads" : msg.from === "buyer" ? "You" : "Seller"}
                          </span>
                          <TextBar width="60px" />
                        </div>
                        <TextLines lines={1} />
                      </div>
                    ))}
                  </div>
                  {/* Reply Box */}
                  <div className="mt-4 pt-4 border-t border-black">
                    <div className="flex gap-2">
                      <div className="flex-1 h-10 border border-black rounded bg-white" />
                      <WireBtn variant="primary">Send</WireBtn>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Order + Details */}
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
                      <span className="text-sm font-bold text-black">&pound;12.00</span>
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

                {/* Dispute Details */}
                <div className="border border-black rounded p-4 mb-4 bg-white">
                  <h2 className="text-sm font-semibold text-black mb-3">Dispute Details</h2>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex justify-between"><span className="text-black">Dispute ID</span><TextBar width="80px" /></div>
                    <div className="flex justify-between"><span className="text-black">Reason</span><TextBar width="100px" /></div>
                    <div className="flex justify-between"><span className="text-black">Resolution</span><TextBar width="70px" /></div>
                    <div className="flex justify-between"><span className="text-black">Submitted</span><TextBar width="80px" /></div>
                    <div className="flex justify-between"><span className="text-black">Deadline</span><TextBar width="80px" /></div>
                  </div>
                </div>

                {/* Evidence */}
                <div className="border border-black rounded p-4 mb-4 bg-white">
                  <h2 className="text-sm font-semibold text-black mb-3">Your Evidence</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3].map((i) => (
                      <ImgPlaceholder key={i} className="w-full aspect-square rounded" />
                    ))}
                  </div>
                </div>

                {/* Buyer Protection */}
                <div className="border border-black rounded p-4 mb-4 bg-white">
                  <div className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black flex-shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    <div>
                      <p className="text-xs font-semibold text-black mb-1">Buyer Protection Active</p>
                      <TextLines lines={2} />
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <WireBtn to="/messages" variant="outline" full>Message Seller Directly</WireBtn>
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
          <div className="flex items-center gap-3 mb-2">
            <Link to="/my-purchases" className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M15 18l-6-6 6-6" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Dispute Status</h1>
          </div>
          <p className="text-sm text-gray-400 mb-6">Dispute #DSP-20260330-001</p>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column: Timeline + Messages */}
            <div className="col-span-2">
              {/* Status Badge */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] px-3 py-1 rounded-full bg-gray-200 text-gray-700 font-semibold uppercase tracking-wider">In Progress</span>
                <span className="text-xs text-gray-400">Estimated resolution: 8 Apr 2026</span>
              </div>

              {/* Progress Timeline */}
              <div className="border border-gray-200 rounded-lg p-5 mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-4">Progress</h2>
                <div className="flex flex-col gap-0">
                  {timelineSteps.map((step, i) => (
                    <div key={step.label} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${step.done ? "bg-gray-700 border-gray-700" : step.active ? "bg-white border-gray-700" : "bg-white border-gray-300"}`}>
                          {step.done && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                          {step.active && <div className="w-2 h-2 rounded-full bg-gray-700" />}
                        </div>
                        {i < timelineSteps.length - 1 && (
                          <div className={`w-px flex-1 ${step.done ? "bg-gray-700" : "bg-gray-200"}`} />
                        )}
                      </div>
                      <div className="pb-8">
                        <p className={`text-sm ${step.done || step.active ? "font-semibold text-gray-800" : "text-gray-400"}`}>{step.label}</p>
                        {step.date && <p className="text-xs text-gray-400 mt-0.5">{step.date}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Communication Thread */}
              <div className="border border-gray-200 rounded-lg p-5 mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-4">Communication</h2>
                <div className="flex flex-col gap-3">
                  {messages.map((msg, i) => (
                    <div key={i} className={`p-3 rounded-lg border ${
                      msg.from === "buyer"
                        ? "ml-8 bg-gray-50 border-gray-200"
                        : msg.from === "seller"
                        ? "mr-8 bg-white border-gray-200"
                        : "bg-gray-50 border-gray-100"
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-semibold uppercase tracking-wide ${
                          msg.from === "system" ? "text-gray-500" : msg.from === "buyer" ? "text-gray-700" : "text-gray-600"
                        }`}>
                          {msg.from === "system" ? "TinyThreads" : msg.from === "buyer" ? "You" : "Seller"}
                        </span>
                        <span className="text-[10px] text-gray-400">{msg.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>
                {/* Reply Box */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <input
                        type="text"
                        className="w-full h-10 border border-gray-300 rounded-lg bg-white px-3 text-sm text-gray-600 placeholder:text-gray-400 outline-none"
                        placeholder="Add a message or additional information..."
                      />
                    </div>
                    <WireBtn variant="primary">Send</WireBtn>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-2">Messages are visible to both parties and our support team.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Order + Details */}
            <div className="col-span-1">
              {/* Order Summary */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Order</h2>
                <ImgPlaceholder label="Item" className="w-full aspect-square rounded mb-3" />
                <p className="text-sm font-medium text-gray-700 mb-0.5">Girls Knitted Cardigan</p>
                <p className="text-xs text-gray-400 mb-3">24–36 months / 92 cm &middot; Good &middot; M&amp;S</p>

                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs text-gray-500">Total Paid</span>
                    <span className="text-sm font-bold text-gray-800">&pound;12.00</span>
                  </div>
                </div>
              </div>

              {/* Seller Info */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Seller</h2>
                <div className="flex items-center gap-3">
                  {isHifi ? <img src={PROFILE_PHOTOS.p12} alt="Seller" className="w-10 h-10 rounded-full object-cover flex-shrink-0" /> : <ImgPlaceholder label="" className="w-10 h-10 rounded-full flex-shrink-0" />}
                  <div className="flex-1">
                    <Link to="/seller-profile" className="text-sm font-medium text-gray-700 hover:underline">mum_of_twins</Link>
                    <p className="text-xs text-gray-400">4.4 &#9733; &middot; 32 items sold</p>
                  </div>
                </div>
              </div>

              {/* Dispute Details */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Dispute Details</h2>
                <div className="flex flex-col gap-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Dispute ID</span>
                    <span className="text-gray-700 font-medium">DSP-20260330-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Reason</span>
                    <span className="text-gray-700 font-medium">Not as described</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Resolution</span>
                    <span className="text-gray-700 font-medium">Full refund</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Submitted</span>
                    <span className="text-gray-700 font-medium">5 Apr 2026</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deadline</span>
                    <span className="text-gray-700 font-medium">8 Apr 2026</span>
                  </div>
                </div>
              </div>

              {/* Evidence */}
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white">
                <h2 className="text-sm font-semibold text-gray-700 mb-3">Your Evidence</h2>
                <div className="grid grid-cols-2 gap-2">
                  {["Damage 1", "Damage 2", "Label"].map((label) => (
                    <ImgPlaceholder key={label} label={label} className="w-full aspect-square rounded" />
                  ))}
                </div>
                <button className="text-xs text-gray-500 hover:text-gray-700 underline mt-2">+ Add more evidence</button>
              </div>

              {/* Buyer Protection */}
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex items-start gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 flex-shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-1">Buyer Protection Active</p>
                    <p className="text-[11px] text-gray-500 leading-relaxed">Your purchase is protected. If the seller doesn't respond by 8 Apr, we'll automatically rule in your favour.</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-col gap-2">
                <WireBtn to="/messages" variant="outline" full>Message Seller Directly</WireBtn>
                <button className="text-xs text-gray-400 hover:text-gray-600 underline text-center">Cancel Dispute</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
