import './TodoList.css'

const TodoList = (props) => {
  let content = <p>There are on todos, please create one!</p>
  if (props.todos.length > 0) {
    content = <ul>
    {props.todos.map(todo => (
        <div className='todo' key={todo.id}>
          <h1 className='todo__title'>{todo.title}</h1>
          <p className='todo_description'>{todo.description}</p>
          <div className="todo__actions">
            <button type='button' className='todo__action' onClick={() => props.onRemoveTodo(todo.id)}>Delete Todo</button>
          </div>
        </div>
    ))}
</ul> 
  } 
  return (
    <div className='todo-list'>
      {content}   
    </div>
  )
};

export default TodoList;
