import React from 'react';
import '../styles.css';

function LoyaltyRewards() {
    return (
      <div className="loyalty-rewards">
        <h2 className="loyalty-title">Loyalty Rewards</h2>
        <div className="loyalty-details">
          <p className="loyalty-description">
            Your loyalty rewards program offers you great benefits for being a loyal customer:
          </p>
          <ul className="loyalty-list">
            <li>Earn 1 point for every $10 spent</li>
            <li>Points earned: 320</li>
            <li>Points used: 100</li>
            <li>Total points available: 220</li>
          </ul>
          <h3 className="rewards-title">Rewards Earned:</h3>
          <ul className="rewards-list">
            <li>10% discount on next room booking</li>
            <li>Free spa treatment</li>
            <li>Complimentary dinner at our restaurant</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default LoyaltyRewards;
