import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./PolicyAgreement.module.css";

const PolicyAgreement = () => {

  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

    // Retrieve confirmation data from localStorage
    const confirmationData = JSON.parse(localStorage.getItem('confirmationData'));

  return (
    <div className={styles.mainContainer}>
        <nav className={styles.navbar}>
          <h1>Amethyst Vine Hotel</h1>
          <button className={styles.whiteBtn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
    <div className="policy-container">
      <h2>Spa Etiquette and Policies</h2>
      <h3>Spa Etiquette</h3>
      <ul>
        <li>Shhhh! This means that you’ll speak softly (we call this the ‘spa voice’)</li>
        <li>Please ensure that your phone is either on Silent OR Switched off (Please respect your fellow spa guests relaxation time)</li>
        <li>Please ensure that when you are using our water facilities, that you wear a swimming costume at all times.</li>
        <li>Be punctual. Arrive at least 30 minutes before your treatment so that you have time to fill in your client form. If you are late, it will result in us “Crystal Rose Lodge” having to reduce your treatment time. It’s not fair to your fellow spa guests to pay for your tardiness, right?</li>
        <li>Let us know. Your health and well-being is incredibly important to us so please inform your therapist if you are on any medication, have high blood pressure, any heart conditions, have had surgery recently, have muscle or joint injuries, sinusitis, any allergies (especially to iodine, sulfur or nuts), are pregnant, have epilepsy, are diabetic, have eczema or psoriasis, or have recently been sunburnt.</li>
        <li>Keep covered. Please keep your underwear on during your treatments.</li>
        <li>Stay safe. Please ensure that you keep all your valuables and clothes safely stored in your locker, OR in your vehicle, Crystal Rose Lodge & Spa will not be held responsible for any loss or damage.</li>
        <li>Talk to our therapists during the massage, feel free to speak to your therapist on anything you would like to be different—more pressure, less pressure etc. Our therapists are there to make you comfortable.</li>
        <li>Talking During Treatments: You can talk during the treatment or be still, as you choose. The therapist should follow your lead. Use a quiet “spa voice” when you talk anywhere in the spa area.</li>
        <li>When the treatment is over, take it easy getting up as you should be very relaxed by now. The therapist is usually waiting outside and will walk you back to locker area, where you will get dressed.</li>
      </ul>

      <h3>Tipping</h3>
      <p>
        Tipping depends on you. If you’d like to give our therapists a gratuity for exceptional service, you are welcome to hand that directly to them, at Reception or to the Manager in charge.
      </p>

      <h3>Cancellation Policies</h3>
      <ul>
        <li>48 Hours. We know that life sometimes does not always go according to plan. However, please give us 48 hours’ notice if you need to reschedule your treatment. This gives us time to fill that space. If you do not reschedule within the 48 hour time, we have the right to charge you the full amount for the spa package/treatment booked.</li>
        <li>Do not be late. If you arrive late, the amount of time will be taken off your treatments/package. Therefore, we can attend our next Spa Guest on time.</li>
        <li>Should you have a no show, or do not arrive for the treatments without any notice – Crystal Rose Lodge does not do Refunds Nor Partial Refunds</li>
        <li>Should unforeseen circumstances occur on the day of your reservation, which results in your not being able to honor your booking, please contact us to make special arrangements. Please note that a 50% penalty fee will be charged and needs to be settled before the new appointment date.</li>
        <li>Should you be tested positive for COVID-19 or be in contact with someone who tested positive for COVID-19, please let us know at least 48hrs in advance to reschedule.</li>
      </ul>

      <h3>Payment Policies</h3>
      <p>
        All spa packages & treatments must be paid for on confirmation of the booking. Our office will send you the invoice and give you 48 hours for a 50% deposit. Your deposit secures your booking. If we do not receive a deposit within 48 hours, your booking will be forfeited and be given to the next person in line.
      </p>
    </div>
  
<Link to="/payment" className="link-button" state={{ confirmationData }}>
  Agree
</Link>

    </div>
  );
};

export default PolicyAgreement;
