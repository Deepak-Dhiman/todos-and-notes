import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const FullTodo = () => {
  const { id } = useParams();
  const {
    data: todo,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todos/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/todos/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/todos");
    });
  };

  return (
    <div className="full-todo">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {todo && (
        <article className="full-todo-view">
          <p>{todo.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default FullTodo;
