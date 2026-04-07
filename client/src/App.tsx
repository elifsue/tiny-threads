import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { WireframeModeProvider } from "./contexts/WireframeModeContext";
import WireframeShell from "./components/wireframe/WireframeShell";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductDetailSeller from "./pages/ProductDetailSeller";
import SellerProfile from "./pages/SellerProfile";
import SellerReviews from "./pages/SellerReviews";
import Profile from "./pages/Profile";
import Followers from "./pages/Followers";
import Followings from "./pages/Followings";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import Wallet from "./pages/Wallet";
import AddWithdrawalMethod from "./pages/AddWithdrawalMethod";
import Checkout from "./pages/Checkout";
import ShippingSelection from "./pages/ShippingSelection";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyPurchases from "./pages/MyPurchases";
import MySales from "./pages/MySales";
import TrackOrder from "./pages/TrackOrder";
import DisputeRequest from "./pages/DisputeRequest";
import DisputeStatus from "./pages/DisputeStatus";
import SellItem from "./pages/SellItem";
import EditItem from "./pages/EditItem";
import CreateBundle from "./pages/CreateBundle";
import LeaveReview from "./pages/LeaveReview";
import SavedItems from "./pages/SavedItems";
import Messages from "./pages/Messages";
import OfferSent from "./pages/OfferSent";
import OfferReceived from "./pages/OfferReceived";
import Notifications from "./pages/Notifications";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import BuyerProtection from "./pages/BuyerProtection";
import HelpCentre from "./pages/HelpCentre";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <WireframeShell>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/verify-code" component={VerifyCode} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/products" component={Products} />
        <Route path="/product-detail-buyer" component={ProductDetail} />
        <Route path="/product-detail-seller" component={ProductDetailSeller} />
        <Route path="/seller-profile" component={SellerProfile} />
        <Route path="/seller-reviews" component={SellerReviews} />
        <Route path="/profile" component={Profile} />
        <Route path="/followers" component={Followers} />
        <Route path="/followings" component={Followings} />
        <Route path="/edit-profile" component={EditProfile} />
        <Route path="/change-password" component={ChangePassword} />
        <Route path="/wallet" component={Wallet} />
        <Route path="/add-withdrawal-method" component={AddWithdrawalMethod} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/shipping-selection" component={ShippingSelection} />
        <Route path="/order-confirmation" component={OrderConfirmation} />
        <Route path="/my-purchases" component={MyPurchases} />
        <Route path="/my-sales" component={MySales} />
        <Route path="/track-order" component={TrackOrder} />
        <Route path="/dispute" component={DisputeRequest} />
        <Route path="/dispute-status" component={DisputeStatus} />
        <Route path="/sell-item" component={SellItem} />
        <Route path="/edit-item" component={EditItem} />
        <Route path="/create-bundle" component={CreateBundle} />
        <Route path="/leave-review" component={LeaveReview} />
        <Route path="/saved-items" component={SavedItems} />
        <Route path="/messages" component={Messages} />
        <Route path="/offer-sent" component={OfferSent} />
        <Route path="/offer-received" component={OfferReceived} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/about" component={About} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/buyer-protection" component={BuyerProtection} />
        <Route path="/help-centre" component={HelpCentre} />
        <Route path="/terms" component={TermsAndConditions} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route>
          <div className="p-12 text-center">
            <h1 className="text-xl font-bold mb-2">Page Not Found</h1>
            <p className="text-sm">This wireframe screen doesn't exist.</p>
          </div>
        </Route>
      </Switch>
    </WireframeShell>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <WireframeModeProvider>
          <WouterRouter base={import.meta.env.VITE_BASE_PATH || ""}>
            <TooltipProvider>
              <Toaster />
              <Router />
            </TooltipProvider>
          </WouterRouter>
        </WireframeModeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
