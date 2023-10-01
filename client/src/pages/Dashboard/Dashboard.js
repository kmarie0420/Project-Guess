import React from "react";
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom'; 

const Dashboard = ({ capsules, onCapsuleClick }) => {
  const navigate = useNavigate();  

  const handleCreateCapsuleClick = () => {
    navigate('/capsule-details'); 
  };

  return (
    <div className="dashboard">
      <h1>Your Time Capsules</h1>
      <ul>
        {capsules && capsules.map((capsule) => (
          <li key={capsule.id} onClick={() => onCapsuleClick(capsule.id)}>
            {capsule.title} (Open Date: {capsule.openDate})
          </li>
        ))}
      </ul>
      {/* Using standard HTML button */}
      <button onClick={handleCreateCapsuleClick}>Create New Capsule</button>
    </div>
  );
};

Dashboard.defaultProps = {
  capsules: [],
};

export default Dashboard;

