import React, { useState } from "react";
import { Form, Input, Button, Modal, Typography, message } from "antd";

const { Title } = Typography;

const Register = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Registration was successful
        message.success("Registration successful");
        onClose();
      } else {
        // Registration failed, handle errors
        const data = await response.json();
        if (data.errors) {
          // Handle validation errors from the server
          const errorMessages = Object.values(data.errors).join("\n");
          message.error(errorMessages);
        } else {
          message.error(data.message || "Registration failed");
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      message.error("Registration failed");
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
        {/* ...Form fields and validation rules remain the same ... */}

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
