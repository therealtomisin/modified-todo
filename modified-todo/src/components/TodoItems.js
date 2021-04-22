import React from 'react'

function TodoItems({items, deleteTodo}) {

const list = items.lenght >= 1 ? ( 
    items.map(item=>{
    return (
        <li onClick = {()=>{}} key = {item.id}>{item.val}</li>
    )
})) : ( 
<p>Nothing to show</p>
)

    return (
        <ul>
            {list}
        </ul>
    )
}

export default TodoItems
