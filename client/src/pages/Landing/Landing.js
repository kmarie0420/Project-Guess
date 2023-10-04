import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import './Landing.css';
import { Image } from 'antd';
const { Title, Paragraph } = Typography;
function Landing({ isAuthenticated }) {
  const [phase, setPhase] = useState('greeting');
  useEffect(() => {
    if (phase === 'greeting') {
      setTimeout(() => setPhase('flipGreeting'), 2000);
    } else if (phase === 'flipGreeting') {
      setTimeout(() => setPhase('showImage'), 500);
    } else if (phase === 'showImage') {
      setTimeout(() => setPhase('paragraph'), 1000);
    }
  }, [phase]);
  return (
    <div className="landing">
    {(phase === 'greeting' || phase === 'flipGreeting') &&
      <Title className={`greeting-text ${phase}`}>Welcome to Re-memories</Title>}
    <div className={`image-active ${phase}`}></div>
    <Paragraph className={`overlay-text ${phase}`}>Capture a moment today, revisit it in the future.</Paragraph>
  </div>
  );
}
export default Landing;

//done