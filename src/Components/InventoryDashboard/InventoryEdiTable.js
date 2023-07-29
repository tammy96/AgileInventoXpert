import React, { useState } from "react"
import './InventoryEdiTable.css'
import deleteIcon from './deleteIcon.svg';
import saveIcon from './saveIcon.svg';



// const InventoryEdiTable = ({editFormData, handleEditFormChange}) => {
const InventoryEdiTable = (props) => {

    const [enteredName, setEnteredName] = useState(props.editItems?.name)
    const [enteredBrand, setEnteredBrand] = useState(props.editItems?.brand)
    const [enteredCategory, setEnteredCategory] = useState(props.editItems?.category)
    const [enteredPrice, setEnteredPrice] = useState(props.editItems?.price)


    const nameChangeHandlers = (event) => {
        event.preventDefault()
        setEnteredName(event.target.value)

    }

    const brandChangeHandlers = (event) => {
        event.preventDefault()
        setEnteredBrand(event.target.value)

    }

    const categoryChangeHandlers = (event) => {
        event.preventDefault()
        setEnteredCategory(event.target.value)

    }

    const priceChangeHandlers = (event) => {
        event.preventDefault()
        setEnteredPrice(event.target.value)

    }
   
    return (
        <tr>
        <td>
            <input type="text" name="name" value={enteredName} placeholder="Enter Product Name" onChange={nameChangeHandlers} required="required" />
        </td>
        <td>
            <input type="text" name="brand" value={enteredBrand} placeholder="Enter Product Brand" required="required" onChange={brandChangeHandlers} />
        </td>
       
        <td>
        <select required="required" value={enteredCategory} onChange={categoryChangeHandlers}>
                <option>Product Category</option>
                <option>Phones</option>
                <option>Computers</option>
                <option>Play Station</option>
            </select>
        </td>
        <td>
            <input type="number" name="price" value={enteredPrice} placeholder="Enter Product Price" required="required" onChange={priceChangeHandlers} />
        </td>

        <td className="handleFlex">
            <button type="submit" onClick={()=>props.handleEditDone({
                name: enteredName,
                brand: enteredBrand,
                category: enteredCategory,
                price: enteredPrice
            })}><img className="saveIcon" src={saveIcon} alt={'img of icon'} /></button>
            <button type="click" onClick={props.handleDelete}><img className="deleteIcon" src={deleteIcon} alt={'img of icon'} /></button>
        </td>


        {/* <td>
          <button className="clicked">hello</button>
          <button>hello</button>
        </td> */}
       
            
    </tr>
    )
}

export default InventoryEdiTable