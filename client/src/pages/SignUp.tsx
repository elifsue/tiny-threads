import { WireframeNav, WireframeFooter, WireInput, WireBtn, TextBar } from "@/components/wireframe/WireframePrimitives";
import { useWireframeMode } from "@/contexts/WireframeModeContext";
import { Link } from "wouter";

export default function SignUp() {
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
              <h1 className="text-2xl font-bold text-black mb-2">Create your account</h1>
              <div className="flex justify-center"><TextBar width="70%" /></div>
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
                <span className="text-xs text-black uppercase">or sign up with email</span>
                <div className="flex-1 h-px bg-black" />
              </div>
              <div className="flex flex-col gap-4 mb-5">
                <div className="grid grid-cols-2 gap-3">
                  <WireInput label="First Name" placeholder="Jane" />
                  <WireInput label="Last Name" placeholder="Smith" />
                </div>
                <WireInput label="Email Address" placeholder="jane@example.com" />
                <WireInput label="Username" placeholder="janesmithshop" />
                <WireInput label="Password" placeholder="••••••••" />
                <WireInput label="Confirm Password" placeholder="••••••••" />
              </div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-4 h-4 border border-black flex-shrink-0" />
                <TextBar width="85%" />
              </div>
              <WireBtn variant="primary" full>Create Account</WireBtn>
            </div>
            <p className="text-sm text-black text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-black underline font-medium">Log in</Link>
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
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Create your account</h1>
            <p className="text-sm text-gray-400">Join TinyThreads to buy and sell kids' clothing.</p>
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
              <span className="text-xs text-gray-400 uppercase">or sign up with email</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="flex flex-col gap-4 mb-5">
              <div className="grid grid-cols-2 gap-3">
                <WireInput label="First Name" placeholder="Jane" />
                <WireInput label="Last Name" placeholder="Smith" />
              </div>
              <WireInput label="Email Address" placeholder="jane@example.com" type="email" />
              <WireInput label="Username" placeholder="janesmithshop" />
              <WireInput label="Password" placeholder="••••••••" type="password" />
              <WireInput label="Confirm Password" placeholder="••••••••" type="password" />
            </div>
            <div className="flex items-start gap-2 mb-5">
              <div className="w-4 h-4 border border-gray-300 rounded mt-0.5 flex-shrink-0" />
              <p className="text-xs text-gray-400 leading-relaxed">
                I agree to the <Link to="/terms" className="underline">Terms &amp; Conditions</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>
              </p>
            </div>
            <WireBtn variant="primary" full>Create Account</WireBtn>
          </div>
          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-700 underline font-medium">Log in</Link>
          </p>
        </div>
      </div>
      <WireframeFooter />
    </div>
  );
}
