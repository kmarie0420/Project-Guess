import React, { useContext } from 'react';
import { Button, List, Card, message } from 'antd'; // Added 'message' from antd for feedback
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CAPSULES } from '../../utils/queries';
import UserContext from '../../pages/UserContext/UserContext';

const Dashboard = ({ onCapsuleClick, username }) => {
  const { data, loading, error } = useQuery(GET_ALL_CAPSULES);
  const navigate = useNavigate();
  const userContext = useContext(UserContext); // Access user data from context

  const handleCreateCapsuleClick = () => {
    navigate("/capsule-details");
  };

  const handleCapsuleClick = (capsule) => {
    const currentDate = new Date();
    const openDate = new Date(capsule.openDate);

    if (currentDate >= openDate) {
      // If the current date is greater than or equal to the capsule's open date
      onCapsuleClick(capsule._id); 
    } else {
      // Using antd's message component to display feedback
      message.error("This capsule is not ready to be opened yet.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const capsules = data.getAllCapsules || [];

  return (
    <Card
      title={`Hello, ${username}! Your Time Capsules`}
      style={{ maxWidth: "800px", margin: "40px auto" }}
    >
      <List
        dataSource={capsules}
        renderItem={capsule => (
          <List.Item key={capsule._id} onClick={() => handleCapsuleClick(capsule)}>
            {capsule.title} (Open Date: {capsule.openDate})
          </List.Item>
        )}
      />
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleCreateCapsuleClick}
      >
        Create New Capsule
      </Button>
    </Card>
  );
};

Dashboard.defaultProps = {
  username: 'User'
};

export default Dashboard;