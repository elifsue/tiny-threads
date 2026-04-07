import { WireframeNav, WireframeFooter, ImgPlaceholder, TextBar, WireBtn, TextLines, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function DisputeRequest() {
  const { isLofi, isHifi } = useWireframeMode();

  const reasons = [
    "Item not received",
    "Item not as described",
    "Item damaged in transit",
    "Wrong item sent",
    "Item is counterfeit",
    "Other",
  ];

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-1">
              <Link to="/my-purchases" className="w-8 h-8 border border-black rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><path d="M15 18l-6-6 6-6" /></svg>
              </Link>
              <h1 className="text-xl font-bold text-black">Submit a Dispute</h1>
            </div>
            <TextBar width="260px" className="mb-6" />

            {/* Order Summary */}
            <div className="border border-black rounded p-4 mb-5 bg-white">
              <h2 className="text-sm font-semibold text-black mb-3">Order Details</h2>
              <div className="flex items-center gap-3">
                <ImgPlaceholder className="w-14 h-14 rounded flex-shrink-0" />
                <div className="flex-1 flex flex-col gap-1">
                  <TextBar width="180px" />
                  <TextBar width="140px" />
                  <TextBar width="80px" />
                </div>
                <span className="text-sm font-semibold text-black flex-shrink-0">&pound;8.00</span>
              </div>
            </div>

            {/* Reason Selection */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Reason for Dispute</h2>
              <div className="flex flex-col gap-3">
                {["160px", "180px", "190px", "140px", "150px", "80px"].map((w, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <div className={`w-4 h-4 rounded-full border border-black flex items-center justify-center ${i === 1 ? "bg-black" : "bg-white"}`}>
                      {i === 1 && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <TextBar width={w} />
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-3">Describe the Issue</h2>
              <div className="border border-black rounded bg-white h-28" />
            </div>

            {/* Photo Evidence */}
            <div className="border border-black rounded p-5 mb-5">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-sm font-semibold text-black">Upload Evidence</h2>
                <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5 rounded">Recommended</span>
              </div>
              <TextBar width="220px" className="mb-3" />
              <div className="flex gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-20 h-20 border-2 border-dashed border-black rounded flex items-center justify-center cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Desired Resolution */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Desired Resolution</h2>
              <div className="flex flex-col gap-3">
                {["120px", "140px", "160px"].map((w, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <div className={`w-4 h-4 rounded-full border border-black flex items-center justify-center ${i === 0 ? "bg-black" : "bg-white"}`}>
                      {i === 0 && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <TextBar width={w} />
                  </label>
                ))}
              </div>
            </div>

            {/* Buyer Protection Info */}
            <div className="border border-black rounded p-4 mb-5 bg-white">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black flex-shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-black mb-1">Covered by Buyer Protection</p>
                  <TextLines lines={2} />
                </div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-3">What Happens Next?</h2>
              <div className="flex flex-col gap-3">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium text-black">{step}</span>
                    </div>
                    <TextBar width={`${70 + step * 5}%`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <WireBtn to="/my-purchases" variant="outline" className="flex-1">Cancel</WireBtn>
              <WireBtn to="/dispute-status" variant="primary" className="flex-1">Submit Dispute</WireBtn>
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
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-1">
            <Link to="/my-purchases" className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M15 18l-6-6 6-6" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Submit a Dispute</h1>
          </div>
          <p className="text-sm text-gray-400 mb-6">Tell us what went wrong and we'll help resolve it.</p>

          {/* Order Summary */}
          <div className="border border-gray-200 rounded-lg p-4 mb-5 bg-white">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Order Details</h2>
            <div className="flex items-center gap-3">
              <ImgPlaceholder label="Item" className="w-14 h-14 rounded flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">Boys Striped Cotton T-Shirt</p>
                <p className="text-xs text-gray-400">Order #TT-20260405-7823</p>
                <p className="text-xs text-gray-400">Seller: sarah_mum_of_3</p>
              </div>
              <span className="text-sm font-semibold text-gray-800">&pound;8.00</span>
            </div>
          </div>

          {/* Reason Selection */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Reason for Dispute</h2>
            <div className="flex flex-col gap-3">
              {reasons.map((reason, i) => (
                <label key={reason} className="flex items-center gap-3 cursor-pointer group">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${i === 1 ? "border-gray-700 bg-gray-700" : "border-gray-300 bg-white group-hover:border-gray-400"}`}>
                    {i === 1 && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className={`text-sm ${i === 1 ? "text-gray-800 font-medium" : "text-gray-600"}`}>{reason}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-3">Describe the Issue</h2>
            <div className="border border-gray-300 rounded bg-white">
              <textarea
                className="w-full px-3 py-2.5 text-sm text-gray-600 placeholder:text-gray-400 bg-transparent resize-none outline-none"
                placeholder="Please describe the issue in detail — what did you expect vs. what you received? Include any relevant information that will help us investigate."
                rows={5}
              />
            </div>
            <p className="text-xs text-gray-400 mt-2">Minimum 20 characters. Be as specific as possible.</p>
          </div>

          {/* Photo Evidence */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-sm font-semibold text-gray-700">Upload Evidence</h2>
              <span className="text-[10px] font-medium text-gray-400 border border-gray-300 px-1.5 py-0.5 rounded">Recommended</span>
            </div>
            <p className="text-xs text-gray-400 mb-3">Photos help us resolve disputes faster. Show the issue clearly.</p>
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-20 h-20 border-2 border-dashed border-gray-300 rounded flex items-center justify-center cursor-pointer hover:border-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">Up to 4 photos. JPG, PNG, or HEIC. Max 10MB each.</p>
          </div>

          {/* Desired Resolution */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Desired Resolution</h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "Full refund", desc: "Get a complete refund to your original payment method." },
                { label: "Partial refund", desc: "Negotiate a partial refund while keeping the item." },
                { label: "Return & refund", desc: "Return the item to the seller and receive a full refund." },
              ].map((option, i) => (
                <label key={option.label} className="flex items-start gap-3 cursor-pointer group p-3 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center mt-0.5 ${i === 0 ? "border-gray-700 bg-gray-700" : "border-gray-300 bg-white group-hover:border-gray-400"}`}>
                    {i === 0 && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div className="flex-1">
                    <span className={`text-sm ${i === 0 ? "text-gray-800 font-medium" : "text-gray-600"}`}>{option.label}</span>
                    <p className="text-xs text-gray-400 mt-0.5">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Buyer Protection Info */}
          <div className="border border-gray-200 rounded-lg p-4 mb-5 bg-gray-50">
            <div className="flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500 flex-shrink-0 mt-0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700 mb-1">Covered by Buyer Protection</p>
                <p className="text-xs text-gray-500 leading-relaxed">Your purchase is protected. We'll review your dispute within 48 hours and work with both parties to reach a fair resolution. If the seller doesn't respond within 3 days, we'll automatically rule in your favour.</p>
              </div>
            </div>
          </div>

          {/* Timeline Info */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">What Happens Next?</h2>
            <div className="flex flex-col gap-3">
              {[
                { step: "1", text: "We'll review your dispute and notify the seller within 24 hours." },
                { step: "2", text: "The seller has 3 days to respond with their side of the story." },
                { step: "3", text: "Our team will review all evidence and make a decision." },
                { step: "4", text: "If resolved in your favour, your refund will be processed within 5 working days." },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-medium text-gray-500">{s.step}</span>
                  </div>
                  <p className="text-sm text-gray-500">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <WireBtn to="/my-purchases" variant="secondary" className="flex-1">Cancel</WireBtn>
            <WireBtn to="/dispute-status" variant="primary" className="flex-1">Submit Dispute</WireBtn>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
