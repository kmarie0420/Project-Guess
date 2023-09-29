import React, { useState } from 'react';
import { Form, Input, Button, Modal, Typography, message } from 'antd';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

const { Title } = Typography;
const Login = ({ visible, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  const onFinish = async (values) => {
    setLoading(true);
    console.log('Form values:', values);
    try {
      const { data } = await login({ variables: { ...values } });

      if (data.login) {
        message.success('Login successful');
        onClose();
      } else {
        message.error('Invalid username or password');
      }
    } catch (error) {
      console.error("Authentication Error:", error);
      message.error('Invalid username or password');
    } finally {
      setLoading(false);
    }
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