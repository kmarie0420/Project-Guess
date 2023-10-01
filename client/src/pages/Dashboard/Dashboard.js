import React from "react";
import { Button, List, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ capsules, onCapsuleClick, username }) => {
  const navigate = useNavigate();

  const handleCreateCapsuleClick = () => {
    navigate('/capsule-details');
  };

  return (
    <Card title={`Hello, ${username}! Your Time Capsules`} style={{ maxWidth: '800px', margin: '40px auto' }}>
      <List
        dataSource={capsules}
        renderItem={capsule => (
          <List.Item key={capsule.id} onClick={() => onCapsuleClick(capsule.id)}>
            {capsule.title} (Open Date: {capsule.openDate})
          </List.Item>
        )}
      />
      <Button type="primary" icon={<PlusOutlined />} onClick={handleCreateCapsuleClick}>
        Create New Capsule
      </Button>
    </Card>
  );
};

Dashboard.defaultProps = {
  capsules: [],
  username: 'User'
};

export default Dashboard;

