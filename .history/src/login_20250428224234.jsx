import { React,useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/Login.css'

const Login = () => {


  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup interval when component unmounts
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
