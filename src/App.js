import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Page from "./pages/Page";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul className="flex flex-row justify-left items-center h-8 bg-gray-900 text-white space-x-8 py-12 px-8">
            <li>
              <img src={logo} alt="Application Logo" className="h-14" />
            </li>
            <li>
              <Link to="/page">Page</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-8">
        <Switch>
          <Route path="/page">
            <Page />
          </Route>
          <Route path="/">Home</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
