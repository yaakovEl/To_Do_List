import { useEffect, useState } from 'react'
import './style.css'
import NewTodoForm from './NewTodoForm'
import TodoList from './TodoList'

export default function App() {
  //שמירה באחסון המקומי

  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.getItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  //פירוט המערך
  console.log(todos)

  function toggelTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title, completed: false
        },
      ]
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return (currentTodos.filter(todo => todo.id !== id))
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className='header'>רשימת המשימות שלי</h1>
      <TodoList todos={todos}
        toggelTodo={toggelTodo}
        deleteTodo={deleteTodo} />
    </>
  )
}