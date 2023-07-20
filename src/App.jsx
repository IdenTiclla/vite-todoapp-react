import { useState } from 'react'
import './App.css'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
const DUMMY_TODOS = [
  {id: 1, title: "Ir a trotar", description: "Primera tarea del dia"},
  {id: 2, title: "Desayunar", description: "Comer un rico desayuno"},
  {id: 3, title: "Trabajar", description: "Trabajar como QA"}
]
const App = () => {
  const [todos, setTodos] = useState(DUMMY_TODOS)
  const addTodoHandler = (title, description) => {
    const newTodo = {id: Date.now(), title: title, description: description}
    setTodos([...todos, newTodo])
  }
  return (
    <>
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList todos={todos}/>
    </>
  )
}

export default App
