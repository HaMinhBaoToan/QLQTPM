import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css";
import "./App.scss";
import "./assets/css/global.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import AntIcon, {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { AppContext } from "./utils/AppContext";

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

  return (
    <AppContext.Provider value={""}>
      <div className="App">
        <Router>
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Sidebar sidebar={collapsed} showSidebar={handleCollapsed} setAccessToken={setAccessToken} />
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
