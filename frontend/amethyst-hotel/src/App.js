import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/Page/Landing Page/LandingPage";
import Home from "./components/Page/Home/Home";
import RoomList from "./components/Page/Room List/RoomList"
import RoomDetail from "./components/Page/Room Detail/RoomDetail";
import ContactUs from "./components/Pages/Contact/ContactUs";
import Signup from "./components/forms/Signup/Signup";
import LoginForm from "./components/forms/Login/Login";
import AdminRegisterForm from "./components/Admin/Forms/AdminRegisterForm";
import Main from "./components/forms/Main/Main";




function App() {
  const user = localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/rooms/:id" element={<RoomDetail />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<LoginForm/>} />
        {user && <Route path="/main" exact element={<Main />} />}
        <Route path="/admin-register" element={<AdminRegisterForm />} />

      </Routes>
    </Router>
  );
}

export default App;
