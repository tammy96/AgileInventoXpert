import React, { useState } from "react"
import "./InventoryForm.css"
import { FaTimes } from "react-icons/fa";

const InventoryForm = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredBrand, setEnteredBrand] = useState('')
    const [enteredCategory, setEnteredCategory] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')

//    const [userInput, setUserInput] =useState(
//         {
//             enteredName: "",
//             enteredBrand: "",
//             enteredCategory: "",
//             enteredPrice: "",
//         }
//     )

    const nameChangeHandler = (event) => {
        event.preventDefault()

          //method 1
          setEnteredName(event.target.value)

        // method 2
        // setUserInput({
        //     ...userInput,
        //     enteredName: event.target.value,
        // })

        //method 3
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredName: event.target.value
        //     }
        // });

    }

    const brandChangeHandler = (event) => {

          //method 1
          setEnteredBrand(event.target.value)

        // method 2
        // setUserInput({
        //     ...userInput,
        //     enteredBrand: event.target.value,
        // })

        //method 3
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredBrand: event.target.value
        //     }
        // });
    }

    const categoryChangeHandler = (event) => {
          //method 1
          setEnteredCategory(event.target.value)

        // method 2
        // setUserInput({
        //     ...userInput,
        //     enteredCategory: event.target.value,
        // })

        //method 3
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredCategory: event.target.value
        //     }
        // });
    }
    
    const priceChangeHandler = (event) => {
        //method 1
        setEnteredPrice(event.target.value)
        //method 2
        // setUserInput({
        //     ...userInput,
        //     enteredPrice: event.target.value,
        // })

        // //method 3
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredPrice: event.target.value
        //     }
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const inventoryData =  {
            name: enteredName,
            brand: enteredBrand,
            category: enteredCategory,
            price: enteredPrice
        }

        props.onSaveInventoryData(inventoryData);
        setEnteredName("");
        setEnteredBrand("");
        setEnteredCategory("");
        setEnteredPrice("");

        props.handToggleNewInventory()

    }

    


    return (
    <form className="inventory-form-box" onSubmit={submitHandler}>
    <div>
       <div className="top">
       <h2>Add Product</h2>
        <FaTimes className="icon" size={24} color="black" onClick={props.handToggleNewInventory} />

       </div>

        <div className="new-inventory__controls">

            <div className="new-inventory__control">
            <label>Name</label>
            <input type="text" placeholder="Type Product Name" required value={enteredName} onChange={nameChangeHandler} />
            </div>

            <div className="new-inventory__control">
            <label>Brand</label>
            <input type="text" placeholder="Type Product Brand" required value={enteredBrand} onChange={brandChangeHandler} />
            </div>

            <div className="new-inventory__control">
            <label>Category</label>
            <select onChange={categoryChangeHandler} required value={enteredCategory}>
                <option>Category</option>
                <option>Phones</option>
                <option>Computers</option>
                <option>Games</option>
            </select>
            </div>

            <div className="new-inventory__control">
            <label>Price</label>
            <input type="number" min="0.01" step="0.01" placeholder="Type Product Price" required value={enteredPrice} onChange={priceChangeHandler} />
            </div>

            <div className="new-inventory__actions">
                <button type="submit">Add New Product</button>
                {/* <button type="submit" onClick={props.handToggleNewInventory}>Add New Product</button> */}
            </div>
            
        </div>
        </div>
    </form>
    )
}

export default InventoryForm