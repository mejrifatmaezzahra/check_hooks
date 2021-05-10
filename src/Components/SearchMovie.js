import React from 'react';

import Rate from './Ratings';

import "../App.css";

const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
  return (
    <div>
      <div className="search-container">
        <input
        className="name-search"
          type="text"
          
          placeholder="Type movie name to search......"
          onChange={(e) => setNameSearch(e.target.value)}
        />
        <div className="rating-search">
          <Rate Rate={ratingSearch} setRatingSearch={setRatingSearch}/>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;