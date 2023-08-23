import React from "react";
import SearchForm from "../forms/SearchForm";
import Header from "../Extras/Header";
import Footer from "../Extras/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

import image1 from "../../assests/Images/food 1.jpg";
import image2 from "../../assests/Images/golf 1.jpg";
import image3 from "../../assests/Images/dinning out.jpg";
import image4 from "../../assests/Images/game drive.jpg";
import image5 from "../../assests/Images/spa 2.jpg";
import image6 from "../../assests/Images/lemon bath.jpg";
import image7 from "../../assests/Images/dessert.jpg";
import image8 from "../../assests/Images/beach 4.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imageStyle = {
    maxWidth: "100%", // Adjusted to 100% for full width
    height: "auto",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column", // Change to column layout
  };

  return (
    <div className="home-container">
      <Header />
      <h1>Welcome to Our Home</h1>
      <SearchForm />
      <div style={containerStyle}>
        <Slider {...sliderSettings} className="slider">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Hotel Image ${index + 1}`}
                style={imageStyle}
              />
            </div>
          ))}
        </Slider>
        <br />
        <br />
        <div className="paragraph-container">
          <p>
            Nestled in the heart of tranquil vineyards, the Amethyst Vine Hotel
            invites guests to indulge in a haven of luxury and natural beauty.
            With its stunning architecture blending seamlessly into the lush
            surroundings, the hotel offers a serene escape from the bustling
            world. Immerse yourself in tastefully designed rooms, each adorned
            with elegant amethyst accents that reflect the region's geological
            treasures. Discover culinary delights at the gourmet restaurant,
            where locally sourced ingredients harmonize with world-class
            cuisine. Whether relaxing by the infinity pool overlooking the
            sprawling vineyards or rejuvenating at the spa, every moment at
            Amethyst Vine Hotel is a symphony of comfort and refinement.
            Experience a truly enchanting retreat that weaves nature, elegance,
            and relaxation into an unforgettable tapestry.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
