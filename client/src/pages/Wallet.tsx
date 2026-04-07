import { WireframeNav, WireframeFooter, WireBtn, TextBar, TextLines, SectionLabel, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";
import { BankTransferIcon, PayPalIcon, ApplePayIcon, GooglePayIcon } from "@/components/wireframe/PaymentIcons";

export default function Wallet() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-black">My Wallet</h1>
              <WireBtn to="/profile" variant="outline">Back to Profile</WireBtn>
            </div>

            {/* Balance Card */}
            <div className="border-2 border-black rounded p-6 bg-white mb-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-black mb-1">Available Balance</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-black">&pound;</span>
                    <TextBar width="120px" className="h-8" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <WireBtn to="/add-withdrawal-method" variant="primary">Withdraw</WireBtn>
                </div>
              </div>
              <div className="flex gap-6 pt-4 border-t border-black">
                <div>
                  <p className="text-xs text-black mb-1">Pending</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-black">&pound;</span>
                    <TextBar width="60px" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black mb-1">Total Earned</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-black">&pound;</span>
                    <TextBar width="70px" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-black mb-1">Total Withdrawn</p>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-black">&pound;</span>
                    <TextBar width="65px" />
                  </div>
                </div>
              </div>
            </div>

            {/* Withdrawal Methods */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <SectionLabel>Withdrawal Methods</SectionLabel>
                <Link to="/add-withdrawal-method" className="text-xs text-black underline font-medium">+ Add Method</Link>
              </div>
              <div className="flex flex-col gap-3">
                {["Bank Account", "PayPal"].map((method, i) => (
                  <div key={method} className="border border-black rounded p-4 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-black rounded flex items-center justify-center relative">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none"><line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" /><line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" /></svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black">{method}</p>
                        <TextBar width="140px" />
                      </div>
                    </div>
                    {i === 0 && <span className="text-[10px] border border-black rounded px-2 py-0.5 text-black">Default</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction History */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <SectionLabel>Transaction History</SectionLabel>
                <TextBar width="100px" />
              </div>
              <div className="flex gap-3 mb-4">
                {["All", "Sales", "Withdrawals", "Refunds"].map((tab, i) => (
                  <div key={tab} className={`border rounded-full px-3 py-1.5 text-xs cursor-pointer ${i === 0 ? "bg-white text-black border-2 border-black font-semibold" : "border-black text-black"}`}>{tab}</div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { type: "Sale", positive: true },
                  { type: "Withdrawal", positive: false },
                  { type: "Sale", positive: true },
                  { type: "Refund", positive: false },
                  { type: "Sale", positive: true },
                  { type: "Sale", positive: true },
                ].map((tx, i) => (
                  <div key={i} className="border border-black rounded p-4 bg-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-black">{tx.positive ? "+" : "−"}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-black">{tx.type}</p>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-black text-black font-medium">{tx.type === "Withdrawal" ? "Completed" : tx.type === "Refund" ? "Processed" : "Received"}</span>
                        </div>
                        <TextBar width="120px" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-black">{tx.positive ? "+" : "−"} &pound;<TextBar width="40px" className="inline-block" /></p>
                      <TextBar width="70px" />
                    </div>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              <div className="flex items-center justify-center gap-1 mt-8">
                <div className="w-8 h-8 border border-black rounded flex items-center justify-center text-xs text-black">&larr;</div>
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className={`w-8 h-8 border rounded flex items-center justify-center text-xs ${n === 1 ? "border-2 border-black bg-white text-black font-semibold" : "border-black text-black"}`}>{n}</div>
                ))}
                <div className="w-8 h-8 border border-black rounded flex items-center justify-center text-xs text-black">&rarr;</div>
              </div>
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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">My Wallet</h1>
            <WireBtn to="/profile" variant="outline">Back to Profile</WireBtn>
          </div>

          {/* Balance Card */}
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm mb-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-gray-400 mb-1">Available Balance</p>
                <p className="text-3xl font-bold text-gray-800">&pound;142.50</p>
              </div>
              <div className="flex gap-2">
                <WireBtn to="/add-withdrawal-method" variant="primary">Withdraw Funds</WireBtn>
              </div>
            </div>
            <div className="flex gap-8 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Pending</p>
                <p className="text-sm font-semibold text-gray-700">&pound;12.00</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Total Earned</p>
                <p className="text-sm font-semibold text-gray-700">&pound;684.50</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Total Withdrawn</p>
                <p className="text-sm font-semibold text-gray-700">&pound;530.00</p>
              </div>
            </div>
          </div>

          {/* Withdrawal Methods */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <SectionLabel>Withdrawal Methods</SectionLabel>
              <Link to="/add-withdrawal-method" className="text-xs text-gray-500 hover:text-gray-600 font-medium underline">+ Add Method</Link>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { method: "Bank Account", detail: "Barclays ••••4821", icon: "bank", isDefault: true },
                { method: "PayPal", detail: "jane@example.com", icon: "paypal", isDefault: false },
              ].map((item) => (
                <div key={item.method} className="border border-gray-200 rounded-lg p-4 bg-white flex items-center justify-between hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center bg-white">
                      {isHifi ? (
                        item.icon === "bank" ? <BankTransferIcon size={18} /> : <PayPalIcon size={18} />
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                          {item.icon === "bank" ? <><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></> : <circle cx="12" cy="12" r="10" />}
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{item.method}</p>
                      <p className="text-xs text-gray-400">{item.detail}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.isDefault && <span className="text-[10px] border border-gray-300 rounded px-2 py-0.5 text-gray-500">Default</span>}
                    <button className="text-xs text-gray-400 hover:text-gray-600">Edit</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <SectionLabel>Transaction History</SectionLabel>
              <span className="text-xs text-gray-400">Last 30 days</span>
            </div>
            <div className="flex gap-3 mb-4">
              {["All", "Sales", "Withdrawals", "Refunds"].map((tab, i) => (
                <div key={tab} className={`border rounded-full px-3 py-1.5 text-xs cursor-pointer ${i === 0 ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-100"}`}>{tab}</div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {[
                { type: "Sale", desc: "Baby Gap Romper Set", amount: "+£12.00", date: "2 Apr 2026", status: "Received", positive: true },
                { type: "Withdrawal", desc: "To Barclays ••••4821", amount: "−£50.00", date: "28 Mar 2026", status: "Completed", positive: false },
                { type: "Sale", desc: "Next Kids Jacket (4 years / 104 cm)", amount: "+£18.50", date: "25 Mar 2026", status: "Received", positive: true },
                { type: "Refund", desc: "Buyer dispute — M&S Dress", amount: "−£8.00", date: "22 Mar 2026", status: "Processed", positive: false },
                { type: "Sale", desc: "Clarks First Shoes (3 years / 98–103 cm)", amount: "+£15.00", date: "20 Mar 2026", status: "Received", positive: true },
                { type: "Sale", desc: "John Lewis Snowsuit 6-9m", amount: "+£22.00", date: "18 Mar 2026", status: "Received", positive: true },
              ].map((tx, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4 bg-white flex items-center justify-between hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 border border-gray-200">
                      <span className="text-xs font-bold text-gray-500">{tx.positive ? "+" : "−"}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-gray-700">{tx.type}</p>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tx.status === "Processed" ? "bg-red-50 text-red-600" : "bg-gray-200 text-gray-600"}`}>{tx.status}</span>
                      </div>
                      <p className="text-xs text-gray-400">{tx.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-700">{tx.amount}</p>
                    <p className="text-xs text-gray-400">{tx.date}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 mt-8">
              <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:bg-gray-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              {[1, 2, 3, 4].map((n) => (
                <button key={n} className={`w-8 h-8 border rounded flex items-center justify-center text-xs ${n === 1 ? "border-gray-800 bg-gray-800 text-white font-medium" : "border-gray-200 text-gray-500 hover:bg-gray-50"}`}>{n}</button>
              ))}
              <button className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:bg-gray-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
