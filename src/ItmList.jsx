import React from 'react'

function ItemList({items})

{
    return(
        <ul>
            {items.map((item,i) =>(
        <li key={i}> {items}</li> 
        ))}
        </ul>
    );
}
export default ItemList;