import { WireframeNav, WireframeFooter, ImgPlaceholder, WireBtn, TextBar, WireSelect, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { PROFILE_PHOTOS } from "@/lib/profilePhotos";
import { Link } from "wouter";

const reviews = [
  {
    user: "emma_preloved",
    stars: 5,
    time: "3 days ago",
    item: "Boys Striped Cotton T-Shirt",
    text: "Absolutely lovely item, exactly as described. Beautifully packaged and arrived within 2 days. My son loves it! Will definitely buy from this seller again.",
    aspects: { described: 5, communication: 5, shipping: 5, packaging: 5 } as Record<string, number> | null,
  },
  {
    user: "buyer_tom_42",
    stars: 4,
    time: "1 week ago",
    item: "Boys Navy Joggers",
    text: "Good quality joggers, slight pilling not mentioned in listing but overall happy with the purchase. Fast shipping.",
    aspects: { described: 3, communication: 4, shipping: 5, packaging: 4 } as Record<string, number> | null,
  },
  {
    user: "jane_eco_mum",
    stars: 5,
    time: "2 weeks ago",
    item: "Baby Snowsuit Bundle (3 items)",
    text: "Amazing bundle deal! All three items in great condition. Sarah was really helpful answering my questions about sizes. Highly recommend.",
    aspects: { described: 5, communication: 5, shipping: 4, packaging: 5 } as Record<string, number> | null,
  },
  {
    user: "lisa_bargains",
    stars: 5,
    time: "3 weeks ago",
    item: "Girls Floral Dress",
    text: "Beautiful dress, looks barely worn. Great communication and quick dispatch.",
    aspects: null,
  },
  {
    user: "mark_dad_of_2",
    stars: 4,
    time: "1 month ago",
    item: "Boys School Shoes",
    text: "Shoes were in good condition as described. Took a couple of extra days to arrive but seller kept me updated.",
    aspects: { described: 4, communication: 5, shipping: 3, packaging: 4 } as Record<string, number> | null,
  },
  {
    user: "claire_mum_london",
    stars: 5,
    time: "1 month ago",
    item: "Girls Winter Coat",
    text: "Gorgeous coat in excellent condition. My daughter loves the colour. Very well packaged and arrived quickly. Thank you!",
    aspects: { described: 5, communication: 5, shipping: 5, packaging: 5 } as Record<string, number> | null,
  },
  {
    user: "sam_thrifty",
    stars: 3,
    time: "2 months ago",
    item: "Boys Denim Shorts",
    text: "Shorts were fine but had a small stain not mentioned in the listing. Seller offered a partial refund which was fair.",
    aspects: { described: 2, communication: 4, shipping: 4, packaging: 3 } as Record<string, number> | null,
  },
];

const ratingBreakdown = [
  { stars: 5, count: 31, pct: 66 },
  { stars: 4, count: 10, pct: 21 },
  { stars: 3, count: 4, pct: 9 },
  { stars: 2, count: 1, pct: 2 },
  { stars: 1, count: 1, pct: 2 },
];

const aspectLabels: Record<string, string> = {
  described: "As described",
  communication: "Communication",
  shipping: "Shipping",
  packaging: "Packaging",
};

export default function SellerReviews() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 border-b border-black bg-white">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex-shrink-0 wireframe-circle-placeholder" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-lg font-bold text-black"><TextBar width="150px" /></h1>
                <WireBtn variant="outline">Follow</WireBtn>
              </div>
              <div className="flex items-center gap-4">
                <TextBar width="90px" /><TextBar width="75px" /><TextBar width="85px" /><TextBar width="90px" />
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <Link to="/seller-profile" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Listings (82)</Link>
            <button className="py-3 text-sm font-medium text-black border-b-2 border-black">Reviews (47)</button>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="flex gap-8">
            <div className="w-[280px] flex-shrink-0">
              <div className="border border-black rounded p-5 bg-white sticky top-6">
                <div className="text-center mb-5 pb-5 border-b border-black">
                  <p className="text-4xl font-bold text-black mb-1">4.2</p>
                  <div className="flex items-center gap-0.5 justify-center mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? "#000" : "none"} stroke="#000" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <TextBar width="100px" />
                </div>
                <div className="flex flex-col gap-2">
                  {ratingBreakdown.map((row) => (
                    <div key={row.stars} className="flex items-center gap-2">
                      <span className="text-xs text-black w-3 text-right">{row.stars}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#000" stroke="#000" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <div className="flex-1 h-2 bg-white border border-black overflow-hidden">
                        <div className="h-full bg-black" style={{ width: `${row.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-black">
                  <p className="text-xs font-semibold text-black mb-3">Average Ratings</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { label: "Item as described", score: 4.3 },
                      { label: "Communication", score: 4.6 },
                      { label: "Shipping speed", score: 4.0 },
                      { label: "Packaging", score: 4.4 },
                    ].map((aspect) => (
                      <div key={aspect.label}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-black">{aspect.label}</span>
                          <span className="text-xs font-semibold text-black">{aspect.score.toFixed(1)}</span>
                        </div>
                        <div className="h-1.5 bg-white border border-black overflow-hidden">
                          <div className="h-full bg-black" style={{ width: `${(aspect.score / 5) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-black">Filter:</span>
                  {["All", "5 stars", "4 stars", "3 stars", "1-2 stars", "With photos"].map((filter, i) => (
                    <div key={filter} className={`border border-black rounded-full px-2.5 py-1 text-[11px] cursor-pointer text-black ${i === 0 ? "border-2 font-semibold" : ""}`}>{filter}</div>
                  ))}
                </div>
                <WireSelect placeholder="Sort: Most recent" />
              </div>
              <div className="flex flex-col gap-4">
                {reviews.map((review, i) => (
                  <div key={i} className="border border-black rounded p-4 bg-white">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 flex-shrink-0 wireframe-circle-placeholder" />
                        <div>
                          <TextBar width="100px" />
                          <div className="flex items-center gap-1.5 mt-1">
                            <div className="flex items-center gap-0.5">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill={j < review.stars ? "#000" : "none"} stroke="#000" strokeWidth="2">
                                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                              ))}
                            </div>
                            <TextBar width="60px" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-3 p-2 bg-white rounded">
                      <ImgPlaceholder className="w-8 h-8 rounded flex-shrink-0" />
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-black">Purchased:</span>
                        <TextBar width="140px" />
                      </div>
                    </div>
                    <div className="mb-3 flex flex-col gap-1.5">
                      <TextBar width="95%" /><TextBar width="80%" />
                    </div>
                    {review.aspects && (
                      <div className="flex items-center gap-4 pt-3 border-t border-black">
                        {Object.entries(review.aspects).map(([key, val]) => (
                          <div key={key} className="flex items-center gap-1">
                            <span className="text-[10px] text-black">{aspectLabels[key]}</span>
                            <div className="flex items-center gap-px">
                              {Array.from({ length: 5 }).map((_, j) => (
                                <div key={j} className={`w-1.5 h-1.5 rounded-full ${j < val ? "bg-black" : "bg-white border border-black"}`} />
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="w-8 h-8 border border-black rounded flex items-center justify-center text-xs text-black">&larr;</div>
                {[1, 2, 3, 4, 5].map((p) => (
                  <div key={p} className={`w-8 h-8 border rounded flex items-center justify-center text-xs ${p === 1 ? "bg-white text-black border-2 border-black font-semibold" : "border-black text-black"}`}>{p}</div>
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

  /* ── Detailed (exact original) ── */
  return (
    <div data-hifi={isHifi || undefined} className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="px-6 py-6 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center gap-4">
          {isHifi ? <img src={PROFILE_PHOTOS.p3} alt="Seller" className="w-14 h-14 rounded-full object-cover flex-shrink-0" /> : <div className="w-14 h-14 rounded-full bg-gray-200 border border-gray-300 flex-shrink-0" />}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-lg font-bold text-gray-800">sarah_mum_of_3</h1>
              <WireBtn variant="outline">Follow</WireBtn>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span>📍 Manchester, UK</span>
              <span>94 items sold</span>
              <span>Joined Jan 2024</span>
              <span>Last active 2h ago</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <Link to="/seller-profile" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Listings (82)</Link>
          <button className="py-3 text-sm font-medium text-gray-800 border-b-2 border-gray-800">Reviews (47)</button>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="flex gap-8">
          <div className="w-[280px] flex-shrink-0">
            <div className="border border-gray-200 rounded p-5 bg-white sticky top-6">
              <div className="text-center mb-5 pb-5 border-b border-gray-100">
                <p className="text-4xl font-bold text-gray-800 mb-1">4.2</p>
                <div className="flex items-center gap-0.5 justify-center mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < 4 ? "#9CA3AF" : "none"} stroke="#9CA3AF" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-400">Based on 47 reviews.</p>
              </div>
              <div className="flex flex-col gap-2">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded px-1 py-0.5 -mx-1">
                    <span className="text-xs text-gray-500 w-3 text-right">{row.stars}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#D1D5DB" stroke="#D1D5DB" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-400 rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                    <span className="text-[10px] text-gray-400 w-5 text-right">{row.count}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-600 mb-3">Average Ratings</p>
                <div className="flex flex-col gap-2.5">
                  {[
                    { label: "Item as described", score: 4.3 },
                    { label: "Communication", score: 4.6 },
                    { label: "Shipping speed", score: 4.0 },
                    { label: "Packaging", score: 4.4 },
                  ].map((aspect) => (
                    <div key={aspect.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-500">{aspect.label}</span>
                        <span className="text-xs font-semibold text-gray-700">{aspect.score.toFixed(1)}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gray-400 rounded-full" style={{ width: `${(aspect.score / 5) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Filter:</span>
                {["All", "5 stars", "4 stars", "3 stars", "1-2 stars", "With photos"].map((filter, i) => (
                  <div key={filter} className={`border rounded-full px-2.5 py-1 text-[11px] cursor-pointer transition-colors ${i === 0 ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-100"}`}>{filter}</div>
                ))}
              </div>
              <WireSelect placeholder="Sort: Most recent" />
            </div>
            <div className="flex flex-col gap-4">
              {reviews.map((review, i) => (
                <div key={i} className="border border-gray-200 rounded p-4 bg-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {isHifi ? <img src={PROFILE_PHOTOS[(['p4','p7','p8','p11','p12'] as const)[i % 5]]} alt="Reviewer" className="w-9 h-9 rounded-full object-cover flex-shrink-0" /> : <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 flex-shrink-0" />}
                      <div>
                        <p className="text-sm font-medium text-gray-700">{review.user}</p>
                        <div className="flex items-center gap-1.5">
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill={j < review.stars ? "#9CA3AF" : "none"} stroke="#9CA3AF" strokeWidth="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-400">{review.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3 p-2 bg-gray-50 rounded">
                    <ImgPlaceholder label="Item" className="w-8 h-8 rounded flex-shrink-0" />
                    <span className="text-xs text-gray-500">Purchased: <span className="font-medium text-gray-600">{review.item}</span></span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{review.text}</p>
                  {review.aspects && (
                    <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                      {Object.entries(review.aspects).map(([key, val]) => (
                        <div key={key} className="flex items-center gap-1">
                          <span className="text-[10px] text-gray-400">{aspectLabels[key]}</span>
                          <div className="flex items-center gap-px">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <div key={j} className={`w-1.5 h-1.5 rounded-full ${j < val ? "bg-gray-400" : "bg-gray-200"}`} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:bg-gray-100">&larr;</div>
              {[1, 2, 3, 4, 5].map((p) => (
                <div key={p} className={`w-8 h-8 border rounded flex items-center justify-center text-xs cursor-pointer ${p === 1 ? "bg-gray-800 text-white border-gray-800" : "border-gray-300 text-gray-500 hover:bg-gray-100"}`}>{p}</div>
              ))}
              <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-xs text-gray-400 cursor-pointer hover:bg-gray-100">&rarr;</div>
            </div>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
