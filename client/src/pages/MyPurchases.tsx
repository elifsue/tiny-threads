import { WireframeNav, WireframeFooter, ImgPlaceholder, WireBtn, TextBar, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

const purchasesDetailed = [
  { id: "TT-20260408-6291", status: "Pending Shipment", item: "Girls Floral Dress (3 years / 98\u2013103 cm)", seller: "emma_preloved", price: "\u00A315.40", date: "8 Apr 2026", tracking: false },
  { id: "TT-20260406-7190", status: "Shipped", item: "Unisex Raincoat (5 years / 110 cm)", seller: "rainy_day_kids", price: "\u00A314.00", date: "6 Apr 2026", tracking: false },
  { id: "TT-20260405-7823", status: "Out for Delivery", item: "Boys Striped Cotton T-Shirt (4 years / 104 cm)", seller: "sarah_mum_of_3", price: "\u00A311.49", date: "5 Apr 2026", tracking: false },
  { id: "TT-20260330-5210", status: "Delivered", item: "Girls Knitted Cardigan (24\u201336 months / 92 cm)", seller: "mum_of_twins", price: "\u00A312.00", date: "30 Mar 2026", tracking: false, hasDispute: true },
  { id: "TT-20260328-5104", status: "Delivered", item: "Baby Snowsuit Bundle (6\u20139 months / 68 cm)", seller: "tiny_wardrobe", price: "\u00A322.80", date: "28 Mar 2026", tracking: false },
  { id: "TT-20260320-4887", status: "Cancelled", item: "Boys School Shoes (5 years / 110 cm)", seller: "kidsstyle_uk", price: "\u00A318.50", date: "20 Mar 2026", tracking: false },
];

const statusFilters = ["All", "Pending Shipment", "Shipped", "Out for Delivery", "Delivered", "Cancelled"];

export default function MyOrders() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 pt-6 pb-4">
          <h1 className="text-xl font-bold text-black">My Orders</h1>
        </div>
        <div className="px-6 border-b border-black">
          <div className="flex gap-6">
            <button className="py-3 text-sm font-medium text-black border-b-2 border-black">Purchases</button>
            <Link to="/my-sales" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Sales</Link>
          </div>
        </div>
        <div className="px-6 py-6 flex-1">
          <div className="max-w-4xl mx-auto">

          {/* Search Bar – matches nav toolbar style */}
          <div className="h-10 border border-black bg-white px-4 flex items-center gap-2 rounded-full mb-4">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black flex-shrink-0">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>

          {/* Status Filter Bar */}
          <div className="flex gap-2 mb-5 flex-wrap">
            {statusFilters.map((filter, i) => (
              <button
                key={filter}
                className={`px-3 py-1 text-xs font-medium rounded-full border border-black ${
                  i === 0 ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <TextBar width="100px" className="mb-4" />

          <div className="flex flex-col gap-4">
            {purchasesDetailed.map((order) => (
              <div key={order.id} className="border border-black rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <TextBar width="130px" />
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-black text-black font-medium">{order.status}</span>
                  </div>
                  <TextBar width="70px" />
                </div>
                <div className="flex items-center gap-4">
                  <ImgPlaceholder className="w-20 h-20 rounded flex-shrink-0" />
                  <div className="flex-1 flex flex-col gap-1">
                    <TextBar width="70%" />
                    <TextBar width="50%" />
                    <TextBar width="40px" />
                  </div>
                  <div className="flex flex-col gap-2 w-[170px]">
                    {(order.status === "Out for Delivery" || order.status === "Shipped") && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                    {order.status === "Delivered" && <WireBtn to="/leave-review" variant="outline" full>Leave Review</WireBtn>}
                    {order.status === "Delivered" && order.hasDispute && <WireBtn to="/dispute-status" variant="outline" full>View Dispute</WireBtn>}
                    {order.status === "Cancelled" && <WireBtn variant="outline" full>View Details</WireBtn>}
                    {order.status === "Pending Shipment" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                    {order.status === "Pending Shipment" && <WireBtn variant="outline" full>Cancel Order</WireBtn>}
                    {order.status === "Delivered" && !order.hasDispute && <WireBtn to="/dispute" variant="outline" full>Report Issue</WireBtn>}
                    {order.status !== "Cancelled" && <WireBtn to="/messages" variant="outline" full>Message Seller</WireBtn>}
                    </div>
                </div>
                {order.tracking && (
                  <div className="mt-3 pt-3 border-t border-black">
                    <div className="flex items-center gap-8">
                      {["Order placed", "Shipped", "In transit", "Delivered"].map((step, j) => (
                        <div key={step} className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${j <= 2 ? "bg-black" : "bg-white border border-black"}`} />
                          <span className="text-xs text-black">{step}</span>
                          {j < 3 && <div className={`w-8 h-px ${j < 2 ? "bg-black" : "bg-black"}`} />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
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
      <div className="px-6 pt-6 pb-4">
        <h1 className="text-xl font-bold text-gray-800">My Orders</h1>
      </div>
      <div className="px-6 border-b border-gray-200">
        <div className="flex gap-6">
          <button className="py-3 text-sm font-medium text-gray-800 border-b-2 border-gray-800">Purchases</button>
          <Link to="/my-sales" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Sales</Link>
        </div>
      </div>
      <div className="px-6 py-6 flex-1">
        <div className="max-w-4xl mx-auto">

        {/* Search Bar – matches nav toolbar style */}
        <div className="h-10 border border-gray-300 rounded-full bg-gray-50 px-4 flex items-center gap-2 mb-4">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 flex-shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span className="text-sm text-gray-400">Search by item name or order number...</span>
        </div>

        {/* Status Filter Bar */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {statusFilters.map((filter, i) => (
            <button
              key={filter}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                i === 0
                  ? "bg-gray-800 text-white border-gray-800"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-400 hover:text-gray-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400 mb-4">Showing 6 orders</p>

        <div className="flex flex-col gap-4">
          {purchasesDetailed.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-500">Order {order.id}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${order.status === "Cancelled" ? "bg-red-50 text-red-600" : "bg-gray-200 text-gray-600"} font-medium`}>{order.status}</span>
                </div>
                <span className="text-xs text-gray-400">{order.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <ImgPlaceholder label="Item" className="w-20 h-20 rounded flex-shrink-0" />
                <div className="flex-1">
                  <p className={`text-sm font-medium mb-1 ${order.status === "Cancelled" ? "text-gray-400 line-through" : "text-gray-700"}`}>{order.item}</p>
                  <p className="text-xs text-gray-400">Seller: {order.seller}</p>
                  <p className="text-sm font-semibold text-gray-800 mt-1">{order.price}</p>
                </div>
                <div className="flex flex-col gap-2 w-[170px]">
                  {(order.status === "Out for Delivery" || order.status === "Shipped") && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                  {order.status === "Delivered" && <WireBtn to="/leave-review" variant="outline" full>Leave Review</WireBtn>}
                  {order.status === "Delivered" && order.hasDispute && <WireBtn to="/dispute-status" variant="outline" full>View Dispute</WireBtn>}
                  {order.status === "Cancelled" && <WireBtn variant="outline" full>View Details</WireBtn>}
                  {order.status === "Pending Shipment" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                  {order.status === "Pending Shipment" && <WireBtn variant="outline" full>Cancel Order</WireBtn>}
                  {order.status === "Delivered" && !order.hasDispute && <WireBtn to="/dispute" variant="outline" full>Report Issue</WireBtn>}
                  {order.status !== "Cancelled" && <WireBtn to="/messages" variant="secondary" full>Message Seller</WireBtn>}
                  </div>
              </div>
              {order.tracking && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-8">
                    {["Order placed", "Shipped", "In transit", "Delivered"].map((step, j) => (
                      <div key={step} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${j <= 2 ? "bg-gray-500" : "bg-gray-200"}`} />
                        <span className={`text-xs ${j <= 2 ? "text-gray-600" : "text-gray-300"}`}>{step}</span>
                        {j < 3 && <div className={`w-8 h-px ${j < 2 ? "bg-gray-500" : "bg-gray-200"}`} />}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
