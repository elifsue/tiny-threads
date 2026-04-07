/**
 * Payment method icons for Hi-Fi mode.
 * Visa (icons8 color), PayPal (icons8 fluency), Apple Pay (icons8 ios-filled), Google Pay (icons8 tal-revivo-color).
 * All icons use a fixed height with auto width so they appear the same height when displayed together.
 */

export function BankCardIcon({ size = 28 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/tJEGyRoQwAsRpZlO.png"
      alt="Bank Card"
      height={size}
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}

export function PayPalIcon({ size = 28 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/lMXgKMtEGgUTFMOG.png"
      alt="PayPal"
      height={size}
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}

export function ApplePayIcon({ size = 28 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/lBWopNxTuMFttalL.png"
      alt="Apple Pay"
      height={size}
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}

export function GooglePayIcon({ size = 28 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/dCueiClaEBILxSFt.png"
      alt="Google Pay"
      height={size}
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}

export function BankTransferIcon({ size = 28 }: { size?: number }) {
  return (
    <img
      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663332337268/AclqnWAGiPoTxiaL.png"
      alt="Bank Transfer"
      height={size}
      style={{ height: size, width: "auto", objectFit: "contain" }}
    />
  );
}
