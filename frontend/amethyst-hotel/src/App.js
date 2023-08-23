import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import Home from "./components/Pages/Home";
import RoomList from "./components/Rooms/RoomList";
import RoomDetail from "./components/Rooms/RoomDetail";
import Reservation from "./components/Rooms/Reservation";
import RegistrationForm from "./components/forms/RegistrationForm";
import LoginForm from "./components/forms/LoginForm";
import EventList from "./components/Events/EventList";
import EventDetail from "./components/Events/EventDetail";
import EventReservation from "./components/Events/EventDetail";
import SpecialOfferList from "./components/SpecialOffers/SpecialOfferList";
import ContactUs from "./components/Pages/ContactUs";
import BookPage from "./components/Rooms/BookPage";
import ProfilePage from "./components/Profile/ProfilePage";
import SpecialOfferDetails from "./components/SpecialOffers/SpecialOfferDetails";
import BookingHistory from "./components/Profile/BookingHistory";
import LoyaltyRewards from "./components/Profile/LoyaltyRewards";
import PaymentHistory from "./components/Profile/PaymentHistory";
import PaymentOptions from "./components/Pages/PaymentOptions";
import ApplePayButton from "./components/Payments/ApplepayButton";
import GooglePayButton from "./components/Payments/GooglePayButton";
import StripeCardPayment from "./components/Payments/StripeCardPayment";
import AdminRegisterForm from "./components/Admin/AdminRegisterForm";
import Dashboard from "./components/Admin/Dashboard";
import Sidebar from "./components/Admin/Sidebar";
import MainContent from "./components/Admin/MainContent";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/reservation/:id" element={<Reservation />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/details/:id" element={<EventDetail />} />
        <Route path="/eventreservation/:id" element={<EventReservation />} />
        <Route path="/special-offers" element={<SpecialOfferList />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/special-offers/:id" element={<SpecialOfferDetails />} />
        <Route path="/booking" element={<BookingHistory />} />
        <Route path="/loyalty" element={<LoyaltyRewards />} />
        <Route path="/paymentoptions" element={<PaymentOptions />} />
        <Route path="/applepay" element={<ApplePayButton />} />
        <Route path="/googlepay" element={<GooglePayButton />} />
        <Route path="/card-payment" element={<StripeCardPayment />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/admin-register" element={<AdminRegisterForm />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/main-content" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
