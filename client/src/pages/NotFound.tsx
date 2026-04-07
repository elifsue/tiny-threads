import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-lg mx-4 border border-black p-8 text-center">
        <h1 className="text-4xl font-bold text-black mb-2">404</h1>
        <h2 className="text-xl font-semibold text-black mb-4">Page Not Found</h2>
        <p className="text-black mb-8">
          Sorry, the page you are looking for doesn't exist.
          <br />
          It may have been moved or deleted.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-white text-black px-6 py-2.5 border border-black text-sm font-medium inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Go Home
        </button>
      </div>
    </div>
  );
}
