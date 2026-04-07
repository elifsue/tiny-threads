import { WireframeNav, WireframeFooter, WireInput, WireTextarea, WireBtn, WireSelect, TextBar, TextLines } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

const notifPrefs = [
  { label: "Order updates", enabled: true },
  { label: "New messages", enabled: true },
  { label: "New listings from followed sellers", enabled: true },
  { label: "Price drops on saved items", enabled: true },
  { label: "Dispute updates", enabled: true },
  { label: "Promotional offers", enabled: false },
];

export default function EditProfile() {
  const { isLofi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="px-6 py-6 flex-1">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Link to="/profile" className="w-8 h-8 border border-black rounded flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black"><path d="M15 18l-6-6 6-6" /></svg>
                </Link>
                <h1 className="text-xl font-bold text-black">Edit Profile</h1>
              </div>
              <WireBtn variant="primary">Save Changes</WireBtn>
            </div>

            {/* Profile Photo */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Profile Photo</h2>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="w-20 h-20 wireframe-circle-placeholder" />
                  <button className="absolute bottom-0 right-0 w-6 h-6 bg-white border border-black rounded-full flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <WireBtn variant="outline">Upload New Photo</WireBtn>
                  <p className="text-[10px] text-black">JPG, PNG or GIF. Max 5MB.</p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Personal Information</h2>
              <div className="flex flex-col gap-3">
                <WireInput label="Display Name" />
                <WireInput label="Username" />
                <WireInput label="Email Address" />
                <WireInput label="Phone Number" />
                <WireTextarea label="Bio" rows={3} />
              </div>
            </div>

            {/* Address */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Address</h2>
              <div className="flex flex-col gap-3">
                <WireInput label="Address Line 1" />
                <WireInput label="Address Line 2" />
                <div className="grid grid-cols-3 gap-3">
                  <WireInput label="City" />
                  <WireInput label="County" />
                  <WireInput label="Postcode" />
                </div>
              </div>
            </div>

            {/* Bundle Discount */}
            <div className="border border-black rounded p-5 mb-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-sm font-semibold text-black">Enable Bundle Discount</h2>
                  <TextBar width="80%" />
                </div>
                <div className="w-10 h-6 rounded-full cursor-pointer border-2 border-black bg-white flex items-center justify-end px-0.5">
                  <div className="w-4 h-4 bg-white rounded-full border border-black" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-black w-24 flex-shrink-0">2 items</span>
                  <WireSelect placeholder="Select %" className="flex-1" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-black w-24 flex-shrink-0">3 items</span>
                  <WireSelect placeholder="Select %" className="flex-1" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-black w-24 flex-shrink-0">5 items</span>
                  <WireSelect placeholder="Select %" className="flex-1" />
                </div>
              </div>
            </div>

            {/* Linked Social Accounts */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Linked Social Accounts</h2>
              <div className="flex flex-col gap-3">
                {[{name: "Google", linked: true}, {name: "Facebook", linked: false}, {name: "Apple", linked: false}].map((account) => (
                  <div key={account.name} className="flex items-center justify-between py-2 border-b border-black last:border-b-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 border border-black bg-white relative flex-shrink-0">
                        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full"><line x1="0" y1="0" x2="40" y2="40" stroke="black" strokeWidth="0.75" /><line x1="40" y1="0" x2="0" y2="40" stroke="black" strokeWidth="0.75" /></svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-black">{account.name}</p>
                        <p className="text-[10px] text-black">{account.linked ? "Connected" : "Not connected"}</p>
                      </div>
                    </div>
                    <WireBtn variant={account.linked ? "outline" : "primary"}>{account.linked ? "Unlink" : "Link"}</WireBtn>
                  </div>
                ))}
              </div>
            </div>

            {/* Change Password */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-2">Password</h2>
              <TextBar width="65%" className="mb-4" />
              <WireBtn variant="outline" to="/change-password">Change Password</WireBtn>
            </div>

            {/* Notification Preferences */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-4">Notification Preferences</h2>
              <div className="flex flex-col gap-3">
                {notifPrefs.map((pref, i) => (
                  <div key={pref.label} className="flex items-center justify-between">
                    <TextBar width={`${45 + i * 7}%`} />
                    <div className={`w-10 h-6 rounded-full cursor-pointer border-2 border-black bg-white flex items-center ${pref.enabled ? "justify-end" : "justify-start"} px-0.5`}>
                      <div className="w-4 h-4 bg-white rounded-full border border-black" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger Zone */}
            <div className="border border-black rounded p-5 mb-5">
              <h2 className="text-sm font-semibold text-black mb-2">Danger Zone</h2>
              <TextBar width="70%" className="mb-4" />
              <div className="flex gap-3">
                <WireBtn variant="outline">Deactivate Account</WireBtn>
                <WireBtn variant="outline">Delete Account</WireBtn>
              </div>
            </div>

            {/* Bottom Save */}
            <div className="grid grid-cols-2 gap-3">
              <WireBtn variant="outline" to="/profile">Cancel</WireBtn>
              <WireBtn variant="primary">Save Changes</WireBtn>
            </div>
          </div>
        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Hi-Fi ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav />
      <div className="px-6 py-6 flex-1">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Link to="/profile" className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500"><path d="M15 18l-6-6 6-6" /></svg>
              </Link>
              <h1 className="text-xl font-bold text-gray-800">Edit Profile</h1>
            </div>
            <WireBtn variant="primary">Save Changes</WireBtn>
          </div>

          {/* Profile Photo */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Profile Photo</h2>
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gray-200 border border-gray-300" />
                <button className="absolute bottom-0 right-0 w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <WireBtn variant="outline">Upload New Photo</WireBtn>
                <p className="text-[10px] text-gray-400">JPG, PNG or GIF. Max 5MB.</p>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Personal Information</h2>
            <div className="flex flex-col gap-3">
              <WireInput label="Display Name" placeholder="Jane Smith" />
              <WireInput label="Username" placeholder="jane_smith_shop" />
              <WireInput label="Email Address" placeholder="jane@example.com" />
              <WireInput label="Phone Number" placeholder="+44 7700 900000" />
              <WireTextarea label="Bio" rows={3} placeholder="Tell buyers a bit about yourself and what you sell..." />
            </div>
          </div>

          {/* Address */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Address</h2>
            <div className="flex flex-col gap-3">
              <WireInput label="Address Line 1" placeholder="42 Primrose Lane" />
              <WireInput label="Address Line 2" placeholder="(optional)" />
              <div className="grid grid-cols-3 gap-3">
                <WireInput label="City" placeholder="London" />
                <WireInput label="County" placeholder="Greater London" />
                <WireInput label="Postcode" placeholder="SW1A 1AA" />
              </div>
            </div>
          </div>

          {/* Bundle Discount */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-sm font-semibold text-gray-700">Enable Bundle Discount</h2>
                <p className="text-xs text-gray-400">Offer buyers a discount when they purchase multiple items from your listings.</p>
              </div>
              <div className="w-10 h-6 rounded-full relative cursor-pointer bg-gray-800">
                <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 border border-gray-300 transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24 flex-shrink-0">2 items</span>
                <WireSelect placeholder="5%" className="flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24 flex-shrink-0">3 items</span>
                <WireSelect placeholder="10%" className="flex-1" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 w-24 flex-shrink-0">5 items</span>
                <WireSelect placeholder="15%" className="flex-1" />
              </div>
            </div>
          </div>

          {/* Linked Social Accounts */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Linked Social Accounts</h2>
            <div className="flex flex-col gap-3">
              {[{name: "Google", linked: true}, {name: "Facebook", linked: false}, {name: "Apple", linked: false}].map((account) => (
                <div key={account.name} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">{account.name}</p>
                      <p className="text-[10px] text-gray-400">{account.linked ? "Connected" : "Not connected"}</p>
                    </div>
                  </div>
                  <WireBtn variant={account.linked ? "outline" : "primary"}>{account.linked ? "Unlink" : "Link"}</WireBtn>
                </div>
              ))}
            </div>
          </div>

          {/* Change Password */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Password</h2>
            <p className="text-xs text-gray-400 mb-4">Update your password to keep your account secure.</p>
            <WireBtn variant="outline" to="/change-password">Change Password</WireBtn>
          </div>

          {/* Notification Preferences */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-4">Notification Preferences</h2>
            <div className="flex flex-col gap-3">
              {notifPrefs.map((pref) => (
                <div key={pref.label} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{pref.label}</span>
                  <div className={`w-10 h-6 rounded-full relative cursor-pointer ${pref.enabled ? "bg-gray-800" : "bg-gray-200"}`}>
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 border border-gray-300 transition-all ${pref.enabled ? "right-1" : "left-1"}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Danger Zone */}
          <div className="border border-gray-200 rounded-lg p-5 mb-5">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Danger Zone</h2>
            <p className="text-xs text-gray-400 mb-4">Deactivate or permanently delete your account. This action cannot be undone.</p>
            <div className="flex gap-3">
              <WireBtn variant="outline">Deactivate Account</WireBtn>
              <WireBtn variant="outline">Delete Account</WireBtn>
            </div>
          </div>

          {/* Bottom Save */}
          <div className="grid grid-cols-2 gap-3">
            <WireBtn variant="outline" to="/profile">Cancel</WireBtn>
            <WireBtn variant="primary">Save Changes</WireBtn>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
