import { React,useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './css/Login.css';
import { FiWifi } from 'react-icons/fi'; // Feather WiFi icon
import useBatteryStatus from './hooks/useBatteryStatus';
import time from './components/time';


const Login = ({onLogin}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);         // hide button, show loader
    onLogin();                  // let App handle transition
  };



  const formatDate = () => {
    return new Date()
      .toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };


  const [date, setDate] = useState(formatDate());

 


  const [isOpen, setIsOpen] = useState(false);

  const openLogin = () => {
    setIsOpen(true);
  };

  const closeLogin = () => {
    setIsOpen(false);
  };


  const battery = useBatteryStatus();
  if (!battery) {
    return <p>Loading battery status...</p>;
  }
  return (
    <>
    <div className="mainContainer" onClick={openLogin}>
     <h1 className="text-9xl mt-12">{time}</h1>
     <p>{date}</p>
     <div className="footer">
      <FiWifi style={{ marginRight: '10px', verticalAlign: 'middle' }} />
      <div className="battery">
      <span style={{ width: battery.level+"%", height: "100%" ,backgroundColor: "#fff" }}></span>
      </div>
      </div>
    </div>

    {isOpen && (
    <div className="loginContainer" onClick={closeLogin}>
      <div className="content"  onClick={(e) => e.stopPropagation()}>
         <div className="profile"></div>
      <h1 className="name">Nihap Mrm</h1>
      {!isLoading ? (
      <button className="enter"  onClick={handleClick}>SIgn In</button>
    ) : (
        <p>Loading...</p>
      )}
      </div>

    
     
    </div>
    )}
 
    </>
  )
}

export default Login
