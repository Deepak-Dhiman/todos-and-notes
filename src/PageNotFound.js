import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Link className="page-not-found-link" to="/">
        <h2>404 Error!!!!</h2>
        <h3>Click to go to the home page</h3>
      </Link>
    </div>
  );
};

export default PageNotFound;
