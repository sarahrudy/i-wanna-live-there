import React from "react";
import './SearchBar.css';
import searchIcon from '../../images/search.png'

// this will probably need to be a class component since it will hold its own state
const SearchBar = () => {

  return(
    <div className='search-bar-container'>
      <img src={ searchIcon } className='search-icon' alt='search button'></img>
      <input type='searchbar' className='search-bar' placeholder='Search cities here...' />
    </div>
  )
}
export default SearchBar;