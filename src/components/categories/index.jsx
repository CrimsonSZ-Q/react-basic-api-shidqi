import React, { useEffect, useState } from "react";
import "./styles.css";

const Categories = ({value, onChangeData}) => {
  

  return (
    <div className="category__container">
      <label for="cars">Choose a category:</label>
      <select name="cars" id="cars" onChange={onChangeData}>
        <option>All</option>
      {value?.map((item) => {
          return <option value={item}>{item}</option>;
        })}
        
      </select>
    </div>
  );
};

export default Categories;
