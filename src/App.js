import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";

// ini tuh buat pengaturan router dari seluruh website
export default function App() {
  return (
    <Router>
      <Switch>
        // ini tuh penggunaan parameter di url
        <Route path="/about/:nama">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
