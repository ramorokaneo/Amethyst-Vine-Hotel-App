import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Page/Landing Page/LandingPage";
import Home from "./components/Page/Home/Home";
import RoomList from "./components/Page/Room List/RoomList"
import RoomDetail from "./components/Page/Room Detail/RoomDetail";
import ContactUs from "./components/Pages/Contact/ContactUs";
import Register from "./components/forms/Register";
import LoginForm from "./components/forms/Login";
import AdminRegisterForm from "./components/Admin/Forms/AdminRegisterForm";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/registration" element={<Register/>} />
        <Route path="/Login" element={<LoginForm/>} />
        <Route path="/admin-register" element={<AdminRegisterForm />} />

      </Routes>
    </Router>
  );
}

export default App;
