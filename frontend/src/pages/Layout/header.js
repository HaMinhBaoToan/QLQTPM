import React, { useState } from "react";
import { Layout, Menu, Button, Row, Col, Avatar, Dropdown, theme } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    SolutionOutlined,
    LockOutlined,
    TranslationOutlined,
    PoweroffOutlined
} from "@ant-design/icons";


const { Header } = Layout;

const HeaderPage = ({ collapsed, setCollapsed }) => {
// const logOut = () => {
  //   const tokenString = localStorage.getItem("QuanLyKinhDoanh_Token");
  //   if (tokenString) {
  //     localStorage.removeItem("QuanLyKinhDoanh_Token");
  //     setAccessToken(false);
  //   }
  // };
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const itemsAvt = [
        {
            label: 'profile',
            key: '1',
            icon: <SolutionOutlined className="icon" />
        },
        {
            label: 'change password',
            key: '2',
            icon: <LockOutlined className="icon" />
        },
        {
            label: ' change language',
            key: '3',
            icon: <TranslationOutlined className="icon" />
        },
        {
            label: 'sign out',
            key: '4',
            icon: <PoweroffOutlined className="icon" />
        },];

    return (
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
                    </Row>
                </Col>
                <Col
                    style={{
                        marginRight: '20px',
                    }}
                >
                    <Dropdown menu={{items:itemsAvt}}>
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />} />
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    );

}

export default HeaderPage;