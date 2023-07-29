import InventoryForm from "./InventoryForm"
import "./NewInventory.css"

const NewInventory = (props) => {

    const saveInventoryDataHandler = (enteredInventoryData) =>{
        const inventoryData = {
            ...enteredInventoryData,
            id: Math.random().toString()
        }
        props.onAddInventory(inventoryData) 
    }

   

    return (
        <div>
         <div className="inventory-overlay">
            <div className="new-inventory">
                <InventoryForm onSaveInventoryData={saveInventoryDataHandler} handToggleNewInventory={props.onHandToggleNewInventory}/>
            </div>
         </div>
         </div>
       
    )

}

export default NewInventory