import { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Kratos");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = e => {
    const note = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    }).then(() => {
        setIsPending(false);
    });
  };

  return (
    <div className="create-note">
      <h2>Add a new note</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="Kratos">Kratos</option>
          <option value="Ezio">Ezio</option>
        </select>
        {!isPending && <button>Add Note</button>}
        {isPending && <button disabled>Adding Note...</button>}
      </form>
    </div>
  );
};

export default CreateNote;
