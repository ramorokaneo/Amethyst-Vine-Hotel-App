import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Make an API request to fetch payment history data
    axios.get("/api/payments").then((response) => {
      setPayments(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Payment History</h2>
      {/* Render payment history data */}
      <ul>
        {payments.map((payment) => (
          <li key={payment.id}>{payment.amount} - {payment.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
