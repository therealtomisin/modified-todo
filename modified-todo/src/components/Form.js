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
            <form onSubmit = {(e)=>handleSubmit(e)}>
                <input type = 'text' value = {input.val} onChange = {(e)=>handleChange(e)} />
                <input type = 'submit' value = 'submit' />
            </form>
        </div>
    )
}

export default Form