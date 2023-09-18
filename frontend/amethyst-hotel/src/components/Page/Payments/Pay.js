import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PaystackButton } from "react-paystack";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Pay.module.css";

export default function Pay() {
  const navigate = useNavigate();
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
    if (totalAmountWithVAT && billingDetail.amount !== parseFloat(totalAmountWithVAT)) {
      setBillingDetail((prevState) => ({ ...prevState, amount: parseFloat(totalAmountWithVAT) }));
    }
  }, [totalAmountWithVAT]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleTransactionSuccess = (response) => {
    const responseObject = response.message;
    if (responseObject === "Approved") {
      toast.success("Transaction Approved!!");
      // Redirect to the /home page when the transaction is approved
      navigate("/home");
    }
  };

  return (
    <div className={styles.mainContainer}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <button className={styles.whiteBtn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.appContainer}>
        <div className={styles.appBar}>
          <h1 className={styles.appBarTitle}>Payment</h1>
        </div>
        <div className={styles.body}>
          <input
            className={styles.input}
            placeholder="Billing Name"
            onChange={(e) => handleOnchange(e.target.value, "billingName")}
            value={billingDetail?.billingName}
          />
          <input
            className={styles.input}
            placeholder="Billing Email"
            onChange={(e) => handleOnchange(e.target.value, "billingEmail")}
            value={billingDetail?.billingEmail}
          />
          <input
            className={styles.input}
            placeholder="Billing Mobile"
            onChange={(e) => handleOnchange(e.target.value, "billingMobile")}
            value={billingDetail?.billingMobile}
          />
          <input
            type="number" // Use a numeric input for the amount
            className={styles.input}
            placeholder="Amount"
            onChange={(e) => handleOnchange(e.target.value, "amount")}
            value={billingDetail?.amount}
          />

          <button className={styles.payButton} onClick={handleSubmit}>
            Continue
          </button>

          {pay && (
            <div className={styles.paystackContainer}>
              <PaystackButton
                publicKey="pk_test_a89824b69250c3370695a7ca91dcb740d152060e"
                amount={billingDetail.amount * 100} // Convert to kobo (if your currency is not in kobo)
                currency="ZAR"
                email={billingDetail.billingEmail}
                phone={billingDetail.billingMobile}
                text="Pay Now"
                onSuccess={handleTransactionSuccess} // Handle success
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
    </div>
  );
}
