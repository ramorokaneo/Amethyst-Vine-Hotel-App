import React from "react";
import styles from "./Main.module.css";
import GuestInfoForm from "../../Page/Guest/GuestInfo";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={styles.guest_info_container}>
        <GuestInfoForm />

      </div>
    </div>
  );
};

export default Main;

