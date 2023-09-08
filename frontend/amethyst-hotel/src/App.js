import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/Page/Landing Page/LandingPage";
import Main from "./components/forms/Main/Main";
import Signup from "./components/forms/Signup/Signup";
import Login from "./components/forms/Login/Login";
import BookingConfirmation from "./components/Page/Confirmation/BookingConfirmation";
import payment from "./components/Page/Payments/Payment";
import HomeScreen from "./components/Page/Home/HomeScreen";
import Payment from "./components/Page/Payments/Payment";

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
			
		</Routes>
	);
}

export default App;