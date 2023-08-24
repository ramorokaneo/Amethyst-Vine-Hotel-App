import React from "react";
import { Link } from "react-router-dom";
import Header from "../Extras/Header";
import Footer from "../Extras/Footer";
import WifiIcon from "@mui/icons-material/Wifi";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import BathtubIcon from "@mui/icons-material/Bathtub";
import TvIcon from "@mui/icons-material/Tv";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import PoolIcon from "@mui/icons-material/Pool";

const roomData = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "A spacious room with a view of the city.",
    price: 1224,
    image: require("../../assests/Images/Bedroom1.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 2,
    name: "Twin Room",
    description: "A spacious room with a view of the city.",
    price: 1143,
    image: require("../../assests/Images/Bedroom 2.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'TV'],
  },
  {
    id: 3,
    name: "Haddasah Suite",
    description: "A spacious room with a view of the city.",
    price: 1251,
    image: require("../../assests/Images/Bedroom 3.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 4,
    name: "Blair Suite",
    description: "A spacious room with a view of the city.",
    price: 1390,
    image: require("../../assests/Images/bedroom 4.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV'],
  },
  {
    id: 5,
    name: "Zapphora Suite",
    description: "A spacious room with a view of the city.",
    price: 3420,
    image: require("../../assests/Images/bedroom 5.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'TV', 'Private Garden'],
  },
  {
    id: 6,
    name: "Manroe Suite",
    description: "A spacious room with a view of the city.",
    price: 3800,
    image: require("../../assests/Images/Bedroom 6.jpg"),
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Mini-bar', 'Private Bathroom', 'Private Pool', 'TV'],
  },
];

function getAmenityIcon(amenity) {
  switch (amenity) {
    case 'Free Wi-Fi':
      return <WifiIcon />;
    case 'Air Conditioning':
      return <AcUnitIcon />;
    case 'Mini-bar':
      return <LocalBarIcon />;
    case 'Private Bathroom':
      return <BathtubIcon />;
    case 'TV':
      return <TvIcon />;
    case 'Private Garden':
      return <NaturePeopleIcon />;
    case 'Private Pool':
      return <PoolIcon />;
    default:
      return null;
  }
}

function RoomList() {
  const currencySymbol = "ZAR";

  return (
    <div>
      <Header />
      <h2>Choose a Room</h2>
      <div className="room-list">
        {roomData.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <div className="amenities-row">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="amenity">
                  {getAmenityIcon(amenity)} <span>{amenity}</span>
                </div>
              ))}
            </div>
         
            <p>Price: {room.price} {currencySymbol} per night</p>
            <Link to={`/rooms/${room.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default RoomList;