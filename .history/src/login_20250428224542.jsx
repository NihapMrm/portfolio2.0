import { React,useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/Login.css'

const Login = () => {


  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      .replace(/AM|PM/gi, '')
      .trim()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
          .replace(/AM|PM/gi, '')
          .trim()
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  return (
    <>
      <div>
     <h1>{time}</h1>

      </div>
 
    </>
  )
}

export default Login
