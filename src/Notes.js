import NoteList from "./NoteList";
import useFetch from "./useFetch";
import CreateNote from "./CreateNote";

const Notes = () => {
  const {
    data: notes,
    isPending,
    error,
  } = useFetch("http://localhost:8000/notes");

  return (
    <div className="notes">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {notes && <NoteList notes={notes} title="All Notes" />}
      <CreateNote />
    </div>
  );
};

export default Notes;
