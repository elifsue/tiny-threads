import { WireframeNav, WireframeFooter, WireInput, WireSelect, WireTextarea, WireBtn, SectionLabel, TextBar, TextLines, ImgPlaceholder, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";

export default function HelpCentre() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-10 bg-white text-center">
          <div className="max-w-[1200px] mx-auto">
            <h1 className="text-2xl font-bold text-black mb-3">How can we help?</h1>
            <div className="max-w-lg mx-auto">
              <div className="h-11 border border-black rounded-full bg-white px-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel>Browse by Topic</SectionLabel>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {["Buying", "Selling", "Shipping", "Account", "Payments", "Safety"].map((cat) => (
                <div key={cat} className="border border-black rounded p-4 cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded bg-white border border-black relative overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40" preserveAspectRatio="none"><line x1="0" y1="0" x2="40" y2="40" stroke="black" strokeWidth="1" /><line x1="40" y1="0" x2="0" y2="40" stroke="black" strokeWidth="1" /></svg>
                    </div>
                    <h3 className="text-sm font-semibold text-black">{cat}</h3>
                  </div>
                  <TextBar width="80%" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 py-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel>Frequently Asked Questions</SectionLabel>
            <div className="flex flex-col gap-2 mt-4 max-w-2xl">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="border border-black rounded bg-white">
                  <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
                    <TextBar width={`${50 + i * 4}%`} />
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black flex-shrink-0"><polyline points="6 9 12 15 18 9" /></svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
          <div className="max-w-[1200px] mx-auto">
            <SectionLabel>Contact Us</SectionLabel>
            <TextBar width="55%" className="mt-1 mb-6" />
            <div className="grid grid-cols-3 gap-6">
              {/* Live Chat — 1/3 width */}
              <div className="border-2 border-black rounded p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">Live Chat</h3>
                    <TextBar width="180px" />
                  </div>
                </div>
                <div className="bg-white rounded p-4 border border-black">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold text-black flex-shrink-0">i</span>
                    <TextBar width="100px" />
                  </div>
                  <TextBar width="75%" className="mb-1" />
                  <TextBar width="75%" className="mb-1" />
                  <TextBar width="75%" />
                </div>
                <div className="flex-1 flex items-center justify-center my-4 overflow-hidden min-h-0">
                  <ImgPlaceholder className="w-full h-full rounded" />
                </div>
                <WireBtn variant="primary" full>Start Live Chat</WireBtn>
              </div>
              {/* Send Us an Email — 2/3 width */}
              <div className="col-span-2 border-2 border-black rounded p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black">Send Us an Email</h3>
                    <TextBar width="200px" />
                  </div>
                </div>
                <div className="bg-white rounded p-4 mb-4 border border-black flex items-center">
                  <TextBar width="70%" />
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                  <WireInput label="Your Email" />
                  <WireSelect label="Topic" />
                  <WireInput label="Order Number" />
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium text-black">Attachments</label>
                      <span className="text-[10px] font-medium text-black border border-black px-1.5 py-0.5 rounded">Optional</span>
                    </div>
                    <div className="border border-dashed border-black rounded h-10 flex items-center justify-center cursor-pointer">
                      <TextBar width="70%" className="mx-auto" />
                    </div>
                  </div>
                </div>
                <WireTextarea label="Your Message" rows={4} />
                <div className="mt-4"><WireBtn variant="primary" full>Send Email</WireBtn></div>
                <div className="mt-3 text-center"><TextBar width="60%" className="mx-auto" /></div>
              </div>
            </div>
            <div className="mt-6 bg-white border border-black rounded p-4 flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center text-xs font-bold text-black flex-shrink-0">i</span>
                <TextBar width="150px" />
              </div>
              <TextLines lines={1} />
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
      <div className="px-6 py-10 bg-white text-center">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">How can we help?</h1>
          <div className="max-w-lg mx-auto">
            <div className="h-11 border border-gray-300 rounded-full bg-white px-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              <span className="text-sm text-gray-400">Search for help articles...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Browse by Topic</SectionLabel>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {[
              { title: "Buying", desc: "How to buy, payments, Buyer Protection", icon: "🛒" },
              { title: "Selling", desc: "Listing items, pricing, shipping labels", icon: "🏷️" },
              { title: "Shipping", desc: "Delivery options, tracking, returns", icon: "📦" },
              { title: "Account", desc: "Profile, settings, notifications", icon: "👤" },
              { title: "Payments", desc: "Payment methods, refunds, payouts", icon: "💳" },
              { title: "Safety", desc: "Reporting, blocked users, scam prevention", icon: "🛡️" },
            ].map((cat) => (
              <div key={cat.title} className="border border-gray-200 rounded p-4 hover:shadow-sm cursor-pointer transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  {isHifi ? (
                    <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-lg">{cat.icon}</div>
                  ) : (
                    <div className="w-10 h-10 rounded bg-gray-100 border border-gray-200 flex items-center justify-center"><div className="w-5 h-5 bg-gray-300 rounded" /></div>
                  )}
                  <h3 className="text-sm font-semibold text-gray-700">{cat.title}</h3>
                </div>
                <p className="text-xs text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <div className="flex flex-col gap-2 mt-4 max-w-2xl">
            {[
              "How does Buyer Protection work?",
              "How do I ship an item I've sold?",
              "What happens if my item doesn't arrive?",
              "How do I get a refund?",
              "Can I cancel an order?",
              "How do I report a listing?",
              "What are the fees for selling?",
              "How do bundle discounts work?",
            ].map((q) => (
              <div key={q} className="border border-gray-200 rounded bg-white">
                <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">{q}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="max-w-[1200px] mx-auto">
          <SectionLabel>Contact Us</SectionLabel>
          <p className="text-sm text-gray-500 mt-1 mb-6">Can't find what you're looking for? Get in touch with our support team.</p>
          <div className="grid grid-cols-3 gap-6">
            {/* Live Chat — 1/3 width */}
            <div className="border-2 border-gray-300 rounded p-6 flex flex-col h-full relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">Live Chat</h3>
                  <p className="text-xs text-gray-400">Chat with a support agent in real time.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center text-[10px] font-bold text-gray-500 flex-shrink-0">i</span>
                  <span className="text-xs font-medium text-gray-600">Currently online</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">Average response time: <span className="font-medium text-gray-600">under 5 minutes</span></p>
                <div className="flex flex-col gap-1.5 text-xs text-gray-500 border-t border-gray-200 pt-3">
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <span>Monday – Friday, 9:00 AM – 6:00 PM GMT</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    <span>Saturday, 10:00 AM – 2:00 PM GMT</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative" style={{ minHeight: '48px' }}>
                {isHifi ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden">
                    <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/oeceZmxKqNZaucjv.png" alt="Support agent" className="rounded" style={{ maxHeight: '100%', width: 'auto', objectFit: 'contain' }} />
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden py-4">
                    <ImgPlaceholder className="w-full h-full rounded" />
                  </div>
                )}
              </div>
              <WireBtn variant="primary" full>Start Live Chat</WireBtn>
            </div>
            {/* Send Us an Email — 2/3 width */}
            <div className="col-span-2 border-2 border-gray-300 rounded p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">Send Us an Email</h3>
                  <p className="text-xs text-gray-400">We'll reply to your inbox within 24 hours.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded p-4 mb-4">
                <p className="text-xs text-gray-400">Typical response time: <span className="font-medium text-gray-600">within 24 hours</span>. Best for non-urgent issues or detailed enquiries.</p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                <WireInput label="Your Email" placeholder="jane@example.com" />
                <WireSelect label="Topic" placeholder="Select a topic..." />
                <WireInput label="Order Number (if applicable)" placeholder="TT-XXXXXXXX-XXXX" />
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium" style={{ color: isHifi ? '#3D2E27' : '#374151' }}>Attachments</label>
                    <span className="text-[10px] font-medium border px-1.5 py-0.5 rounded" style={{ color: isHifi ? '#3D2E27' : '#9ca3af', borderColor: isHifi ? '#D4C8BE' : '#d1d5db' }}>Optional</span>
                  </div>
                  <div className="border border-dashed border-gray-300 rounded h-10 flex items-center justify-center cursor-pointer hover:border-gray-400">
                    <p className="text-[10px] text-gray-400">Drag & drop or click to attach files (PNG, JPG, PDF · max 5MB)</p>
                  </div>
                </div>
              </div>
              <WireTextarea label="Your Message" placeholder="Describe your issue in detail..." rows={4} />
              <div className="mt-4"><WireBtn variant="primary" full>Send Email</WireBtn></div>
              <div className="mt-3 text-center">
                <p className="text-[10px] text-gray-400">Or email us directly at <span className="font-medium text-gray-600">support@tinythreads.com</span></p>
              </div>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold text-gray-400 flex-shrink-0">i</span>
              <p className="text-xs text-gray-600 font-medium">Outside of live chat hours?</p>
            </div>
            <p className="text-xs text-gray-400">Send us an email and we'll get back to you on the next working day. You can also check our FAQ section above — most common questions are answered there.</p>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
