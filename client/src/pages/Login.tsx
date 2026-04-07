import { WireframeNav, WireframeFooter, WireInput, WireBtn, TextBar } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function Login() {
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
              <h1 className="text-2xl font-bold text-black mb-2">Welcome back</h1>
              <div className="flex justify-center"><TextBar width="65%" /></div>
            </div>
            <div className="border border-black rounded-lg p-6">
              <div className="flex flex-col gap-3 mb-5">
                {["Google","Facebook","Apple"].map((provider) => (
                  <button key={provider} className="h-10 border border-black rounded flex items-center justify-center gap-2 text-sm text-black">
                    <div className="w-5 h-5 border border-black bg-white relative flex-shrink-0">
                      <svg viewBox="0 0 20 20" className="w-full h-full">
                        <line x1="0" y1="0" x2="20" y2="20" stroke="black" strokeWidth="1" />
                        <line x1="20" y1="0" x2="0" y2="20" stroke="black" strokeWidth="1" />
                      </svg>
                    </div>
                    Continue with {provider}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-black" />
                <span className="text-xs text-black uppercase">or log in with email</span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <div className="flex flex-col gap-4 mb-4">
                <WireInput label="Email Address" placeholder="jane@example.com" />
                <WireInput label="Password" placeholder="••••••••" />
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-black flex-shrink-0" />
                  <TextBar width="80px" />
                </div>
                <Link to="/forgot-password" className="text-xs text-black underline">Forgot password?</Link>
              </div>
              <WireBtn variant="primary" full>Log In</WireBtn>
            </div>
            <p className="text-sm text-black text-center mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-black underline font-medium">Sign up</Link>
            </p>
          </div>
        </div>
        <WireframeFooter />
      </div>
    );
  }

  /* ── Detailed (exact original) ── */
  return (
    <div className="flex flex-col min-h-[800px]">
      <WireframeNav hideAccountLinks />
      <div className="flex-1 flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-lg font-bold">TT</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back</h1>
            <p className="text-sm text-gray-400">Log in to your TinyThreads account.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex flex-col gap-3 mb-5">
              <button className="h-10 border border-gray-300 rounded flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
                <div className="w-5 h-5 bg-gray-200 rounded-full" />
                Continue with Google
              </button>
              <button className="h-10 border border-gray-300 rounded flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
                <div className="w-5 h-5 bg-gray-200 rounded-full" />
                Continue with Facebook
              </button>
              <button className="h-10 border border-gray-300 rounded flex items-center justify-center gap-2 text-sm text-gray-600 hover:bg-gray-50">
                <div className="w-5 h-5 bg-gray-200 rounded-full" />
                Continue with Apple
              </button>
            </div>
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 uppercase">or log in with email</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="flex flex-col gap-4 mb-4">
              <WireInput label="Email Address" placeholder="jane@example.com" type="email" />
              <WireInput label="Password" placeholder="••••••••" type="password" />
            </div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border border-gray-300 rounded flex-shrink-0" />
                <span className="text-xs text-gray-400">Remember me</span>
              </div>
              <Link to="/forgot-password" className="text-xs text-gray-500 underline cursor-pointer">Forgot password?</Link>
            </div>
            <WireBtn variant="primary" full>Log In</WireBtn>
          </div>
          <p className="text-sm text-gray-400 text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-gray-700 underline font-medium">Sign up</Link>
          </p>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
