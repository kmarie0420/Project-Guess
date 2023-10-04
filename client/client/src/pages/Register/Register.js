import React, { useState } from 'react';
import { Form, Input, Button, Modal, Typography, message } from 'antd';
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from '../../utils/mutations';
// import Auth from "../utils/auth";

const { Title } = Typography;
const Register = ({ onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [registerUser, { error }] = useMutation(REGISTER_USER);


  const onFinish = async (values) => {
    setLoading(true);

    console.log('Form values:', values);

    try {
      const { data } = await registerUser({
        variables: {
          username: values.username,
          email: values.email,
          password: values.password,
        }
      });
      
      if (data) {
        message.success('Registration successful');
        onSuccess();
        onClose();
      }
    } catch (e) {
      console.error('Error during registration:', e.message);
      message.error('Registration failed');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Modal 
      title={<Title level={3}>Register</Title>} 
      open={true} 
      onCancel={onClose}
      footer={null}
      centered
    >
      <Form onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter a username' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter a valid email', type: 'email' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter a password' }, {min: 5, message: 'Password should be at least 5 characters long',}]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Register;
