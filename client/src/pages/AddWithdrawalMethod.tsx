import { WireframeNav, WireframeFooter, WireBtn, WireInput, WireSelect, TextBar, TextLines, SectionLabel, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";
import { BankTransferIcon, PayPalIcon, ApplePayIcon, GooglePayIcon } from "@/components/wireframe/PaymentIcons";

export default function AddWithdrawalMethod() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />

        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <Link to="/wallet" className="w-8 h-8 border border-black rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><path d="M15 18l-6-6 6-6" /></svg>
              </Link>
              <h1 className="text-xl font-bold text-black">Add Withdrawal Method</h1>
            </div>
            <TextBar width="300px" className="mb-6" />

            {/* Method Selection */}
            <SectionLabel>Choose Method</SectionLabel>
            <div className="flex flex-col gap-4 mt-3 mb-5">
              {["Bank Transfer", "PayPal"].map((method, i) => (
                <div key={method} className={`flex items-center gap-4 p-4 border rounded cursor-pointer ${i === 0 ? "border-2 border-black" : "border-black"}`}>
                  <div className="w-10 h-10 border border-black rounded flex items-center justify-center relative flex-shrink-0">
                    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" /><line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" /></svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-black mb-1">{method}</p>
                    <div className="flex flex-col gap-1">
                      <TextBar width="70%" />
                      <TextBar width="40%" />
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center flex-shrink-0">
                    {i === 0 && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                  </div>
                </div>
              ))}
            </div>

            {/* Bank Transfer Form */}
            <SectionLabel>Bank Account Details</SectionLabel>
            <div className="border border-black rounded p-5 bg-white mt-3 mb-5">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-black">Account Holder Name</label>
                  <div className="h-10 border border-black bg-white px-3 flex items-center" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black">Sort Code</label>
                    <div className="h-10 border border-black bg-white px-3 flex items-center">
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-black">Account Number</label>
                    <div className="h-10 border border-black bg-white px-3 flex items-center">
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-black rounded-sm flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-black"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <TextBar width="180px" />
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="border border-black rounded p-4 bg-white mb-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" /><line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black mb-1">Your details are secure</p>
                  <TextLines lines={2} />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <WireBtn to="/wallet" variant="outline">Cancel</WireBtn>
              <WireBtn to="/wallet" variant="primary">Add Withdrawal Method</WireBtn>
            </div>
          </div>
        </div>

        <WireframeFooter />
      </div>
    );
  }

  /* ── Detailed (Mid-Fi) ── */
  return (
    <div data-hifi={isHifi || undefined} className="flex flex-col min-h-[800px]">
      <WireframeNav />

      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Link to="/wallet" className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M15 18l-6-6 6-6" /></svg>
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Add Withdrawal Method</h1>
          </div>
          <p className="text-sm text-gray-400 mb-6">Choose how you'd like to receive your earnings from TinyThreads.</p>

          {/* Method Selection */}
          <SectionLabel>Choose Method</SectionLabel>
          <div className="flex flex-col gap-4 mt-3 mb-5">
            {[
              { method: "Bank Transfer", desc: "Direct transfer to your UK bank account. Takes 1-3 business days.", icon: "bank" },
              { method: "PayPal", desc: "Instant transfer to your PayPal account. Requires a verified PayPal email.", icon: "paypal" },
            ].map((item, i) => (
              <div key={item.method} className={`flex items-center gap-4 p-4 border rounded cursor-pointer ${i === 0 ? "border-gray-800 bg-gray-50" : "border-gray-200 hover:border-gray-400"}`}>
                <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center bg-white flex-shrink-0">
                  {isHifi ? (
                    item.icon === "bank" ? <BankTransferIcon size={18} /> : <PayPalIcon size={18} />
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                      {item.icon === "bank" ? <><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></> : <circle cx="12" cy="12" r="10" />}
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-700 mb-1">{item.method}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${i === 0 ? "border-gray-800" : "border-gray-300"}`}>
                  {i === 0 && <div className="w-2.5 h-2.5 rounded-full bg-gray-800" />}
                </div>
              </div>
            ))}
          </div>

          {/* Bank Transfer Form */}
          <SectionLabel>Bank Account Details</SectionLabel>
          <div className="border border-gray-200 rounded-lg p-5 bg-white mt-3 mb-5">
            <div className="flex flex-col gap-4">
              <WireInput label="Account Holder Name" placeholder="e.g. Jane Smith" />
              <div className="grid grid-cols-2 gap-4">
                <WireInput label="Sort Code" placeholder="XX-XX-XX" />
                <WireInput label="Account Number" placeholder="XXXXXXXX" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center bg-gray-800">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <span className="text-xs text-gray-600">Set as default withdrawal method</span>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center flex-shrink-0 bg-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Your details are secure</p>
                <p className="text-xs text-gray-400 leading-relaxed">All banking information is encrypted and stored securely. We use industry-standard security protocols to protect your financial data. TinyThreads will never share your details with third parties.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <WireBtn to="/wallet" variant="outline">Cancel</WireBtn>
            <WireBtn to="/wallet" variant="primary">Add Withdrawal Method</WireBtn>
          </div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
