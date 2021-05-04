import React, {useState, useEffect, useRef} from 'react'
import PersonalTodos from './PersonalTodos'
import TodoTypes from './TodoTypes'
import BusinessTodos from './BusinessTodos'
import Form from './Form'

function TodoItems({items, deleteTodo}) {

    const [mode, setMode] = useState ()
    const [bustodoz, setBustodoz] = useState ([])
    const [personaltodoz, setPersonaltodoz] = useState([])
    const divref = useRef(null)
    useEffect(()=>{
        setMode(true)
    }, [])

    const addTodos = (value) => {
        if (mode === true) {
            value.id = Math.random()
            setBustodoz([...bustodoz, value])
        }
        if (mode === false) {
            value.id = Math.random()
            setPersonaltodoz([...personaltodoz, value])
        }
      }

      const clear = () => {
        if (mode === true) {
            setBustodoz([])
        }
        else {
            setPersonaltodoz([])
        }
      }

const deleteTodos = (id, arr) => {
    let newItems = arr.filter((item)=>{
        return item.id !== id
      })
      if (arr === bustodoz){
          setBustodoz(newItems)
      }
      if (arr === personaltodoz){
          setPersonaltodoz(newItems)
      }
}

    const changeMode = (bool) => {
        let themode = mode
        if (bool === themode) {
            return
        } else {
            setMode((prevMode)=>!prevMode)
            console.log(mode)
        }
    }

    let setOutput = mode === true ? <BusinessTodos clear = {clear} deleteTodo = {deleteTodos} bustodoz = {bustodoz} theref = {divref}/> : <PersonalTodos theref = {divref} clear = {clear} deleteTodo = {deleteTodos} personaltodoz = {personaltodoz} />

    return (
        <div>
            <TodoTypes changeMode = {changeMode}/>
            <Form addTodo = {addTodos}/>
            <h3>Today's tasks</h3>
            <ul className = 'todoitems' >
                {setOutput}
            </ul>
            <div className = 'clearbtn'>
                <div className = 'clear' onClick = {clear}>
                    Clear Todos
                </div>
            </div>
        </div>
    )
}

export default TodoItems

