import { WireframeNav, WireframeFooter, WireInput, WireBtn, TextBar, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function ChangePassword() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav />
        <div className="flex-1 flex items-center justify-center py-12 px-6">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-lg font-bold">TT</span>
              </div>
              <h1 className="text-2xl font-bold text-black mb-2">Change Password</h1>
              <div className="flex flex-col items-center gap-1 max-w-xs mx-auto"><TextBar width="85%" /><TextBar width="55%" /></div>
            </div>
            <div className="border border-black rounded-lg p-6">
              <div className="flex flex-col gap-4 mb-5">
                <WireInput label="Current Password" />
                <WireInput label="New Password" />
                <WireInput label="Confirm New Password" />
              </div>
              <div className="mb-5">
                <p className="text-xs font-medium text-black mb-2">Password requirements:</p>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border border-black rounded-full flex-shrink-0" />
                    <TextBar width="60%" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border border-black rounded-full flex-shrink-0" />
                    <TextBar width="70%" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 border border-black rounded-full flex-shrink-0" />
                    <TextBar width="75%" />
                  </div>
                </div>
              </div>
              <WireBtn variant="primary" full to="/edit-profile">Update Password</WireBtn>
            </div>
            <p className="text-sm text-black text-center mt-4">
              <Link to="/edit-profile" className="text-black underline font-medium">← Back to Edit Profile</Link>
            </p>
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
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            {isHifi ? (
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/kUgQoLnnoqrWNYKV.png" alt="TinyThreads" className="w-12 h-12 object-contain mx-auto mb-4" />
            ) : (
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg font-bold">TT</span>
              </div>
            )}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Change Password</h1>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">Confirm your current password, then set a new one to keep your account secure.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex flex-col gap-4 mb-5">
              <WireInput label="Current Password" placeholder="Enter current password" type="password" />
              <WireInput label="New Password" placeholder="Enter new password" type="password" />
              <WireInput label="Confirm New Password" placeholder="Confirm new password" type="password" />
            </div>
            <div className="mb-5">
              <p className="text-xs font-medium text-gray-700 mb-2">Password requirements:</p>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border border-gray-300 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">At least 8 characters long.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border border-gray-300 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">Contains at least one uppercase letter.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border border-gray-300 rounded-full flex-shrink-0" />
                  <span className="text-xs text-gray-500">Contains at least one number or special character.</span>
                </div>
              </div>
            </div>
            <WireBtn variant="primary" full to="/edit-profile">Update Password</WireBtn>
          </div>
          <p className="text-sm text-gray-400 text-center mt-4">
            <Link to="/edit-profile" className="text-gray-700 underline font-medium">← Back to Edit Profile</Link>
          </p>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
