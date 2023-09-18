import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FacialImage from "../SpaImages/facial.jpg";
import HotstoneImage from "../SpaImages/hotstone.jpg";
import BathImage from "../SpaImages/bath.jpg"
import MassageImage from "../SpaImages/massage.jpg";
import TreatmentImage from "../SpaImages/treatment.jpg";
import HandImage from "../SpaImages/hand.jpg";
import JacuzziImage from "../SpaImages/jacuzzi.jpg";
import RealxImage from "../SpaImages/relax.jpg";
import SaunaImage from "../SpaImages/sauna.jpg";
import ToolsImage from "../SpaImages/tools.jpg";
import styles from "./Spa.module.css";;


const spaPackagesData = [
  {
    id: 1,
    name: "Ultimate Relaxation",
    description: "A day of complete relaxation with massages, facials, and more.",
    price: 500.0, // Price in ZAR
    duration: "3 hours", // Duration of the treatment
    image: FacialImage, // Image URL or path
  },
  {
    id: 2,
    name: "Luxury Renewal",
    description: "Renew your body and soul with this premium spa package.",
    price: 400.0, // Price in ZAR
    duration: "2.5 hours", // Duration of the treatment
    image: HotstoneImage, // Image URL or path
  },
  {
    id: 3,
    name: "Tranquil Serenity",
    description: "Find tranquility with a combination of massages and meditation.",
    price: 600.0, // Price in ZAR
    duration: "4 hours", // Duration of the treatment
    image: BathImage, // Image URL or path
  },
  {
    id: 4,
    name: "Elegant Escape",
    description: "Escape from the daily grind with this elegant spa experience.",
    price: 5800.0, // Price in ZAR
    image: MassageImage,
  },
  {
    id: 5,
    name: "Blissful Retreat",
    description: "Indulge in bliss and serenity with our luxurious spa treatments.",
    price: 550.0, // Price in ZAR
    image: TreatmentImage,
  },
  {
    id: 6,
    name: "Royal Pampering",
    description: "Experience pampering fit for royalty in this spa package.",
    price: 650.0, // Price in ZAR
    image: HandImage,
  },
  {
    id: 7,
    name: "Soothing Harmony",
    description: "Harmonize your body and mind with soothing spa therapies.",
    price: 520.0, // Price in ZAR
    image: JacuzziImage,
  },
  {
    id: 8,
    name: "Wellness Oasis",
    description: "Discover a wellness oasis with rejuvenating spa treatments.",
    price: 460.0, // Price in ZAR
    image: RealxImage,

  },
  {
    id: 9,
    name: "Glamorous Getaway",
    description: "Get away from it all and embrace glamour with this spa escape.",
    price: 700.0, // Price in ZAR
    image: ToolsImage,
  },
  {
    id: 10,
    name: "Opulent Tranquility",
    description: "Indulge in opulence and tranquility with this spa retreat.",
    price: 750.0, // Price in ZAR
    image: SaunaImage,
  },
];


export default function SpaPackages() {
    const [checkedItems, setCheckedItems] = useState({});
    const [cart, setCart] = useState([]); // Initialize cart as an array
    
  
    const handleCheckboxChange = (spaPackageId) => {
      setCheckedItems((prevItems) => ({
        ...prevItems,
        [spaPackageId]: !prevItems[spaPackageId],
      }));
    };
  
    const addToCart = () => {
      const itemsToAddToCart = spaPackagesData.filter(
        (spaPackage) => checkedItems[spaPackage.id]
      );
      setCart((prevCart) => [...prevCart, ...itemsToAddToCart]);
      // Clear checked items after adding to cart
      setCheckedItems({});
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
      };

      
      const handleBookAppointment = () => {
        navigate("/appointment", { state: { cart } });
      };
      

        // Calculate the total price of items in the cart
  const totalAmount = cart.reduce((total, cartItem) => total + cartItem.price, 0);

  
    return (
        <div className={styles.mainContainer}>
        <nav className={styles.navbar}>
          <h1>Amethyst Vine Hotel</h1>
          <button className={styles.whiteBtn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div>
          <h2>Our Luxury Spa Packages</h2>
          <ul>
            {spaPackagesData.map((spaPackage) => (
              <li key={spaPackage.id} className={styles.spaPackage}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedItems[spaPackage.id] || false}
                    onChange={() => handleCheckboxChange(spaPackage.id)}
                  />
                  {spaPackage.name}
                </label>
                <img
                  src={spaPackage.image}
                  alt={spaPackage.name}
                  className={styles.spaImage}
                />
                <p>{spaPackage.description}</p>
                <p>Duration: {spaPackage.duration}</p>
                <p>Price: ZAR {spaPackage.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <button onClick={addToCart}>Add Checked Items to Cart</button>
          <br/>
          <br/>
          <div className={styles.shoppingCart}>
            <h3>Shopping Cart:</h3>
            <ul>
              {cart.map((cartItem) => (
                <li key={cartItem.id}>
                  {cartItem.name} - ZAR {cartItem.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <p>Total Amount: ZAR {totalAmount.toFixed(2)}</p>
            <button onClick={handleBookAppointment} className={styles.bookAppointmentBtn}>
          Book Appointment
        </button>
          </div>
        </div>
      </div>
    );
  }