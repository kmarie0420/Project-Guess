import React from 'react';
import './Landing.css';
import { Image } from 'antd';


function Landing() {
  return (
    <div className="landing">
      <h1>Welcome to the Re-memories</h1>
      <p>Capture a moment today, revisit it in the future.</p>
      <Image
        width={200}
        src=""
        alt="Your Image"
      />
    </div>
  );
}

export default Landing;
