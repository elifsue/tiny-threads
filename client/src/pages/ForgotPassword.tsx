import { WireframeNav, WireframeFooter, WireInput, WireBtn, TextBar } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function ForgotPassword() {
  const { isLofi } = useWireframeMode();

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
              <h1 className="text-2xl font-bold text-black mb-2">Forgot your password?</h1>
              <div className="flex flex-col items-center gap-1 max-w-xs mx-auto"><TextBar width="90%" /><TextBar width="60%" /></div>
            </div>
            <div className="border border-black rounded-lg p-6">
              <div className="flex flex-col gap-4 mb-5">
                <WireInput label="Email Address" />
              </div>
              <WireBtn variant="primary" full to="/verify-code">Send Reset Link</WireBtn>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Link to="/login" className="text-sm text-black underline">Back to Log In</Link>
              <span className="text-black">|</span>
              <Link to="/signup" className="text-sm text-black underline">Create Account</Link>
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
      <WireframeNav hideAccountLinks />
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-lg font-bold">TT</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Forgot your password?</h1>
            <p className="text-sm text-gray-500 max-w-xs mx-auto">No worries. Enter your email address below and we'll send you a link to reset your password.</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
            <div className="flex flex-col gap-4 mb-5">
              <WireInput label="Email Address" placeholder="Enter your email address" type="email" />
            </div>
            <WireBtn variant="primary" full to="/verify-code">Send Reset Link</WireBtn>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link to="/login" className="text-sm text-gray-800 underline">Back to Log In</Link>
            <span className="text-gray-800">|</span>
            <Link to="/signup" className="text-sm text-gray-800 underline">Create Account</Link>
          </div>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
