import React from "react";
import './SearchBar.css';

// this will probably need to be a class component since it will hold its own state
const SearchBar = () => {

  return(
    <div>
      <input type='searchbar' className='search-bar' placeholder='Search cities here...' />
    </div>
  )
}
export default SearchBar;