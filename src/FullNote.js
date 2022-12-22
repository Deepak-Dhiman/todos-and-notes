import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const FullNote = () => {
  const { id } = useParams();
  const {
    data: note,
    isPending,
    error,
  } = useFetch("http://localhost:8000/notes/" + id);
  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/notes");
    });
  };

  return (
    <div className="full-note">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {note && (
        <article className="full-note-view">
          <h2>{note.title}</h2>
          <p>Written by {note.author}</p>
          <p>{note.body}</p>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default FullNote;
