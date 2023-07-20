import './TodoList.css'

const TodoList = (props) => {
  console.log(props.todos)
  console.log(props.todos.length)

  return (
    <div className='todo-list'>
        <ul>
            {props.todos.map(todo => (
                <div className='todo'>
                  <h1 className='todo__title'>{todo.title}</h1>
                  <p className='todo_description'>{todo.description}</p>
                  <div className="todo__actions">
                    <button type='button' className='todo__action'>Delete Todo</button>
                  </div>
                </div>
            ))}
        </ul>
    </div>
  )
};

export default TodoList;
