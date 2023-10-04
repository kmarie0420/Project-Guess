import React, { useContext } from 'react';
import './Dashboard.css';
import { Button, List, Card, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_CAPSULES } from '../../utils/queries';
import UserContext from '../../pages/UserContext/UserContext';
const now = new Date().toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});
const Dashboard = ({ onCapsuleClick, username }) => {
  const { data, loading, error } = useQuery(GET_ALL_CAPSULES);
  const navigate = useNavigate();
  const userContext = useContext(UserContext); // Access user data from context
  const handleCreateCapsuleClick = () => {
    navigate('/capsule-details');
  };
  const handleCapsuleClick = (capsule) => {
    // current date is today's date
    const currentDate = new Date();
    console.log(currentDate);
    // open date is the date the capsule is set to open convert to date object
    const openDate = new Date(parseInt(capsule.openDate));
    console.log(openDate);
    // if the current date is greater than or equal to the open date, then the capsule can be opened
    if (currentDate >= openDate) {
      console.log("Capsule can be opened");
      navigate(`/display-capsule/${capsule._id}`);
    } else {
      message.error("This capsule is not ready to be opened yet.");
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const capsules = data.getAllCapsules || [];
  return (
    <div className="dashboard-background">
      <Card title={`Hello, ${username}! Today's date is ${now}! `} style={{ maxWidth: '800px', margin: '40px auto' }}>
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
              <List.Item key={capsule._id}>
              <div
                role="button"
                tabIndex="0"
                className="list-item-button"
                onClick={() => handleCapsuleClick(capsule)}
                onKeyPress={(event) => {
                  // Allow the button to be activated using Enter or Space key
                  if (event.key === 'Enter' || event.key === ' ') handleCapsuleClick(capsule);
                }}
              >
                <strong>{capsule.title}</strong> (Open Date: {formattedDate})<br />
                {capsule.contents} {/* letter details */}
              </div>
            </List.Item>
          );
        }}
      />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleCreateCapsuleClick}>
          Create New Capsule
        </Button>
      </Card>
    </div>
  );
};
Dashboard.defaultProps = {
  username: 'User'
};
export default Dashboard;

//pasted dont touch