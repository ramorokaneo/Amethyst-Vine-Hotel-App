import React from 'react';
import { Link } from 'react-router-dom';
import '../Landing Page/Landing-Page.css';

import image1 from '../../../assests/Images/safari.jpg';
import image2 from  '../../../assests/Images/island.jpg';
import image3 from '../../../assests/Images/facial.jpg';
import image4 from '../../../assests/Images/meal.jpg';
import image5 from '../../../assests/Images/watersport.jpg';


function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome To Amethyst Vine</h1>
      <p>Experience luxury and comfort like never before.</p>

      <div className="image-container">
        <img src={image1} alt="Image 1" className="landing-image" />
        <img src={image2} alt="Image 2" className="landing-image" />
        <img src={image3} alt="Image 3" className="landing-image" />
        <img src={image4} alt="Image 4" className="landing-image" />
        <img src={image5} alt="Image 5" className="landing-image" />
      </div>

      <Link to="/home
      " className="landing-page-button">Explore</Link>
    </div>
  );
}

export default LandingPage;
