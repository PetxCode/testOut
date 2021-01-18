import "antd/dist/antd.css";

import logo from "./logo.svg";
import "./App.css";
import ContextHome from "./Context/ContextHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContextHeader from "./Context/ContextHeader";
import ContextContent from "./Context/ContextContent";
import ContextProject from "./Context/ContextProject";
import Home from "./TheCrud/Home";
import Edit from "./TheCrud/Edit";
import Add from "./TheCrud/Add";
import { GlobalProvider } from "./ContextFile/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <ContextProject>
        <div>
          <Router>
            {" "}
            <div></div>
            <Switch>
              <Route path="/" exact component={ContextHome} />
              <Route path="/home" exact component={Home} />
              <Route path="/edit/:id" exact component={Edit} />
              <Route path="/add" exact component={Add} />
              <Route path="/content" exact component={ContextContent} />
            </Switch>
          </Router>
        </div>
      </ContextProject>
    </GlobalProvider>
  );
}

export default App;

// <ContextHeader />
