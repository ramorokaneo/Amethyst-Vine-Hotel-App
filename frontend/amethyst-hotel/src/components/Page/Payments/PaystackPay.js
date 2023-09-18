import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PaystackButton } from "react-paystack";
import { useLocation } from "react-router-dom";

export default function PaystackPay() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalAmountWithVAT = queryParams.get("totalAmount");
  const roomImage = queryParams.get("roomImage");
  const roomName = queryParams.get("roomName");
  const checkInDate = queryParams.get("checkInDate");
  const checkOutDate = queryParams.get("checkOutDate");

  const [pay, setPay] = useState(false);
  const [billingDetail, setBillingDetail] = useState({
    billingName: "",
    billingEmail: "",
    billingMobile: "",
    amount: totalAmountWithVAT ? parseFloat(totalAmountWithVAT) : 0,
  });
  const handleOnchange = (text, input) => {
    if (input === "amount") {
      // Parse the amount and update as a float
      const numericAmount = parseFloat(text);
      setBillingDetail((prevState) => ({ ...prevState, [input]: numericAmount }));
    } else {
      setBillingDetail((prevState) => ({ ...prevState, [input]: text }));
    }
  };

  const handleSubmit = () => {
    if (
      billingDetail.billingName &&
      billingDetail.billingEmail &&
      billingDetail.billingMobile &&
      billingDetail.amount
    ) {
      // Ensure the amount is a valid number
      const numericAmount = billingDetail.amount;
      if (!isNaN(numericAmount)) {
        setPay(true);
      } else {
        toast.error("Amount must be a valid number");
      }
    } else {
      toast.error("Fill in all fields");
    }
  };

  useEffect(() => {
    // If the total amount changes externally, update the amount in the billing details
    if (totalAmountWithVAT && billingDetail.amount !== parseFloat(totalAmountWithVAT)) {
      setBillingDetail((prevState) => ({ ...prevState, amount: parseFloat(totalAmountWithVAT) }));
    }
  }, [totalAmountWithVAT]);

  return (
    <div className="App">
      <div className="appBar">
        <h1 className="appBarTitle">Payment</h1>
      </div>
      <div className="body">
        <input
          className="input"
          placeholder="Billing Name"
          onChange={(e) => handleOnchange(e.target.value, "billingName")}
          value={billingDetail?.billingName}
        />
        <input
          className="input"
          placeholder="Billing Email"
          onChange={(e) => handleOnchange(e.target.value, "billingEmail")}
          value={billingDetail?.billingEmail}
        />
        <input
          className="input"
          placeholder="Billing Mobile"
          onChange={(e) => handleOnchange(e.target.value, "billingMobile")}
          value={billingDetail?.billingMobile}
        />
        <input
          type="number" // Use a numeric input for the amount
          className="input"
          placeholder="Amount"
          onChange={(e) => handleOnchange(e.target.value, "amount")}
          value={billingDetail?.amount}
        />

        <button className="payButton" onClick={handleSubmit}>
          Pay Now
        </button>

        {pay && (
          <div className="paystack-container">
            <PaystackButton
              publicKey="pk_test_a89824b69250c3370695a7ca91dcb740d152060e"
              amount={billingDetail.amount * 100} // Convert to kobo (if your currency is not in kobo)
              currency="ZAR"
              email={billingDetail.billingEmail}
              phone={billingDetail.billingMobile}
              text="Pay Now"
              onSuccess={(response) => {
                // handle response here
                const responseObject = response.message;
                if (responseObject === "Approved") {
                  toast.success("Transaction Approved!!");
                }
              }}
              onClose={() => {
                // handle response here
                toast.error("Transaction Cancelled!!");
              }}
              autoStart={pay}
            />
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
