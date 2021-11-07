import React from 'react';
import './SearchBar.css';

const SearchBar = ({ search, searchCities }) => {
  return(
    <div>
      <input
        type="text"
        className="search-bar"
        placeholder="Search cities here..."
        value={search}
        onChange={event => searchCities(event)}
      />
      <input
        type="submit"
      />
    </div>
  )
}

export default SearchBar;
