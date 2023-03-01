import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Type to search..." />
      <span className="search-icon">
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchBar;