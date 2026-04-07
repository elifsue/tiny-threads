import { WireframeNav, WireframeFooter, WireBtn, TextBar, DS,
} from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";

export default function VerifyCode() {
  const { isLofi, isHifi } = useWireframeMode();

  /* ── Lo-Fi ── */
  if (isLofi) {
    return (
      <div className="flex flex-col min-h-[800px]">
        <WireframeNav hideAccountLinks />
        <div className="flex-1 flex items-center justify-center py-12 px-6">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-white border-2 border-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-black text-lg font-bold">TT</span>
              </div>
              <h1 className="text-2xl font-bold text-black mb-2">Enter verification code</h1>
              <div className="flex flex-col items-center gap-1 max-w-xs mx-auto"><TextBar width="90%" /><TextBar width="70%" /></div>
            </div>
            <div className="border border-black rounded-lg p-6">
              <div className="mb-5">
                <label className="block text-xs font-medium text-black mb-2">Verification Code</label>
                <div className="flex gap-2 justify-center">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-11 h-13 border border-black rounded flex items-center justify-center text-lg font-bold text-black">
                      {i < 3 ? "\u2022" : ""}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-5">
                <TextBar width="120px" />
                <span className="text-xs text-black underline cursor-pointer">Resend code</span>
              </div>
              <WireBtn variant="primary" full to="/reset-password">Verify Code</WireBtn>
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
      <WireframeNav hideAccountLinks />
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
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Enter verification code</h1>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">We've sent a 6-digit verification code to your email address. Please enter it below.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="mb-5">
              <label className="block text-xs font-medium text-gray-800 mb-2">Verification Code</label>
              <div className="flex gap-2 justify-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="w-11 h-13 border border-gray-200 rounded-md flex items-center justify-center text-lg font-bold text-gray-800">
                    {i < 3 ? "\u2022" : ""}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="text-xs text-gray-500">Didn't receive a code?</span>
              <span className="text-xs text-gray-800 underline cursor-pointer">Resend code</span>
            </div>
            <WireBtn variant="primary" full to="/reset-password">Verify Code</WireBtn>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
