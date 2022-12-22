import TodoList from "./TodoList";
import useFetch from "./useFetch";
import CreateTodo from "./CreateTodo";

const Todos = () => {
  const {
    data: todos,
    isPending,
    error,
  } = useFetch("http://localhost:8000/todos");

  return (
    <div className="todos">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {todos && <TodoList todos={todos} title="All Todos" />}
      <CreateTodo />
    </div>
  );
};

export default Todos;
