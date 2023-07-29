// import React from 'react';

import './InventoryTableFilter.css';

const InventoryTableFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
  return (
    <div className='inventory-filter'>
      <div className='inventory-filter__control'>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        <option>filter by categories</option>
        <option>Mobile Phones</option>
        <option>PCs</option>
        <option>Games</option>
        </select>
      </div>
    </div>
  );
};

export default InventoryTableFilter;


// import React from 'react';

// import './InventoryTableFilter.css';

// const filterBy = (type='categories') => {
// if(type === "filter by categories"){

// } else if (type === "mobile phones"){

// } 
// }

//   return (
//     <div className='inventory-filter'>
//       <div className='inventory-filter__control'>
//         <select  value={props.selected} onChange={(e)=>filterBy(e.target.value)}>
//         <option>filter by categories</option>
//         <option>Mobile Phones</option>
//         <option>PCs</option>
//         <option>Games</option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default InventoryTableFilter;