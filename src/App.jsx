import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/index';
import Feature from './pages/Feature/index';
import Product from './pages/Product/index';
import Account from './pages/Account/index';
import Search from './components/Search/Search';
import Button from './components/button/Button';
import AddProducts from './components/addproducts/AddProducts';
import Category from './components/categories/index';


function App() {

  const [menu, setMenu] = useState(1);
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [searchCategory, setSearchCategory] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setSearchCategory(data));
  }, []);
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);


  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }


  function changingSearchCategory(e) {
    setSearchCategory(e.target.value);
}

const itemsCategory = categories.filter((category) =>
category.includes(searchCategory)
);

  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }

 

  const content = () => {
    if (menu === 1) {return <Home 
      products={itmesFilter}
      addItem={addItem}
      removeItem={removeItem}
      addedItems={addedItems} />}
    else if(menu === 2) {return <Feature />}
    else if(menu === 3) {return <Product />}
    else if(menu === 4) {return <Account />}
  }

  console.log("searchcategory = ", searchCategory)
  console.log("kategori filter=", itemsCategory)
  console.log("titke = ", searchValue)  
  console.log("title filter = ", itmesFilter)

  return (
    <div className='App'>
    <Header onClick={setMenu} />
    <Category 
    products={items}
    value={searchCategory}
    onChangeData={changingSearchCategory}

   />
    
    <Search 
        products={items}
        value={searchValue}
        onChangeData={changingSearchData}  />
    <Button num={addedItems.length} click={setShowAddProducts} />
    {showAddProducts && (
        <AddProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />)}
    {content()}
    </div>
  );
}

export default App;
