import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.scss";
import "./assets/css/global.scss"
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/index";
import Dashboard from "./containers/DashBoard";
import Orders from "./containers/Orders";
import { Layout } from "antd";
import AntIcon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => setCollapsed(!collapsed)

  return (
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
                <AntIcon className='trigger'
                  onClick={handleCollapsed} component={collapsed ? MenuUnfoldOutlined : MenuFoldOutlined} />
              </div>
            </Header>
            <Content>
              <Switch>
                <Route path="/orders">
                  <Orders />
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
  );
}

export default App;
