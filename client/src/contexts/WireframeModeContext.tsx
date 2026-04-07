import { createContext, useContext, useState, type ReactNode } from "react";

type WireframeMode = "lofi" | "detailed";

interface WireframeModeContextType {
  mode: WireframeMode;
  setMode: (mode: WireframeMode) => void;
  isLofi: boolean;
}

const WireframeModeContext = createContext<WireframeModeContextType | null>(null);

export function WireframeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<WireframeMode>("detailed");

  return (
    <WireframeModeContext.Provider value={{ mode, setMode, isLofi: mode === "lofi" }}>
      {children}
    </WireframeModeContext.Provider>
  );
}

export function useWireframeMode() {
  const ctx = useContext(WireframeModeContext);
  if (!ctx) throw new Error("useWireframeMode must be used within WireframeModeProvider");
  return ctx;
}
