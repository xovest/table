const Todo = ({ text, todo, todos, setTodos }) => {
  const completeHandler = () => {
    setTodos(todos.map(el => {
      if (el.id === todo.id) {
        return {
          ...el, completed: !el.completed
        }
      }
      return el
    }))
  }

  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  return (
    <td className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-button"><i className="fas fa-check"></i></button>
      <button onClick={deleteHandler} className="trash-button"><i className="fas fa-trash"></i></button>
    </td>
  )
}

export default Todo