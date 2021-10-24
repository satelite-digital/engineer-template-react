import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/page">Page</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/page">
              <Page />
            </Route>
            <Route path="/">
              Home
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  );
}

export default App;
