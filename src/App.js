import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import User from "./pages/User";
function App() {
  const links = [
    {
      path: "/users",
      text: "Users",
    },
  ];
  return (
    <Router>
      <header className="p-8">
        <Navbar links={links} />
      </header>
      <main className="p-8">
        <Switch>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/user/:id">
            <User />
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
