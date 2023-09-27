import React from "react";
import "./Dashboard.css";

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
      <button>Create New Capsule</button>
    </div>
  );
};

export default Dashboard;
