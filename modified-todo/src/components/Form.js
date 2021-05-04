import React, {useState} from 'react'

function Form(props) {

    const [input, setInput] = useState({val: '', id: ''})

    const handleChange = (e) => {
        setInput({...input, val: e.target.value})
    }

    const handleSubmit = (e) => {
        props.addTodo(input)
        setInput({val: '', id: ''})
        e.preventDefault()
    }

    return (
        <div>
            <form className = 'form' onSubmit = {(e)=>handleSubmit(e)}>
                <input className = 'input' type = 'text' value = {input.val} onChange = {(e)=>handleChange(e)} />
                <input className = 'btn' type = 'submit' value = 'Add' />
            </form>
        </div>
    )
}

export default Form