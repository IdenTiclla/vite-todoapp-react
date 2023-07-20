import './NewTodo.css'

const NewTodo = () => {
    return (
        <div className="new-todo">
            <form action="">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" />
                </div>
                <button type="submit" className='button'>Create todo</button>
            </form>
        </div>
    )
}

export default NewTodo