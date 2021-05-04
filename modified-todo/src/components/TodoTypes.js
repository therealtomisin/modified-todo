import React from 'react'

function TodoTypes({mode, changeMode}) {

    return (
        <div className = 'todotypes' >
            <div className = 'business' onClick = {()=>changeMode(true)}>
                Business Todos
            </div>
            <div className = 'personal' onClick = {()=>changeMode(false)}>
                Personal Todos
            </div>
        </div>
    )
}

export default TodoTypes
