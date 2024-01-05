import Todo from "../components/Todo";

export default function List({ todos, setTodos, filtered }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <Todo
            todos={todos}
            key={todo.id}
            id={todo.id}
            completed = {todo.completed}
            text={todo.text}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}
