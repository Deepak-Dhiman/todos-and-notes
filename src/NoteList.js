import { Link } from "react-router-dom";

const NoteList = ({ notes, title }) => {
  return (
    <div className="note-list">
      <h2 className="note-list-title">{title}</h2>
      {notes.map(note => (
        <div className="note-list-view" key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <h2>{note.title}</h2>
            <p>{note.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
