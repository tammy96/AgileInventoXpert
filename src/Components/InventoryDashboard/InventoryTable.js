import React, { useState, Fragment } from "react";
import InventoryDashboard from "./InventoryDashboard";
import logos from './logos.png';
import './InventoryTable.css'
import InventoryTableFilter from "./InventoryTableFilter";
import InventoryEdiTable from "./InventoryEdiTable";


function InventoryTable(props){

  const [filteredCategory, setFilteredCategory] = useState(props.items.category)

  const filterChangeHandler = selectedCategory => {
    setFilteredCategory(selectedCategory);
    console.log(filteredCategory)
  }

  // const [isNewInventoryVisible, setIsNewInventoryVisible] = useState(true);
  // const handleToggleNewInventory = () => {
    // setIsNewInventoryVisible(!isNewInventoryVisible);
    // setIsShown(!isShown)
    // console.log(isNewInventoryVisible)
  // };








  const [editTableId, setEditTableId] = useState(null)
  // const [editTableId, setEditTableId] = useState(0)

  const handleEditClick = (index) => {
      setEditTableId(index) 
      // alert(`this is it ${index}`)
  }

  const editDone = () => {
    setEditTableId(null)
  }

  

return (
  <div className="container">
      <div className="form-hand">
             <div className="search-bar">
             <input className="search-bar" type="text" placeholder="Search"/>
             </div>

             <div>
             <InventoryTableFilter selected={filteredCategory} onChangeFilter={filterChangeHandler} />
             </div>
              <button className="buttons" type="click" onClick={props.onHandleToggleNewInventory}  style={{cursor: 'pointer'}}><img className="logos" src={logos} alt={'img of icon'} /> Add Product</button>
            </div>
           <form>
      <table>
        <thead className='table-data-sets'>
            <tr>
            <th id="tr">
                Product Name
            </th>
            <th id="tr">
                Product Brand
            </th>
            <th id="tr">
                Product Category
            </th>
            <th id="tr">
                Product Price
            </th>
            <th id="tr">
               Actions
            </th>
            </tr>
        </thead>

        <tbody className='table-data-sets'>
    
          {props.items.map(({name, brand, category, price}, index) => {
            return (
            <Fragment>
              {editTableId === index ? (
                <InventoryEdiTable editItems={{name, brand, category, price}} handleEditDone={(newProduct)=>{props.handleEditFormChanged(index,newProduct)
                editDone()
              
                }
              }  handleDelete={()=>{props.handleDelete(index);
                editDone()
              }}
                  /> ): (
                  <InventoryDashboard
                  key={index}
                  name={name}
                  brand={brand}
                  category={category}
                  price={price} 
                  index={index}
                  handleEditClick = {handleEditClick}
                  />
                )}
            </Fragment>
            );

          })}
        </tbody>
      </table>
    </form>
  </div>
  )
}

export default InventoryTable