import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <table className="todo-container">
      <thead className="todo-item">
        <tr className="todo-item">
          <th className="todo-item">Rank</th>
          <th className="todo-item">Name</th>
          <th className="todo-item">Age</th>
          <th className="todo-item">Country</th>
          <th className="todo-item">Team</th>
        </tr>
      </thead>
      <tbody>
        <tr className="todo-item">
          {filteredTodos.map(todo => (
            <Todo text={todo.text} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default TodoList