import React, { useState } from 'react';
import Header from '../Extras/Header';
import Footer from '../Extras/Footer';
import { Navigate } from 'react-router-dom';
import "../styles.css"; 
import BookingHistory from '../Profile/BookingHistory';
import LoyaltyRewards from './LoyaltyRewards';
import PaymentHistory from './PaymentHistory';

function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showBookingHistory, setShowBookingHistory] = useState(false);
  const [showLoyaltyRewards, setShowLoyaltyRewards] = useState(false);
  const [showPaymentHistory, setShowPaymentHistory] = useState(false); 

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Navigate to="/home" />;
  };

  const handleBookingHistoryClick = () => {
    setShowBookingHistory(!showBookingHistory);
    setShowLoyaltyRewards(false); // Close loyalty rewards when booking history is clicked
    setShowPaymentHistory(false); // Close payment history when booking history is clicked
  };

  const handleLoyaltyRewardsClick = () => {
    setShowLoyaltyRewards(!showLoyaltyRewards);
    setShowBookingHistory(false); // Close booking history when loyalty rewards is clicked
    setShowPaymentHistory(false); // Close payment history when loyalty rewards is clicked
  };

  const handlePaymentHistoryClick = () => {
    setShowPaymentHistory(!showPaymentHistory);
    setShowBookingHistory(false); // Close booking history when payment history is clicked
    setShowLoyaltyRewards(false); // Close loyalty rewards when payment history is clicked
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="card mt-5 pb-3">
          <div className="media">
            <img
              src="https://imgur.com/4M5LpBs.png"
              className="mr-3 img"
              height="100"
              alt="Profile"
            />
            <div className="media-body">
              <h5 className="mt-1 mb-0">Sandara Elliot</h5>
              <span className="text-muted">sandra@example.com</span>
              <br />
              <span className="text-muted">+2762589672</span>
              <p className="pt-1">Edit profile</p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3 action-container">
            <div className="d-flex flex-row align-items-center">
              <i className="fas fa-suitcase icon"></i>
              <div className="d-flex flex-row align-items-start ml-3 action-text">
                <span onClick={handleBookingHistoryClick}>Booking History</span>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3 action-container">
            <div className="d-flex flex-row align-items-center">
              <i className="fas fa-bell preview icon"></i>
              <div className="d-flex flex-row align-items-start ml-3 action-text">
                <span onClick={handleLoyaltyRewardsClick}>Vine Loyalty Rewards</span>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
              <i className="fas fa-angle-right preview"></i>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center p-3 mx-3 action-container">
            <div className="d-flex flex-row align-items-center">
              <i className="fas fa-money-bill-wave-alt icon"></i>
              <div className="d-flex flex-row align-items-start ml-3 action-text">
                <span onClick={handlePaymentHistoryClick}>Payment history</span>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
      <Footer />

      {/* Sliding animations for different sections */}
      <div className={`loyalty-rewards ${showLoyaltyRewards ? 'active' : ''}`}>
        <LoyaltyRewards />
      </div>
      
      <div className={`booking-history ${showBookingHistory ? 'active' : ''}`}>
        <BookingHistory />
      </div>
      
      <div className={`payment-history ${showPaymentHistory ? 'active' : ''}`}>
        <PaymentHistory />
      </div>
    </>
  );
}

export default ProfilePage;