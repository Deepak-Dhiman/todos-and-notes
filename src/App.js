import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Todos from "./Todos";
import Notes from "./Notes";
import FullNote from "./FullNote";
import FullTodo from "./FullTodo";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/todos">
              <Todos />
            </Route>
            <Route exact path="/notes">
              <Notes />
            </Route>
            <Route path="/notes/:id">
              <FullNote />
            </Route>
            <Route path="/todos/:id">
              <FullTodo />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
