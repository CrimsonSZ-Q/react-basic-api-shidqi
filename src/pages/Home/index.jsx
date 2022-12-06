import React, { useEffect } from "react";
import Header from '../../components/Header/Header';
import Content from './fragments/content/index';
import Sidebar from './fragments/sidebar/sidebar';
import './style.css';
import { useState } from "react";

function Home({ products, addItem, removeItem, addedItems }) {
  products.map((product) => (product.isAdded = true));

    return (
      <div className='container'>
<h1 className='h1-wrapper'>Home</h1>

<div className='content-container'>

{products.map((product) => (
  <Content
    key={product.id}
    product={product}
    addItem={addItem}
    removeItem={removeItem}
    addedItems={addedItems}
  />
))}
</div>
   
   
   
    

</div>
    
      
    );
  }
  
  export default Home;