import React, { useState } from 'react';
import InventoryTable from "./Components/InventoryDashboard/InventoryTable";
import "./App.css";
import NewInventory from "./Components/NewInventory/NewInventory";

const Initial_Product = [
  {
    name: "Samsung Galaxy S10 plus",
    brand: "Samsung Galaxy",
    category: "Phone",
    price: "800"
  },
  {
    name: "Iphone 13 pro max",
    brand: "Apple",
    // type: "Ios",
    category: "Phone",
    price: "1000"
  },
  {
    name: "Infinix Note 5",
    brand: "Infinix",
    category: "Phone",
    price: "400"
  },
  {
    name: "Redmi Note 9",
    brand: "Redmi",
    category: "Phone",
    price: "600"
  },
  {
    name: "Tecno Camon 3x",
    brand: "Tecno",
    category: "Phone",
    price: "700"
  }
]


function App(){

  const [product, setProduct] = useState(Initial_Product)

  const addInventoryHandler = products => {
    setProduct((prevProduct) => [products, ...prevProduct])
   }

   const handleEditFormChanged = (index, {name, brand, category, price}) => {
      setProduct((prevProduct) => {
        const newProduct = [...prevProduct]
        newProduct[index]= {name, brand, category, price}
        return newProduct
      })
   }

   const handleDelete = (index) => {
    const delProduct = product.filter((product, ind) => ind !== index);
    setProduct(delProduct);
  };

   const [isNewInventoryVisible, setIsNewInventoryVisible] = useState(false);
 
   const handleToggleNewInventory = () => {
    setIsNewInventoryVisible(!isNewInventoryVisible);
  };
   const handledToggleNewInventory = () => {
    setIsNewInventoryVisible(false);
  };


  return(
   <div>
     {isNewInventoryVisible && (
     <NewInventory onAddInventory={addInventoryHandler}  isNewInventoryVisible={isNewInventoryVisible} onHandToggleNewInventory={handledToggleNewInventory}/>
     )}
     <InventoryTable items={product} handleEditFormChanged={handleEditFormChanged} handleDelete={handleDelete} onHandleToggleNewInventory={handleToggleNewInventory}/> 
    </div>
)

 
}


export default App;
