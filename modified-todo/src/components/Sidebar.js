import React from 'react'

function Sidebar({status, changeStatus}) {
    return (
        <div>
            <div className = 'theimg'>
                <img onClick = {()=>{changeStatus()}} alt = '' src="https://img.icons8.com/windows/32/000000/macos-close.png"/>
            </div>
             <ul className = 'sideelements'>
                <li className = 'sidelistitem'>
                    Logout
                </li>
                <li className = 'sidelistitem'>
                    Profile
                </li>
                <li className = 'sidelistitem'>
                    Add Category
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
