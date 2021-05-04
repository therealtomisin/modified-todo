import React from 'react'

function BusinessTodos({bustodoz, deleteTodo}) {

    let displayBusiness = bustodoz.length ? ( 
        bustodoz.map(bustodo=>{
        return (
            <li onClick = {(e)=>{deleteTodo(bustodo.id, bustodoz)}} key = {bustodo.id} classname = ''>
                <div>
                    <input type="checkbox" id={`vehicle${bustodo.id}`} name={`todo${bustodo.id}`} value="Bike"/>
                    <label for={`vehicle${bustodo.val}`}><strong>{bustodo.val}</strong></label>
                </div>
            </li>
        )
    })) : ( 
    <p className = 'nothing'>Nothing to show</p>
    )

    return (
        <div className = 'todos'>
            {displayBusiness}
        </div>
    )
}

export default BusinessTodos
