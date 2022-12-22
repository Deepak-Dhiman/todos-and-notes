import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Link to="/todos">
        <div className="home-row">
          <h2>Todos</h2>
        </div>
      </Link>

      <Link to="/notes">
        <div className="home-row">
          <h2>Notes</h2>
        </div>
      </Link>
    </div>
  );
};

export default Home;
