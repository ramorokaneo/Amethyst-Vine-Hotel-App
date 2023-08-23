import React from "react";
import { Link } from "react-router-dom";
import Header from "../Extras/Header";
import Footer from "../Extras/Footer";

const specialOffers = [
  {
    id: 1,
    title: "Spa Treatments",
    description: "Indulge in luxurious spa treatments to relax and rejuvenate.",
    image: require("../../assests/Images/sauna.jpg"),
  },
  {
    id: 2,
    title: "Outdoor Adventures",
    description: "Embark on exciting outdoor adventures and explore the surroundings.",
    image: require("../../assests/Images/camp.jpg"),
  },
  {
    id: 3,
    title: "Relaxing Scenes",
    description: "Enjoy serene and relaxing scenes that will soothe your senses.",
    image: require("../../assests/Images/calmness.jpg"),
  },
  {
    id: 4,
    title: "Dining Experiences",
    description: "Savor exquisite dining experiences with a variety of culinary delights.",
    image: require("../../assests/Images/date lunch.jpg"),
  },
];

function SpecialOfferList() {
  return (
    <div>
      <Header />
      <h2>Special Offers</h2>
      <div className="special-offer-list">
        {specialOffers.map((offer) => (
          <div key={offer.id} className="special-offer-card">
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <Link to={`/special-offers/${offer.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default SpecialOfferList;
