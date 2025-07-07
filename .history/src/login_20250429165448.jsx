import { React,useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './css/Login.css';
import { FiWifi } from 'react-icons/fi'; // Feather WiFi icon


const Login = () => {


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
 
  return (
    <>
    <div className="mainContainer" onClick={openLogin}>
     <h1>{time}</h1>
     <p>{date}</p>
    </div>

    {isOpen && (
    <div className="loginContainer" onClick={closeLogin}>
      <div className="content"  onClick={(e) => e.stopPropagation()}>
         <div className="profile"></div>
      <h1 className="name">Nihap Mrm</h1>
      <button className="enter">SIgn In</button>
      </div>

    
     
    </div>
    )}
 
    </>
  )
}

export default Login
