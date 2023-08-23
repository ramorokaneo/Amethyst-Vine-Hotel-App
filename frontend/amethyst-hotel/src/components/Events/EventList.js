import React from "react";
import { Link } from "react-router-dom";
import Header from "../Extras/Header";
import Footer from "../Extras/Footer";
import "../styles.css";

const eventData = [
  {
    id: 1,
    title: "Weddings",
    description: "A perfect venue for your dream wedding.",
    image: require("../../assests/Images/beach wedding.jpg"),
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Host professional events with style and efficiency.",
    image: require("../../assests/Images/office party.jpg"),
  },
  {
    id: 3,
    title: "Baby Showers",
    description:
      "Celebrate the upcoming arrival of a new member in a charming setting.",
    image: require("../../assests/Images/pexels-daniel-rocha-15853121.jpg"),
  },
  {
    id: 4,
    title: "Team Building",
    description: "Strengthen team bonds through engaging team-building events.",
    image: require("../../assests/Images/team building.jpg"),
  },
  {
    id: 5,
    title: "Birthday Parties",
    description: "Create memorable birthday celebrations for all ages.",
    image: require("../../assests/Images/birthday (1).jpg"),
  },
  {
    id: 6,
    title: "Reunions",
    description:
      "Reconnect and reminisce with your love ones and those close to your heart and memories.",
    image: require("../../assests/Images/reunion.jpg"),
  },
];

function EventList() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Host Your Special Event</h2>
        <div className="event-list">
          {eventData.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <Link to={`/details/${event.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventList;
