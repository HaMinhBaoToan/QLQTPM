import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.scss";
import "./assets/css/global.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import AntIcon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { AppContext } from "./utils/AppContext";

import Sidebar from "./components/Sidebar/index";
import Dashboard from "./containers/DashBoard";
import Orders from "./containers/Orders";
import OrdersDetails from "./containers/Orders_details";

import Warehouse from "./containers/Warehouse";
import Products from "./containers/Products";
import Cusomters from "./containers/Customers";
import Employees from "./containers/Employees";
import Login from "./components/Login/index";
import Report from "./containers/Report/Report";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [accessToken, setAccessToken] = useState(false);

  const handleCollapsed = () => setCollapsed(!collapsed);
  useEffect(() => {
    const tokenString = localStorage.getItem("QuanLyKinhDoanh_Token");
    if (tokenString) {
      setAccessToken(true);
    }
  }, [accessToken]);
  if (!accessToken) {
    return (
      // <Router>
      // <Switch>
      // <Redirect push to="/login"  />
      //   <Route exact path='/login'  >
      //     <Login setAccessToken={setAccessToken} />;
      //   </Route>
      //   </Switch>
      // </Router>
      <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login">
          <Login setAccessToken={setAccessToken} />;
        </Route>
      </Switch>
      </Router>
    );
  }

  return (
    <AppContext.Provider value={""}>
      <div className="App">
        <Router>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Sidebar sidebar={collapsed} showSidebar={handleCollapsed}  setAccessToken={setAccessToken}/>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background">
                <div className="hambergurIcon">
                  <AntIcon
                    className="trigger"
                    onClick={handleCollapsed}
                    component={
                      collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                    }
                  />
                </div>
              </Header>
              <Content>
                <Switch>
                  <Route path="/orders">
                    <Orders />
                  </Route>
                  <Route path="/warehouses">
                    <Warehouse />
                  </Route>
                  <Route path="/products">
                    <Products />
                  </Route>
                  <Route path="/customers">
                    <Cusomters />
                  </Route>
                  <Route path="/employees">
                    <Employees />
                  </Route>
                  <Route path="/reports">
                    <Report />
                  </Route>
                  <Route path="/orders-details">
                    <OrdersDetails />
                  </Route>
                  <Route path="/">
                    <Dashboard />
                  </Route>
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
