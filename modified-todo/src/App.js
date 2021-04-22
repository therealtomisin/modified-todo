import React, {useState} from 'react'
import Form from './components/Form'
import TodoItems from './components/TodoItems'

function App() {

const [items, setItems] = useState([])

const addTodos = (value) => {
  value.id = Math.random()
  test()
  setItems([...items, value])
  console.log(items.length)
}

const test = () => {
  let okoto = ['dsa']
  let jasper = okoto.length ? (console.log('yes')):(console.log('no'))
}

const clearTodos = () => {
  setItems([])
}
  return (
    <div>
      <Form addTodo = {addTodos}/>
      <TodoItems items = {items}/>
    </div>
  )
}

export default App