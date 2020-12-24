import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
import Dashboard from "./containers/DashBoard";
import Orders from "./containers/Orders";

function App() {
  return (
    <div className="App">    
      <Router>
        <Sidebar />   
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
