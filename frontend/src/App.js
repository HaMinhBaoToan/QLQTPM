import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.scss";
import "./assets/css/global.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
import Dashboard from "./containers/DashBoard";
import Orders from "./containers/Orders";
import Warehouse from "./containers/Warehouse";
import { Layout } from "antd";
import AntIcon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { AppContext } from "./utils/AppContext";
import Products from "./containers/Products";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => setCollapsed(!collapsed);

  return (
    <AppContext.Provider value={""}>
      <div className="App">
        <Router>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Sidebar sidebar={collapsed} showSidebar={handleCollapsed} />
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
                    <h3>This page is updating !</h3>
                  </Route>
                  <Route path="/staffs">
                    <h3>This page is updating !</h3>
                  </Route>
                  <Route path="/reports">
                    <h3>This page is updating !</h3>
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
