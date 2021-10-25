import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Page from "./pages/Page";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <header className="p-8">
        <div class="navbar shadow-lg bg-neutral text-neutral-content rounded-box">
          <div class="flex-none px-2 mx-2">
            <img src={logo} className="h-14" />
          </div>
          <div class="flex-1 px-2 mx-2">
            <div class="items-stretch hidden lg:flex">
              <Link class="btn btn-ghost btn-sm rounded-btn" to="/page">
                Page
              </Link>
            </div>
          </div>
          <div class="flex-none">
            <button class="btn btn-square btn-ghost">
              <div class="avatar">
                <div class="rounded-full w-12 h-12">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="Avatar"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
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
