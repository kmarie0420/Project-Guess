<<<<<<< HEAD
import React, { useContext } from 'react';
import { Button, List, Card, message } from 'antd'; // Added 'message' from antd for feedback
=======
import React from 'react';
import { Button, List, Card, message } from 'antd';
>>>>>>> df5157bf86ee9822cd0bce1d149e4521eaab3154
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
    const currentDate = new Date(Date.UTC(new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()));
    const openDate = new Date(capsule.openDate);
   
    if (currentDate.getTime() >= openDate.getTime()) {
      navigate(`/capsule-view/${capsule._id}`);
    } else {
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
        renderItem={capsule => {
          let openDateTimestamp = parseInt(capsule.openDate, 10);
          let formattedDate = "Unknown";
          const openDateObj = new Date(openDateTimestamp);
          
          if (!isNaN(openDateObj.getTime())) {
            formattedDate = openDateObj.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
          }
          
          return (
              <List.Item key={capsule._id} onClick={() => handleCapsuleClick(capsule)}>
                  <strong>{capsule.title}</strong> (Open Date: {formattedDate})<br />
                  {capsule.contents} {/* letter details */}
              </List.Item>
          );
        }}
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

<<<<<<< HEAD
export default Dashboard;
=======
export default Dashboard;






>>>>>>> df5157bf86ee9822cd0bce1d149e4521eaab3154
