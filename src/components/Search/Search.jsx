import React from "react";
import "./Search.css";
import logoSearch from '../../assets/icons8-search.svg';

const Search = ({ value, onChangeData }) => {
  
  function openSearch() {
    document.getElementById("mySearch").style.display = "block";
  }


  return (
    <div>
      <img src={logoSearch} alt="logoSearch" class="open-button" onClick={openSearch} />
      <div id="mySearch"  class="form-popup"> 
      <input
      
        className="search__input"
        type="text"
        placeholder="Enter product name"
        value={value}
        onChange={onChangeData}
      />
      </div>
    </div>
  );
};

export default Search;
