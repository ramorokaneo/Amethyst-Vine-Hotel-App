import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.modules.css"; 

function Navbar() {
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <div className={styles.nav_list} style={{display:"flex "}}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/room">Room</Link>
          </div>
          <div>
            <Link to="/services">Services</Link>
          </div>
          <div>
            <Link to="/special-offers">Special Offers</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


