import React from "react";
import "./Dashboard.css";
// import 'antd/dist/antd.css';
import { Button, DatePicker } from 'antd';

const Dashboard = ({ capsules, onCapsuleClick }) => {
  return (
    <div className="dashboard">
      <h1>Your Time Capsules</h1>
      <ul>
        {capsules.map((capsule) => (
          <li key={capsule.id} onClick={() => onCapsuleClick(capsule.id)}>
            {capsule.title} (Open Date: {capsule.openDate})
          </li>
        ))}
      </ul>
      {/* Option to create a new capsule */}
      <Button type="primary">Create New Capsule</Button>
      <DatePicker />
    </div>
  );
};

export default Dashboard;
