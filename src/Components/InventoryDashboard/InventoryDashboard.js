import './InventoryDashboard.css'
import editIcon from './editIcon.svg';



function InventoryDashboard (props){

    return(
        <tr className='table-data-sets'>
            <td>{props.name}</td>
            <td>{props.brand}</td>
            <td>{props.category}</td>
            <td>${props.price}</td>
           <td>
           <button type='button'
            onClick={()=> props.handleEditClick(props.index)}><img className="editIcon" src={editIcon} alt={'img of icon'} />
            </button>
           </td>
            {/* <button type="click" onClick={props.handleDelete}>delete</button> */}
        </tr>
    )
}
export default InventoryDashboard
