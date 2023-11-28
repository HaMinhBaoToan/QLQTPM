import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "./App.scss";
import "./assets/css/global.scss";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AppContext } from "./utils/AppContext";

// import Login from "./components/Login/index";
import LayoutPage from "./pages/Layout";


function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [accessToken, setAccessToken] = useState(false);

  const handleCollapsed = () => setCollapsed(!collapsed);
  // useEffect(() => {
  //   const tokenString = localStorage.getItem("QuanLyKinhDoanh_Token");
  //   if (tokenString) {
  //     setAccessToken(true);
  //   }
  // }, [accessToken]);
  // if (!accessToken) {
  //   return (
  //     <Router>
  //     <Switch>
  //       <Redirect exact from="/" to="/login" />
  //       <Route path="/login">
  //         <Login setAccessToken={setAccessToken} />
  //       </Route>
  //     </Switch>
  //     </Router>
  //   );
  // }


  return (
    <AppContext.Provider className="App" value={""}>
    
      <LayoutPage />
    </AppContext.Provider>
  );
}

export default App;
