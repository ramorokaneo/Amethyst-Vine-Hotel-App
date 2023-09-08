import React, { useState } from 'react';
import styles from "./SearchForm.module.css";

function SearchForm({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <div className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleInputChange}
        />
        <button className={styles.white_btn} type="submit">Search</button> {/* Use styles.white_btn */}
      </form>
    </div>
  );
}

export default SearchForm;


