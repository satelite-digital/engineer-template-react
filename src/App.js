import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Page from "./pages/Page";
import Home from "./pages/Home";

function App() {
  const links = [
    {
      path: "/page",
      text: "Page",
    },
  ];
  return (
    <Router>
      <header className="p-8">
        <Navbar links={links} />
      </header>
      <main className="p-8">
        <Switch>
          <Route path="/page">
            <Page />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
