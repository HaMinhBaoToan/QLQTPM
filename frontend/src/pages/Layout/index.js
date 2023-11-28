import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import Orders from "../Orders";
import Warehouse from "../Warehouse";
import Dashboard from "../DashBoard";
import { SidebarData } from "./SidebarData";
import HeaderPage from "./header";


const { Sider, Content } = Layout;

const LayoutPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState(SidebarData.find(_item => location.pathname === _item.path).key)
    useEffect(() => {
        setSelectedKey(SidebarData.find(_item => location.pathname === _item.path).key);
    }, [location])
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="project-name">Project SmartMan</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey.toString()]}
                    items={SidebarData}
                />

                {/* <Sidebar sidebar={collapsed} showSidebar={handleCollapsed} setAccessToken={setAccessToken} /> */}
            </Sider>
            <Layout className="site-layout">
                <HeaderPage setCollapsed={setCollapsed} collapsed={collapsed} />
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

    );

}

export default LayoutPage;