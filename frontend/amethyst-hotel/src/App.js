import {Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/Page/Landing Page/LandingPage";
import Main from "./components/forms/Main/Main";
import Signup from "./components/forms/Signup/Signup";
import Login from "./components/forms/Login/Login";
import BookingConfirmation from "./components/Page/Confirmation/BookingConfirmation";
import HomeScreen from "./components/Page/Home/HomeScreen";
import Payment from "./components/Page/Payments/Payment";
import RoomList from "./components/Page/Rooms/RoomList/RoomList";
import RoomDetail from "./components/Page/Rooms/RoomDetails/RoomDetail";
import Reservation from "./components/Page/Rooms/RoomResrvation/Reservation";
import AdminLogin from "./components/Admin/Forms/AdminLogin/AdminLogin";
import AdminSignup from "./components/Admin/Forms/AdminSignup/AdminSignup";
import AdminMain from "./components/Admin/Forms/AdminMain/AdminMain";
import Profile from "./components/Page/UserProfile/Profile";




function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<LandingPage />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/main" exact element={<Main />} />
			<Route path="/booking-confirmation/:title/:surname/:name/:phoneNumber/:email" element={<BookingConfirmation />} />
			<Route path="/payment-gateway" exact element={<Payment />} />
			<Route path="/home" exact element={<HomeScreen />} />
			<Route path="/room" exact element={<RoomList />} />
			<Route path="/room/:id" element={<RoomDetail />} />
			<Route path="/reservation/:id" element={<Reservation />} />
			<Route path="/admin" element={<AdminLogin />} />
			<Route path="/adminsignup" element={<AdminSignup />} />
			<Route path="/adminmain" element={<AdminMain />} />
			<Route path="/profile" element={<Profile />} />
			
		</Routes>
	);
}

export default App;