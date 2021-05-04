import React from 'react'

function PersonalTodos({personaltodoz, deleteTodo, theref}) {

    const displayPersonal = personaltodoz.length ? ( 
        personaltodoz.map(personaltodo=>{
        return (
            <li key = {personaltodo.id}>
                <div ref={theref}>
                    <input type="checkbox" id={`vehicle${personaltodo.id}`} name={`todo${personaltodo.id}`} value="Bike" onClick = {()=>{
                        theref.current.classList.add('underline')
                    }}/>
                    <label for={`vehicle${personaltodo.val}`} onClick = {(e)=>{deleteTodo(personaltodo.id, personaltodoz)}}><strong>{personaltodo.val}</strong></label>
                </div>
            </li>
        )
    })) : ( 
    <p className = 'nothing'>Nothing to show</p>
    )

    return (
        <div className = 'todos'>
            {displayPersonal}
        </div>
    )
}

export default PersonalTodos
