import { React,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/Login.css'

const Login = () => {


const [x,setX] = useState(0);
const [btnText, setBtnText] = useState("Click")

const add = () =>{
x === 5 ? setX(0) : setX(x+1);
x === 5 ? setX(0) : setX(x+1);
 


};
  return (
    <>
      <div>
     <h1>{x}</h1>
     <button onClick={add}>{btnText}</button>
      </div>
 
    </>
  )
}

export default Login
