import React, {useState} from 'react'
import TodoItems from './components/TodoItems'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Nav from './components/Nav'
import './css/style.css';

function App() {

const [status, setStatus] = useState ('inactive')

const changeStatus = () => {
  if (status === 'inactive'){
    setStatus('active')
  } else {
    setStatus('inactive')
  }
}

  return (
    <div className = 'App'>
      <div className={`sidebar ${status}`}>
        <Sidebar status = {status} changeStatus={changeStatus} />
      </div>
      <div className = 'mainapp'>
        <nav className = 'navbar'>
          <Nav />
        </nav>
        <Header status = {status} changeStatus = {changeStatus} />
        <TodoItems/>
      </div>
    </div>
  )
}

export default App