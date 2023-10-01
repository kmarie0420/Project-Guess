import React, { useState, useEffect } from 'react';
import "./Dashboard.css";
// import 'antd/dist/antd.css';
import { Button, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";


const Dashboard = ({ capsules, onCapsuleClick }) => {
  // Step 1: Create a state variable to track the uploaded file
  const [file, setFile] = useState(null);

  // Step 2: Handle file change
  const handleFileChange = (info) => {
    if (info.file.status === "done" && info.file.originFileObj) {
      setFile(info.file.originFileObj);
    }
  };

  return (
    <div className="dashboard">
      <h1>Your Time Capsules</h1>
      <ul>
        {capsules &&
          capsules.map((capsule) => (
            <li key={capsule.id} onClick={() => onCapsuleClick(capsule.id)}>
              {capsule.title} (Open Date: {capsule.openDate})
            </li>
          ))}
      </ul>
      {/* Step 3: Add the Upload component */}
      <Upload
        customRequest={({ file, onSuccess }) => {
          // Step 4: Handle file upload logic here (e.g., send the file to the server)
          // After successful upload, call onSuccess
          setTimeout(() => {
            console.log("File uploaded:", file);
            onSuccess();
          }, 1000);
        }}
        onChange={handleFileChange}
      >
        <Button icon={<UploadOutlined />}>Upload Picture</Button>
      </Upload>

      {/* ... Rest of your component code ... */}
      <Button type="primary">Create New Capsule</Button>
      <DatePicker />
    </div>
  );
};

Dashboard.defaultProps = {
  capsules: [],
};

export default Dashboard;