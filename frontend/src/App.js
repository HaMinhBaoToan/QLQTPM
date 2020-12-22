import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./containers/DashBoard";
import Orders from "./containers/Orders";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
