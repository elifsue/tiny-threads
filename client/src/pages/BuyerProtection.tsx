import { WireframeNav, WireframeFooter, ImgPlaceholder, WireBtn, SectionLabel, TextBar, TextLines } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";

export default function BuyerProtection() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        {/* Hero */}
        <div className="px-6 py-12 bg-white text-center">
          <h1 className="text-3xl font-bold text-black mb-3">Buyer Protection</h1>
          <div className="flex flex-col items-center gap-1"><TextBar width="70%" /><TextBar width="50%" /></div>
        </div>

        {/* How It Works */}
        <div className="px-6 py-8">
          <SectionLabel>How Buyer Protection Works</SectionLabel>
          <div className="grid grid-cols-3 gap-6 mt-4">
            {[
              { step: 1, title: "Make a purchase" },
              { step: 2, title: "Inspect your item" },
              { step: 3, title: "Confirm or dispute" },
            ].map((item) => (
              <div key={item.step} className="text-center border border-black rounded p-6 bg-white">
                <div className="w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-black">{item.step}</span>
                </div>
                <p className="text-sm font-semibold text-black mb-1">{item.title}</p>
                <div className="flex flex-col items-center gap-1">
                  <TextBar width="90%" />
                  <TextBar width="70%" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's Covered */}
        <div className="px-6 py-8 bg-white">
          <SectionLabel>What's Covered</SectionLabel>
          <div className="grid grid-cols-2 gap-6 mt-4">
            {["Item not received", "Item not as described", "Damaged in transit", "Wrong item sent"].map((item) => (
              <div key={item} className="flex gap-4 items-start border border-black rounded p-5 bg-white">
                <div className="w-8 h-8 rounded bg-white border border-black flex-shrink-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-black">✓</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-black mb-2">{item}</p>
                  <TextLines lines={2} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buyer Protection Fee */}
        <div className="px-6 py-8">
          <SectionLabel>Buyer Protection Fee</SectionLabel>
          <div className="border border-black rounded p-6 bg-white mt-4 max-w-2xl">
            <TextLines lines={2} className="mb-4" />
            <div className="flex items-center gap-4 mb-4">
              <div className="border border-black rounded px-4 py-3 text-center">
                <p className="text-xs text-black mb-1">Item Price</p>
                <TextBar width="60px" />
              </div>
              <span className="text-lg font-bold text-black">+</span>
              <div className="border border-black rounded px-4 py-3 text-center">
                <p className="text-xs text-black mb-1">Protection Fee</p>
                <TextBar width="50px" />
              </div>
              <span className="text-lg font-bold text-black">=</span>
              <div className="border-2 border-black rounded px-4 py-3 text-center">
                <p className="text-xs text-black mb-1">Buyer Pays</p>
                <TextBar width="60px" />
              </div>
            </div>
            <TextLines lines={2} />
          </div>
        </div>

        {/* Refund Process */}
        <div className="px-6 py-8 bg-white">
          <div className="flex gap-8 items-center">
            <div className="flex-1">
              <SectionLabel>Refund Process</SectionLabel>
              <TextLines lines={3} className="mb-3" />
              <TextLines lines={2} />
            </div>
            <ImgPlaceholder className="w-[340px] h-[220px] rounded flex-shrink-0" />
          </div>
        </div>

        {/* FAQ */}
        <div className="px-6 py-8 bg-white">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <div className="flex flex-col gap-2 mt-4 max-w-2xl">
            {[50, 62, 55, 58].map((w, i) => (
              <div key={i} className="border border-black rounded bg-white">
                <div className="flex items-center justify-between px-4 py-3 cursor-pointer">
                  <TextBar width={`${w}%`} />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black flex-shrink-0"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-black mb-2">Shop with confidence</h2>
          <div className="flex justify-center mb-5"><TextBar width="55%" /></div>
          <div className="flex gap-3 justify-center">
            <WireBtn to="/products" variant="primary">Browse Items</WireBtn>
            <WireBtn to="/help-centre" variant="outline">Contact Support</WireBtn>
          </div>
        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Detailed (Hi-Fi) ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav />
      {/* Hero */}
      <div className="px-6 py-12 bg-white text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Buyer Protection</h1>
        <p className="text-gray-500 max-w-xl mx-auto">Every purchase on TinyThreads is backed by our comprehensive Buyer Protection policy. Shop with confidence knowing you're covered.</p>
      </div>

      {/* How It Works */}
      <div className="px-6 py-8">
        <SectionLabel>How Buyer Protection Works</SectionLabel>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            { step: "1", title: "Make a purchase", desc: "Buy any item through TinyThreads' secure checkout. Your payment is held safely until you confirm receipt." },
            { step: "2", title: "Inspect your item", desc: "When your item arrives, check it matches the listing description. You have 48 hours to raise any issues." },
            { step: "3", title: "Confirm or dispute", desc: "Happy with your item? Confirm receipt and the seller gets paid. Not happy? Open a dispute and we'll help." },
          ].map((item) => (
            <div key={item.step} className="text-center border border-gray-200 rounded p-6 bg-white">
              <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center mx-auto mb-3">
                <span className="text-lg font-bold text-gray-500">{item.step}</span>
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-1">{item.title}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Covered */}
      <div className="px-6 py-8 bg-gray-50">
        <SectionLabel>What's Covered</SectionLabel>
        <div className="grid grid-cols-2 gap-6 mt-4">
          {[
            { title: "Item not received", desc: "If your item doesn't arrive within the estimated delivery window, you're entitled to a full refund." },
            { title: "Item not as described", desc: "If the item significantly differs from the listing description, photos, or stated condition, we'll refund you." },
            { title: "Damaged in transit", desc: "If your item arrives damaged due to shipping, we'll cover the cost of a replacement or full refund." },
            { title: "Wrong item sent", desc: "Received the wrong item? We'll arrange a return and issue a full refund including any shipping costs." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 items-start border border-gray-200 rounded p-5 bg-white">
              <div className="w-8 h-8 rounded bg-gray-100 border border-gray-200 flex-shrink-0 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-600">✓</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-700 mb-1">{item.title}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buyer Protection Fee */}
      <div className="px-6 py-8">
        <SectionLabel>Buyer Protection Fee</SectionLabel>
        <div className="border border-gray-200 rounded p-6 bg-white mt-4 max-w-2xl">
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            A small Buyer Protection fee is added to every purchase. This fee covers the cost of our secure payment processing, dispute resolution, and refund guarantee. The fee is paid by the buyer and is included in the total price shown at checkout.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="border border-gray-200 rounded px-4 py-3 text-center bg-gray-50">
              <p className="text-xs text-gray-400 mb-1">Item Price</p>
              <p className="text-sm font-semibold text-gray-700">&pound;10.00</p>
            </div>
            <span className="text-lg font-bold text-gray-400">+</span>
            <div className="border border-gray-200 rounded px-4 py-3 text-center bg-gray-50">
              <p className="text-xs text-gray-400 mb-1">Protection Fee</p>
              <p className="text-sm font-semibold text-gray-700">&pound;0.50</p>
            </div>
            <span className="text-lg font-bold text-gray-400">=</span>
            <div className="border-2 border-gray-300 rounded px-4 py-3 text-center bg-gray-50">
              <p className="text-xs text-gray-400 mb-1">Buyer Pays</p>
              <p className="text-sm font-semibold text-gray-700">&pound;10.50</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            The fee is typically 5% of the item price (minimum &pound;0.50). Sellers receive the full item price &mdash; the protection fee is never deducted from the seller's earnings.
          </p>
        </div>
      </div>

      {/* Refund Process */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="flex gap-8 items-center">
          <div className="flex-1">
            <SectionLabel>Refund Process</SectionLabel>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              If something goes wrong with your order, our refund process is designed to be quick and fair.
              Simply open a dispute within 48 hours of receiving your item, provide photos and a description
              of the issue, and our team will review your case.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Most disputes are resolved within 3-5 business days. Refunds are issued to your original
              payment method and typically appear within 5-10 business days depending on your bank.
            </p>
          </div>
          <ImgPlaceholder label="Refund Process Illustration" className="w-[340px] h-[220px] rounded flex-shrink-0" />
        </div>
      </div>

      {/* FAQ */}
      <div className="px-6 py-8 bg-gray-50">
        <SectionLabel>Frequently Asked Questions</SectionLabel>
        <div className="flex flex-col gap-2 mt-4 max-w-2xl">
          {[
            "How long do I have to raise a dispute?",
            "What happens if the seller disagrees with my claim?",
            "Are all items covered by Buyer Protection?",
            "How long does a refund take to process?",
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

      {/* CTA */}
      <div className="px-6 py-10 bg-white text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Shop with confidence</h2>
        <p className="text-sm text-gray-400 mb-5">Every purchase is protected. Browse thousands of quality pre-loved items for your little ones.</p>
        <div className="flex gap-3 justify-center">
          <WireBtn to="/products" variant="primary">Browse Items</WireBtn>
          <WireBtn to="/help-centre" variant="outline">Contact Support</WireBtn>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
