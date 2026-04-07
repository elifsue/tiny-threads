import { WireframeNav, WireframeFooter, WireInput, WireSelect, WireTextarea, WireBtn, SectionLabel, TextBar, TextLines } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";

export default function HelpCentre() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-10 bg-white text-center">
          <h1 className="text-2xl font-bold text-black mb-3">How can we help?</h1>
          <div className="max-w-lg mx-auto">
            <div className="h-11 border border-black rounded-full bg-white px-4 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            </div>
          </div>
        </div>
        <div className="px-6 py-8">
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
        <div className="px-6 py-8 bg-white">
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
        <div className="px-6 py-8">
          <SectionLabel>Contact Us</SectionLabel>
          <TextBar width="55%" className="mt-1 mb-6" />
          <div className="grid grid-cols-2 gap-6 max-w-3xl">
            <div className="border-2 border-black rounded p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-black">Live Chat</h3>
                  <TextBar width="180px" />
                </div>
              </div>
              <div className="bg-white rounded p-4 mb-4 border border-black">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold text-black flex-shrink-0">i</span>
                  <TextBar width="100px" />
                </div>
                <TextBar width="70%" />
              </div>
              <TextLines lines={2} className="mb-5" />
              <div className="border border-black rounded p-3 mb-4 bg-white">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-black">
                  <div className="w-6 h-6 wireframe-circle-placeholder" />
                  <TextBar width="120px" />
                </div>
                <div className="bg-white rounded px-3 py-2 mb-2 max-w-[80%] border border-black">
                  <TextBar width="90%" />
                </div>
                <div className="h-8 border border-black rounded px-2 flex items-center">
                  <TextBar width="50%" />
                </div>
              </div>
              <WireBtn variant="primary" full>Start Live Chat</WireBtn>
            </div>
            <div className="border-2 border-black rounded p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-black">Send Us an Email</h3>
                  <TextBar width="200px" />
                </div>
              </div>
              <div className="bg-white rounded p-4 mb-4 border border-black">
                <TextBar width="70%" className="mb-1" /><TextBar width="60%" />
              </div>
              <div className="flex flex-col gap-3 mb-4">
                <WireInput label="Your Email" />
                <WireSelect label="Topic" />
                <WireInput label="Order Number" />
                <WireTextarea label="Your Message" rows={4} />
                <div>
                  <label className="text-xs font-medium text-black mb-1 block">Attachments</label>
                  <div className="border border-dashed border-black rounded p-2.5 text-center cursor-pointer">
                    <TextBar width="70%" className="mx-auto" />
                  </div>
                </div>
              </div>
              <WireBtn variant="primary" full>Send Email</WireBtn>
              <div className="mt-3 text-center"><TextBar width="60%" className="mx-auto" /></div>
            </div>
          </div>
          <div className="max-w-3xl mt-6 bg-white border border-black rounded p-4 flex items-start gap-3">
            <span className="w-5 h-5 rounded-full border border-black flex items-center justify-center text-xs font-bold text-black flex-shrink-0 mt-0.5">i</span>
            <div><TextBar width="150px" className="mb-1" /><TextLines lines={2} /></div>
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
      <div className="px-6 py-10 bg-white text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-3">How can we help?</h1>
        <div className="max-w-lg mx-auto">
          <div className="h-11 border border-gray-300 rounded-full bg-white px-4 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
            <span className="text-sm text-gray-400">Search for help articles...</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-8">
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
                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-lg">{cat.icon}</div>
                <h3 className="text-sm font-semibold text-gray-700">{cat.title}</h3>
              </div>
              <p className="text-xs text-gray-400">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-8 bg-gray-50">
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
              <div className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50">
                <span className="text-sm text-gray-700">{q}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-6 py-8">
        <SectionLabel>Contact Us</SectionLabel>
        <p className="text-sm text-gray-500 mt-1 mb-6">Can't find what you're looking for? Get in touch with our support team.</p>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          <div className="border-2 border-gray-300 rounded p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800">Live Chat</h3>
                <p className="text-xs text-gray-400">Chat with a support agent in real time.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 rounded-full border border-gray-500 flex items-center justify-center text-[10px] font-bold text-gray-500 flex-shrink-0">i</span>
                <span className="text-xs font-medium text-gray-600">Currently online</span>
              </div>
              <p className="text-xs text-gray-400">Average response time: <span className="font-medium text-gray-600">under 5 minutes</span></p>
            </div>
            <div className="flex flex-col gap-2 mb-5 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span>Available Monday – Friday, 9:00 AM – 6:00 PM GMT</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span>Saturday, 10:00 AM – 2:00 PM GMT</span>
              </div>
            </div>
            <div className="border border-gray-200 rounded p-3 mb-4 bg-white">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                <div className="w-6 h-6 rounded-full bg-gray-200" />
                <span className="text-xs font-medium text-gray-600">TinyThreads Support</span>
              </div>
              <div className="bg-gray-100 rounded px-3 py-2 text-xs text-gray-500 mb-2 max-w-[80%]">Hi there! How can I help you today?</div>
              <div className="h-8 border border-gray-200 rounded px-2 flex items-center">
                <span className="text-[10px] text-gray-300">Type your message...</span>
              </div>
            </div>
            <WireBtn variant="primary" full>Start Live Chat</WireBtn>
          </div>
          <div className="border-2 border-gray-300 rounded p-6">
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
              <p className="text-xs text-gray-400">Typical response time: <span className="font-medium text-gray-600">within 24 hours</span></p>
              <p className="text-xs text-gray-400 mt-1">Best for non-urgent issues or detailed enquiries.</p>
            </div>
            <div className="flex flex-col gap-3 mb-4">
              <WireInput label="Your Email" placeholder="jane@example.com" />
              <WireSelect label="Topic" placeholder="Select a topic..." />
              <WireInput label="Order Number (if applicable)" placeholder="TT-XXXXXXXX-XXXX" />
              <WireTextarea label="Your Message" placeholder="Describe your issue in detail..." rows={4} />
              <div>
                <label className="text-xs font-medium text-gray-600 mb-1 block">Attachments (Optional)</label>
                <div className="border border-dashed border-gray-300 rounded p-2.5 text-center cursor-pointer hover:border-gray-400">
                  <p className="text-[10px] text-gray-400">Drag & drop or click to attach files (PNG, JPG, PDF · max 5MB)</p>
                </div>
              </div>
            </div>
            <WireBtn variant="primary" full>Send Email</WireBtn>
            <div className="mt-3 text-center">
              <p className="text-[10px] text-gray-400">Or email us directly at <span className="font-medium text-gray-600">support@tinythreads.com</span></p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl mt-6 bg-gray-50 border border-gray-200 rounded p-4 flex items-start gap-3">
          <span className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-xs font-bold text-gray-400 flex-shrink-0 mt-0.5">i</span>
          <div>
            <p className="text-xs text-gray-600 font-medium mb-1">Outside of live chat hours?</p>
            <p className="text-xs text-gray-400">Send us an email and we'll get back to you on the next working day. You can also check our FAQ section above — most common questions are answered there.</p>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
