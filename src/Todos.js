import TodoList from "./TodoList";
import useFetch from "./useFetch";
import CreateTodo from "./CreateTodo";
// import { useHistory } from "react-router-dom";

const Todos = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todos");
  // const history = useHistory();

  // const handleDelete = x => {
  //   fetch("http://localhost:8000/todos/" + x, {
  //     method: "DELETE",
  //   }).then((data) => {
  //     history.push("/todos");
  //   });
  // };

  return (
    <div className="todos">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {todos && (
        <TodoList todos={todos} title="All Todos" />
      )}
      <CreateTodo />
    </div>
  );
};

export default Todos;
