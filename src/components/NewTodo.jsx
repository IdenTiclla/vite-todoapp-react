import { useState } from 'react'
import './NewTodo.css'
const NewTodo = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredDescription, setEnteredDescription] = useState("")

    const [enteredTitleIsValid, setEnteredTitleIsValid] = useState(true)
    const [enteredDescriptionIsValid, setEnteredDescriptionIsValid] = useState(true)


    
    const titleChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setEnteredTitleIsValid(true)
        }
        else {
            setEnteredTitleIsValid(false)
        }
        setEnteredTitle(event.target.value)
    }

    const descriptionChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setEnteredDescriptionIsValid(true)
        }
        else {
            setEnteredDescriptionIsValid(false)
        }
        setEnteredDescription(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        
        if (enteredTitle.trim().length === 0) {
            setEnteredTitleIsValid(false)
            // return
        }

        if (enteredDescription.trim().length === 0) {
            setEnteredDescriptionIsValid(false)
            // return
        }

        if (enteredTitle.trim().length === 0 || enteredDescription.trim().length === 0) {
            return
        }


        props.onAddTodo(enteredTitle, enteredDescription)
        console.log(enteredTitle, enteredDescription)
        setEnteredTitle("")
        setEnteredDescription("")
    }

    return (
        <div className="new-todo">
            <form action="" onSubmit={submitHandler}>
                <div className="form-group">
                    <label style={{ color: !enteredTitleIsValid ? 'red' : 'green'}} htmlFor="title">Title</label>
                    <input style={{backgroundColor: !enteredTitleIsValid ? 'red': 'green'}} type="text" id="title" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="form-group">
                    <label style={{color: !enteredDescriptionIsValid ? 'red': 'green'}} htmlFor="description">Description</label>
                    <input style={{backgroundColor: !enteredDescriptionIsValid ? 'red' : 'green'}} type="text" id="description" value={enteredDescription} onChange={descriptionChangeHandler}/>
                </div>
                <button type="submit" className='button'>Create todo</button>
            </form>
        </div>
    )
}

export default NewTodo