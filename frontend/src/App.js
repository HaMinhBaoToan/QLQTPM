import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "./App.scss";
import "./assets/css/global.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Menu, Button, theme, Breadcrumb, Row, Col, Avatar, Dropdown } from 'antd';
import AntIcon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined, UserOutlined,
  SolutionOutlined,
  LockOutlined,
  TranslationOutlined,
  PoweroffOutlined
} from "@ant-design/icons";
import { AppContext } from "./utils/AppContext";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './components/Sidebar/SidebarData';
import Sidebar from "./components/Sidebar/index";
import Dashboard from "./pages/DashBoard";
import Orders from "./pages/Orders";
import OrdersDetails from "./pages/Orders_details";

import Warehouse from "./pages/Warehouse";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Employees from "./pages/Employees";
// import Login from "./components/Login/index";
import Report from "./pages/Report/Report";
import * as IoIcons from 'react-icons/io';

const { Header, Sider, Content } = Layout;

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
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const dropdownAvtData = [
    
  ];
  function WidgetMenu(props) {
    return (
      <Menu {...props}>
        <Menu.Item>
          <SolutionOutlined className="icon" />
          profile
        </Menu.Item>
        <Menu.Item>
          <LockOutlined className="icon" />
          change password
        </Menu.Item>
        <Menu.Item>
          <TranslationOutlined className="icon" />
          change language
        </Menu.Item>
        <Menu.Item>
          <PoweroffOutlined className="icon" />
          sign out
        </Menu.Item>
      </Menu>
    );
  }
  return (
    <AppContext.Provider value={""}>
      <div className="App">
        <Router>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['0']}
                items={SidebarData}
              />

              {/* <Sidebar sidebar={collapsed} showSidebar={handleCollapsed} setAccessToken={setAccessToken} /> */}
            </Sider>
            <Layout className="site-layout">
              <Header style={{ padding: 0, background: colorBgContainer }}>
                <Row justify="space-between">
                  <Col>
                    <Row>
                      <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                          fontSize: '16px',
                          width: 64,
                          height: 64,
                        }}
                      />
                      <div>dádf</div>
                    </Row>
                  </Col>
                  <Col
                    style={{
                      marginRight: '20px',
                    }}
                  >
                    <Dropdown overlay={<WidgetMenu />}>
                      <Avatar
                        style={{
                          backgroundColor: '#87d068',
                        }}
                        icon={<UserOutlined />} />
                    </Dropdown>
                   
                  </Col>
                </Row>
              </Header>

              <Content className="content-side">
                <Routes>
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/warehouses" element={<Warehouse />} />
                  {/* <Route path="/products">
                  <Products />
                </Route>
                <Route path="/customers">
                  <Customers />
                </Route>
                <Route path="/employees">
                  <Employees />
                </Route>
                <Route path="/reports">
                  <Report />
                </Route>
                <Route path="/orders-details">
                  <OrdersDetails />
                </Route> */}
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
