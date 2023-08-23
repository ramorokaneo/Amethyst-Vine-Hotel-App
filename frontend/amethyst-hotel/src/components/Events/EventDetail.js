import React from "react";
import { useParams } from "react-router-dom";
import EventReservation from "./EventReservation";
import Header from "../Extras/Header";
import Footer from "../Extras/Footer";
import Reservation from "../Rooms/Reservation"; 

import BeachWeddingImage from "../../assests/Images/beach wedding.jpg";
import CorporateImage from "../../assests/Images/office party.jpg";
import BabyShowerImage from "../../assests/Images/pexels-daniel-rocha-15853121.jpg";
import TeamBuildingImage from "../../assests/Images/team building.jpg";
import BirthdayImage from "../../assests/Images/birthday (1).jpg";
import ClassReunionImage from "../../assests/Images/reunion.jpg";

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
function EventDetail() {
  const { id } = useParams();
  const event = eventData.find((event) => event.id === parseInt(id));

  if (!event) {
    return <div className="event-not-found">Event not found.</div>;
  }

  return (
    <div>
      <Header />
      <div className="event-detail-container">
        <img className="event-image" src={event.image} alt={event.title} />
        <div className="event-info">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          {/* Render appropriate reservation component based on the event type */}
          {event.id === 1 ? (
            <EventReservation event={event} />
          ) : (
            <Reservation event={event} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EventDetail;