import { Link } from "react-router-dom";

const NoteList = ({ todos, title,}) => {
  return (
    <div className="todo-list">
      <h2 className="todo-list-title">{title}</h2>
      {todos.map(todo => (
        <div className="todo-list-view" key={todo.id}>
          <Link to={`/todos/${todo.id}`}>
            <p>{todo.body}</p>
            {/* <input onClick={() => {handleDelete(todo.id)}} type="checkbox" /> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
