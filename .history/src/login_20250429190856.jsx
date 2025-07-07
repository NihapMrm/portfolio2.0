import React, { useState, useEffect } from 'react';
import { FiWifi } from 'react-icons/fi';
import useBatteryStatus from './hooks/useBatteryStatus';
import './css/Login.css';

const Login = ({ onLogin }) => { // Destructure from props
  const formatTime = () => {
    return new Date()
      .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      .replace(/AM|PM/gi, '')
      .trim();
  };

  const formatDate = () => {
    return new Date()
      .toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };

  const [time, setTime] = useState(formatTime());
  const [date, setDate] = useState(formatDate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(formatTime());
      setDate(formatDate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openLogin = () => {
    setIsOpen(true);
  };

  const closeLogin = () => {
    setIsOpen(false);
  };

  const handleSignIn = () => {
    onLogin(); // This tells App.jsx to switch to Desktop
  };

  const battery = useBatteryStatus();
  if (!battery) {
    return <p>Loading battery status...</p>;
  }

  return (
    <>
      <div className="mainContainer" onClick={openLogin}>
        <h1>{time}</h1>
        <p>{date}</p>
        <div className="footer">
          <FiWifi style={{ marginRight: '10px', verticalAlign: 'middle' }} />
          <div className="battery">
            <span style={{ width: battery.level * 100 + '%', height: '100%', backgroundColor: '#fff' }}></span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="loginContainer" onClick={closeLogin}>
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <div className="profile"></div>
            <h1 className="name">Nihap Mrm</h1>
            <button className="enter" onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
