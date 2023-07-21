import { useState } from 'react'
import './NewTodo.css'
const NewTodo = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredDescription, setEnteredDescription] = useState("")

    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onAddTodo(enteredTitle, enteredDescription)
        console.log(enteredTitle, enteredDescription)
        setEnteredTitle("")
        setEnteredDescription("")
    }

    return (
        <div className="new-todo">
            <form action="" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" value={enteredDescription} onChange={descriptionChangeHandler}/>
                </div>
                <button type="submit" className='button'>Create todo</button>
            </form>
        </div>
    )
}

export default NewTodo