import React, { useState } from "react";
import "./styles.scss";
import { Form, Input, Button, Typography, Alert } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const { Text } = Typography;
const layout = {
  labelCol: {
    span: 10,
  },
};

const Login = ({ setAccessToken }) => {
  const [labelText, setLabelText] = useState(" ");
  const history = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const onFinish = (values) => {
    const API_URL = "http://localhost:4000/api/auth";
    axios
      .post(API_URL, values)
      .then((result) => {
        if (result.data.authenticated) {
          localStorage.setItem(
            "QuanLyKinhDoanh_Token",
            JSON.stringify(result.data)
          );
          setAccessToken(true);

          history.push(from);

        } else {
          setLabelText(
            <Alert message="Email or Password is incorrect !!" type="error" />
          );
          // setTimeout(() => setLabelText(" "), 3000);
        }
      })
      .catch((err) => { });
  };

  return (
    <div className="login">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item>
          <h3>Login</h3>
        </Form.Item>
        <Form.Item
          label=" Tên đăng nhập"
          name="User_Name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="User_Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Text type="danger">{labelText}</Text>


        <Form.Item >
          <Button type="primary" htmlType="submit" className="w-100">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default Login;
