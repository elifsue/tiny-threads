import { WireframeNav, WireframeFooter, ImgPlaceholder, WireBtn, TextBar, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

const salesDetailed = [
  { id: "TT-20260406-4201", status: "Pending Shipment", item: "Boys Striped Cotton T-Shirt (4 years / 104 cm)", buyer: "emma_bargain_hunter", price: "\u00A36.50", date: "6 Apr 2026" },
  { id: "TT-20260404-4198", status: "Shipped", item: "Girls Floral Summer Dress (3 years / 98\u2013103 cm)", buyer: "lucy_mum_of_2", price: "\u00A312.00", date: "4 Apr 2026" },
  { id: "TT-20260402-4190", status: "Out for Delivery", item: "Girls Winter Coat (4 years / 104 cm)", buyer: "mum_of_twins", price: "\u00A318.00", date: "2 Apr 2026" },
  { id: "TT-20260401-4185", status: "Delivered", item: "Unisex Raincoat (6 years / 116 cm)", buyer: "dad_deals_uk", price: "\u00A315.00", date: "1 Apr 2026" },
  { id: "TT-20260325-4140", status: "Cancelled", item: "Boys School Trousers (5 years / 110 cm)", buyer: "bargain_dad", price: "\u00A38.00", date: "25 Mar 2026" },
];

const statusFilters = ["All", "Pending Shipment", "Shipped", "Out for Delivery", "Delivered", "Cancelled"];

export default function MySales() {
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
            <Link to="/my-purchases" className="py-3 text-sm font-medium text-black border-b-2 border-transparent">Purchases</Link>
            <button className="py-3 text-sm font-medium text-black border-b-2 border-black">Sales</button>
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
              {salesDetailed.map((sale) => (
                <div key={sale.id} className="border border-black rounded p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <TextBar width="130px" />
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-black text-black font-medium">{sale.status}</span>
                    </div>
                    <TextBar width="70px" />
                  </div>
                  <div className="flex items-center gap-4">
                    <ImgPlaceholder className="w-20 h-20 rounded flex-shrink-0" aspectRatio="1/1" />
                    <div className="flex-1 flex flex-col gap-1">
                      <TextBar width="70%" />
                      <TextBar width="50%" />
                      <TextBar width="40px" />
                    </div>
                    <div className="flex flex-col gap-2 w-[170px]">
                      {sale.status === "Pending Shipment" && <WireBtn variant="outline" full>Mark as Shipped</WireBtn>}
                      {sale.status === "Pending Shipment" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                      {sale.status === "Pending Shipment" && <WireBtn variant="outline" full>Print Label</WireBtn>}
                      {sale.status === "Pending Shipment" && <WireBtn to="/messages" variant="outline" full>Message Buyer</WireBtn>}
                      {sale.status === "Shipped" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                      {sale.status === "Shipped" && <WireBtn to="/messages" variant="outline" full>Message Buyer</WireBtn>}
                      {sale.status === "Out for Delivery" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                      {sale.status === "Out for Delivery" && <WireBtn to="/messages" variant="outline" full>Message Buyer</WireBtn>}
                      {sale.status === "Delivered" && <WireBtn to="/messages" variant="outline" full>Message Buyer</WireBtn>}
                      {sale.status === "Cancelled" && <WireBtn variant="outline" full>View Details</WireBtn>}
                    </div>
                  </div>
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
          <Link to="/my-purchases" className="py-3 text-sm font-medium text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-300 transition-colors">Purchases</Link>
          <button className="py-3 text-sm font-medium text-gray-800 border-b-2 border-gray-800">Sales</button>
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

          <p className="text-xs text-gray-400 mb-4">Showing 5 orders</p>

          <div className="flex flex-col gap-4">
            {salesDetailed.map((sale) => (
              <div key={sale.id} className="border border-gray-200 rounded p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-500">Order {sale.id}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${sale.status === "Cancelled" ? "bg-red-50 text-red-600" : "bg-gray-200 text-gray-600"} font-medium`}>{sale.status}</span>
                  </div>
                  <span className="text-xs text-gray-400">{sale.date}</span>
                </div>
                <div className="flex items-center gap-4">
                  <ImgPlaceholder label="Item" className="w-20 h-20 rounded flex-shrink-0" aspectRatio="1/1" />
                  <div className="flex-1">
                    <p className={`text-sm font-medium mb-1 ${sale.status === "Cancelled" ? "text-gray-400 line-through" : "text-gray-700"}`}>{sale.item}</p>
                    <p className="text-xs text-gray-400">Buyer: {sale.buyer}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-1">{sale.price}</p>
                  </div>
                  <div className="flex flex-col gap-2 w-[170px]">
                    {sale.status === "Pending Shipment" && <WireBtn variant="outline" full>Mark as Shipped</WireBtn>}
                    {sale.status === "Pending Shipment" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                    {sale.status === "Pending Shipment" && <WireBtn variant="outline" full>Print Label</WireBtn>}
                    {sale.status === "Pending Shipment" && <WireBtn to="/messages" variant="secondary" full>Message Buyer</WireBtn>}
                    {sale.status === "Shipped" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                    {sale.status === "Shipped" && <WireBtn to="/messages" variant="secondary" full>Message Buyer</WireBtn>}
                    {sale.status === "Out for Delivery" && <WireBtn to="/track-order" variant="outline" full>Track Order</WireBtn>}
                    {sale.status === "Out for Delivery" && <WireBtn to="/messages" variant="secondary" full>Message Buyer</WireBtn>}
                    {sale.status === "Delivered" && <WireBtn to="/messages" variant="secondary" full>Message Buyer</WireBtn>}
                    {sale.status === "Cancelled" && <WireBtn variant="outline" full>View Details</WireBtn>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
