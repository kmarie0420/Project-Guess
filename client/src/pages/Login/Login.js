import React, { useState } from 'react';
import { Form, Input, Button, Modal, Typography, message } from 'antd';
const { Title } = Typography;
const Login = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    console.log('Form values:', values); // Add this line for debugging
    setTimeout(() => {
      setLoading(false);
      if (values.username === 'user' && values.password === 'password') {
        message.success('Login successful');
        onClose();
      } else {
        message.error('Invalid username or password');
      }
    }, 1000);
  };
  return (
    <Modal
      title={<Title level={3}>Sign In</Title>}
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
    >
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
    </Modal>
  );
};
export default Login;