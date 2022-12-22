import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="col1">
        <h2>ToDo & Notes</h2>
      </div>
      <div className="col2">
        <Link to="/">Home</Link>
        <Link to="/todos">Todo</Link>
        <Link to="/notes">Notes</Link>
      </div>
    </nav>
  );
};

export default Navbar;
