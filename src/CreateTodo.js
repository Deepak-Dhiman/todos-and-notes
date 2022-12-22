import { useState } from "react";

const CreateTodo = () => {
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = e => {
    const todo = { body };

    setIsPending(true);

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      setIsPending(false);
    });
  };

  return (
    <div className="create-todo">
      <h2>Add a new todo</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        {!isPending && <button>Add Todo</button>}
        {isPending && <button disabled>Adding Todo...</button>}
      </form>
    </div>
  );
};

export default CreateTodo;
