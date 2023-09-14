import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

import SearchForm from '../Search/SearchForm';

import image1 from './HomeImages/thedish.jpg';
import image2 from './HomeImages/golfball.jpg';
import image3 from './HomeImages/gamedrive.jpg';
import image4 from './HomeImages/islandpool.jpg';
import image5 from './HomeImages/spabed.jpg';
import image6 from './HomeImages/dessert.jpg';
import image7 from './HomeImages/dinningout.jpg';
import image8 from './HomeImages/beach4.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faUtensils, faSpa, faCalendarAlt, faHiking, faPhoneAlt, faPerson, faHouse } from '@fortawesome/free-solid-svg-icons';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

function HomeScreen() {
  return (
    <div className={styles.home_container}>
      <nav className={styles.navbar}>
        <h1>Amethyst Vine Hotel</h1>
        <ul className={styles.navigation_list}>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li>
            <Link to="/rooms">
              <FontAwesomeIcon icon={faBed} /> Rooms
            </Link>
          </li>
          <li>
            <Link to="/dining">
              <FontAwesomeIcon icon={faUtensils} /> Dining
            </Link>
          </li>
          <li>
            <Link to="/spa">
              <FontAwesomeIcon icon={faSpa} /> Spa
            </Link>
          </li>
          <li>
            <Link to="/activities">
              <FontAwesomeIcon icon={faHiking} /> Activities
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FontAwesomeIcon icon={faPhoneAlt} /> Contact
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <FontAwesomeIcon icon={faCalendarAlt} /> Admin
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faPerson} /> Profile
            </Link>
          </li>
        </ul>
        <SearchForm />
      </nav>
      <div className="container">
        <div className={styles.content_container}>
          <div className={styles.text_container}>
            <div className={styles.paragraph_container}>
              <p> Nestled in the heart of tranquil vineyards, the Amethyst Vine Hotel
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
          <div className={styles.horizontal_image_list}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hotel Image ${index + 1}`}
                className={styles.image_style}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
