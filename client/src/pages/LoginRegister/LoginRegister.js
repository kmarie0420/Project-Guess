import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Card, Typography, message } from 'antd';
const { Title } = Typography;
import './LoginRegister.css';
import LoginRegister from './pages/LoginRegister/LoginRegister';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Simulate a login request (replace with your actual authentication logic)
    setTimeout(() => {
      setLoading(false);

      if (values.username === 'user' && values.password === 'password') {
        message.success('Login successful');
        // Redirect to the dashboard or other page here
      } else {
        message.error('Invalid username or password');
      }
    }, 1000);
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6}>
        <Card>
          <Title level={3}>Login</Title>
          <Form onFinish={onFinish}>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true, message: 'Please enter your username' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;