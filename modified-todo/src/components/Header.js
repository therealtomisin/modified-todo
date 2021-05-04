import React from 'react'

function Header({status, changeStatus}) {

const menuClass = status === 'active' ? 'inactive' : 'active'


    return (
        <div className = 'header'>
            <div className = {menuClass} onClick = {()=>{
                changeStatus()
            }}>
                <img className = 'menu' alt = 'menu' src="https://img.icons8.com/cotton/64/000000/menu.png"/>
            </div>
           <strong className = 'whatsup'>What's up ?</strong> 
        </div>
    )
}

export default Header
