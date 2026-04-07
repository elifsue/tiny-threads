import { createContext, useContext, useState, type ReactNode } from "react";

export type WireframeMode = "lofi" | "midfi" | "hifi";

interface WireframeModeContextType {
  mode: WireframeMode;
  setMode: (mode: WireframeMode) => void;
  isLofi: boolean;
  isMidfi: boolean;
  isHifi: boolean;
}

const WireframeModeContext = createContext<WireframeModeContextType | null>(null);

export function WireframeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<WireframeMode>("hifi");

  return (
    <WireframeModeContext.Provider value={{ mode, setMode, isLofi: mode === "lofi", isMidfi: mode === "midfi", isHifi: mode === "hifi" }}>
      {children}
    </WireframeModeContext.Provider>
  );
}

export function useWireframeMode() {
  const ctx = useContext(WireframeModeContext);
  if (!ctx) throw new Error("useWireframeMode must be used within WireframeModeProvider");
  return ctx;
}
