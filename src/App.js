import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import UserProfile from "./components/userprofile/UserProfile";
import CategoryDetails from "./components/category/CategoryDetails";
import VendorsDetails from "./components/vendor/VendorDetails";
import Cart from "./components/cart/Cart";
import Wallets from "./components/wallets/Wallets";
import Payment from "./components/wallets/Payment";
import LoadMoney from "./components/wallets/LoadMoney";
import CreaditCard from "./components/wallets/CreaditCard";
import Dashboard from "./components/dashboard/Dashboard";
import CategoryList from "./components/category/CategoryList";
import Map from "./components/location/Map";
import PaymentHistory from "./components/wallets/PaymentHistory";
import Menu from "./components/menu/Menu";
import Checkout from "./components/cart/Checkout";
import PaymentCardHistory from "./components/wallets/PaymentCardHistory";
import Company from "./components/booking/Company";
import Product from "./components/booking/Product";
import BookingCart from "./components/booking/BookingCart";
import BookingCartDetail from "./components/booking/BookingCartDetail";
import AllVendor from "./components/vendor/AllVendor";
import BookingPayment from "./components/booking/BookingPayment";
import CategoryProduct from "./components/category/CategoryProduct";
import Header from "./components/header/Header";
import ChatBot from "./components/chat/ChatBot";
import RegisterBusiness from "./components/register/RegisterBusiness";
import Shops from "./components/shop/Shops";
import ManageDashboard from "./components/dashboard/ManageDashboard";
import { useSelector } from "react-redux";
import YourAccount from "./components/userprofile/account/YourAccount";
import ReferralProgram from "./components/userprofile/referralprogram/ReferralProgram";
import Filemanager from "./components/userprofile/filemanage/Filemanager";
import Documents from "./components/userprofile/document/Documents";
import Chatting from "./components/userprofile/chat/Chatting";
import Payments from "./components/userprofile/payment/Payments";



function App() {
  const { isChatOpen } = useSelector((state) => state.chatReducer);
  return (
    <div className={isChatOpen ? "activeChat" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/categorydetails" element={<CategoryDetails />} />
          <Route path="/vandordetails" element={<VendorsDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wallet" element={<Wallets />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/loadmoney" element={<LoadMoney />} />
          <Route path="/creaditcard" element={<CreaditCard />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/categorylist" element={<CategoryList />} />
          <Route path="/map" element={<Map />} />
          {/* <Route path="/map" element={<TestMap />} /> */}
          <Route path="/paymenthistory" element={<PaymentHistory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/paymentcardhistory" element={<PaymentCardHistory />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Product />} />
          <Route path="/bookingcart" element={<BookingCart />} />
          <Route path="/bookingcartdetail" element={<BookingCartDetail />} />
          <Route path="/allvandors" element={<AllVendor />} />
          <Route path="/bookingpayment" element={<BookingPayment />} />
          <Route path="/categoryproduct" element={<CategoryProduct />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/registerbusiness" element={<RegisterBusiness />} />
          <Route path="/managedashboard" element={<ManageDashboard />} />
          <Route path="/youraccount" element={<YourAccount />} />
          <Route path="/referralprogram" element={<ReferralProgram />} />
          <Route path="/filemanager" element={<Filemanager />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
