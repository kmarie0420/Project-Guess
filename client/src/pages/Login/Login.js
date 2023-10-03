import React, { useState } from 'react';
import { Form, Input, Button, Modal, Typography, message } from 'antd';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../../utils/mutations';

const { Title } = Typography;

const Login = ({ visible, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [login] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    console.log('Form values:', values);
    try {
      const { data } = await login({ variables: { ...values } });
      console.log('Login Response:', data); 
      
      if (data.login && data.login._id) {
        console.log('Login Successful, User Data:', data.login); 
        
        
        onSuccess(data.login.username);
        
        message.success('Login successful');
        onClose();
        navigate('/dashboard');
      } else {
        console.warn('Login data might be missing or structured differently:', data);
        message.error('Invalid username or password');
      }
    } catch (error) {
      console.error("Authentication Error:", error.message, error.graphQLErrors);
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