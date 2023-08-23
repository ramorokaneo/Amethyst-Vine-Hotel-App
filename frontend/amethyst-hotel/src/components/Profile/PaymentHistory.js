import React from 'react';
import '../styles.css';

function PaymentHistory() {
  return (
    <div className="payment-history">
      <h2 className="history-title">Payment History</h2>

      <div className="payment-section">
        <h3 className="section-title">Room Payment History</h3>
        <ul className="payment-list">
          <li>
            <span className="payment-date">2023-08-01</span>
            <span className="payment-amount">$250</span>
          </li>
          <li>
            <span className="payment-date">2023-07-15</span>
            <span className="payment-amount">$200</span>
          </li>
          {/* ... Add more room payment history items ... */}
        </ul>
      </div>

      <div className="payment-section">
        <h3 className="section-title">Restaurant Payment History</h3>
        <ul className="payment-list">
          <li>
            <span className="payment-date">2023-08-05</span>
            <span className="payment-amount">$50</span>
          </li>
          <li>
            <span className="payment-date">2023-07-20</span>
            <span className="payment-amount">$70</span>
          </li>
          {/* ... Add more restaurant payment history items ... */}
        </ul>
      </div>

      <div className="payment-section">
        <h3 className="section-title">Spa Payment History</h3>
        <ul className="payment-list">
          <li>
            <span className="payment-date">2023-08-10</span>
            <span className="payment-amount">$120</span>
          </li>
          {/* ... Add more spa payment history items ... */}
        </ul>
      </div>

      <div className="payment-section">
        <h3 className="section-title">Outdoor Adventure Payment History</h3>
        <ul className="payment-list">
          <li>
            <span className="payment-date">2023-08-12</span>
            <span className="payment-amount">$80</span>
          </li>
          {/* ... Add more outdoor adventure payment history items ... */}
        </ul>
      </div>
    </div>
  );
}

export default PaymentHistory;
