import React, { useState } from 'react';
import './styles.scss';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  async function loginUser(credentials) {
    return fetch('http://localhost:4000/api/auth', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const Login = ({setAccesToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const accessToken = await loginUser({
          username,
          password
        });
        setAccesToken(accessToken);
    }

    return (
        <div className="login">
        <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onSubmit={handleSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          onChange={e => setUserName(e.target.value)}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          onChange={e => setPassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
        </div>
        
    );

    
}

Login.propTypes = {
    setAccessToken: PropTypes.func.isRequired
}

export default Login;