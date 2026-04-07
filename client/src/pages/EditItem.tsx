import { WireframeNav, WireframeFooter, WireInput, WireSelect, WireTextarea, WireBtn, TextBar } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function EditItem() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-xl font-bold text-black mb-2">Edit Item</h1>
            <TextBar width="320px" className="mb-6" />
            <div className="flex items-center gap-2 mb-8">
              {["Photos", "Details", "Pricing", "Shipping"].map((step, i) => (
                <div key={step} className="flex items-center gap-2 flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 bg-white text-black border${i === 0 ? "-2" : ""} border-black`}>{i + 1}</div>
                  <span className={`text-xs text-black ${i === 0 ? "font-medium" : ""}`}>{step}</span>
                  {i < 3 && <div className="flex-1 h-px bg-black" />}
                </div>
              ))}
            </div>
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-1">Photos</h2>
              <TextBar width="300px" className="mb-4" />
              <div className="grid grid-cols-4 gap-3">
                <div className="col-span-2 row-span-2">
                  <div className="border-2 border-dashed border-black rounded bg-white flex flex-col items-center justify-center h-full min-h-[200px] cursor-pointer">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black mb-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                    <p className="text-xs text-black font-medium">Add cover photo</p>
                  </div>
                </div>
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="border-2 border-dashed border-black rounded bg-white flex items-center justify-center aspect-square cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Item Details</h2>
              <div className="flex flex-col gap-4">
                <WireInput label="Title" /><WireTextarea label="Description" rows={4} />
                <div className="grid grid-cols-2 gap-3"><WireSelect label="Category" /><WireSelect label="Subcategory" /></div>
                <div className="grid grid-cols-2 gap-3"><WireSelect label="Gender" /><WireSelect label="Age / Size" /></div>
                <WireSelect label="Condition" />
                <div className="grid grid-cols-2 gap-3"><WireInput label="Brand" /><WireSelect label="Colour" /></div>
              </div>
            </div>
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Pricing</h2>
              <div className="bg-white border border-black rounded p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold text-black flex-shrink-0">i</span>
                  <span className="text-xs font-medium text-black">Price Suggestion</span>
                </div>
                <TextBar width="80%" className="mb-2" />
                <div className="flex items-center gap-4">
                  <div className="text-center flex flex-col items-center gap-1">
                    <TextBar width="100px" />
                    <TextBar width="70px" />
                  </div>
                  <div className="h-8 w-px bg-black" />
                  <div className="text-center flex flex-col items-center gap-1">
                    <TextBar width="60px" />
                    <TextBar width="80px" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-black">Your Price</label>
                <div className="h-10 border border-black bg-white px-3 flex items-center gap-2">
                  <span className="text-sm text-black font-medium">&pound;</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <TextBar width="200px" />
                <Link to="/buyer-protection" className="text-xs font-medium text-black underline">Learn more</Link>
              </div>

            </div>
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Shipping</h2>
              <div className="flex flex-col gap-3">
                {[true, true, false, false].map((checked, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-4 h-4 border rounded-sm flex items-center justify-center ${checked ? "border-2 border-black" : "border-black"}`}>
                      {checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                    </div>
                    <TextBar width={`${40 + i * 10}%`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <WireBtn to="/profile" variant="outline" className="flex-1">Delete Listing</WireBtn>
              <WireBtn to="/profile" variant="primary" className="flex-1">Save Changes</WireBtn>
            </div>
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
      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-xl font-bold text-gray-800 mb-2">Edit Item</h1>
          <p className="text-sm text-gray-400 mb-6">Update your listing details below.</p>
          <div className="flex items-center gap-2 mb-8">
            {["Photos", "Details", "Pricing", "Shipping"].map((step, i) => (
              <div key={step} className="flex items-center gap-2 flex-1">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${i === 0 ? "bg-gray-800 text-white" : "bg-white text-gray-400 border border-gray-300"}`}>{i + 1}</div>
                <span className={`text-xs ${i === 0 ? "text-gray-800 font-medium" : "text-gray-400"}`}>{step}</span>
                {i < 3 && <div className="flex-1 h-px bg-gray-200" />}
              </div>
            ))}
          </div>
          <div className="border border-gray-200 rounded p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-1">Photos</h2>
            <p className="text-xs text-gray-400 mb-4">Add up to 8 photos. The first photo will be the cover.</p>
            <div className="grid grid-cols-4 gap-3">
              <div className="col-span-2 row-span-2">
                <div className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex flex-col items-center justify-center h-full min-h-[200px] cursor-pointer hover:border-gray-400">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 mb-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                  <p className="text-xs text-gray-500 font-medium">Add cover photo</p>
                  <p className="text-[10px] text-gray-400">Drag & drop or click</p>
                </div>
              </div>
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center aspect-square cursor-pointer hover:border-gray-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-gray-200 rounded p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Item Details</h2>
            <div className="flex flex-col gap-4">
              <WireInput label="Title" placeholder="e.g., Boys Striped Cotton T-Shirt" />
              <WireTextarea label="Description" rows={4} placeholder="Describe the item, including any wear or defects..." />
              <div className="grid grid-cols-2 gap-3"><WireSelect label="Category" placeholder="Select category..." /><WireSelect label="Subcategory" placeholder="Select subcategory..." /></div>
              <div className="grid grid-cols-2 gap-3"><WireSelect label="Gender" placeholder="Boys / Girls / Unisex" /><WireSelect label="Age / Size" placeholder="e.g. 4 years / 104 cm" /></div>
              <WireSelect label="Condition" placeholder="Select condition..." />
              <div className="grid grid-cols-2 gap-3"><WireInput label="Brand" placeholder="e.g., Next, H&M, Zara" /><WireSelect label="Colour" placeholder="Select colour..." /></div>
            </div>
          </div>
          <div className="border border-gray-200 rounded p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Pricing</h2>
            <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px] font-bold text-gray-400 flex-shrink-0">i</span>
                <span className="text-xs font-medium text-gray-600">Price Suggestion</span>
              </div>
              <p className="text-xs text-gray-500 mb-2">Based on similar items recently sold on TinyThreads, we suggest the following.</p>
              <div className="flex items-center gap-4">
                <div className="text-center"><p className="text-lg font-bold text-gray-800">&pound;6.00 &ndash; &pound;10.00</p><p className="text-[10px] text-gray-400">Suggested range</p></div>
                <div className="h-8 w-px bg-gray-200" />
                <div className="text-center"><p className="text-lg font-bold text-gray-600">&pound;8.00</p><p className="text-[10px] text-gray-400">Average sold price</p></div>
              </div>
            </div>
            <WireInput label="Your Price" placeholder="£ 0.00" />
            <p className="text-xs text-gray-400 mt-2">Buyer will see &pound;X.XX including Buyer Protection fee. <Link to="/buyer-protection" className="text-xs text-gray-600 underline hover:text-gray-800">Learn more</Link></p>

          </div>
          <div className="border border-gray-200 rounded p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Shipping</h2>
            <div className="flex flex-col gap-3">
              {[
                { label: "Royal Mail (Prepaid label)", checked: true },
                { label: "Evri ParcelShop", checked: true },
                { label: "InPost Locker", checked: false },
                { label: "Local collection available", checked: false },
              ].map((opt) => (
                <div key={opt.label} className="flex items-center gap-2">
                  <div className={`w-4 h-4 border rounded-sm flex items-center justify-center ${opt.checked ? "bg-gray-800 border-gray-800" : "border-gray-300"}`}>
                    {opt.checked && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>}
                  </div>
                  <span className="text-sm text-gray-600">{opt.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            <WireBtn to="/profile" variant="secondary" className="flex-1">Delete Listing</WireBtn>
            <WireBtn to="/profile" variant="primary" className="flex-1">Save Changes</WireBtn>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
