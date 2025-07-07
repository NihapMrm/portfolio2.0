import { React,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/Login.css'

const Login = () => {
let x = 0;

const add = () =>{
  x=x+1;
  console.log(x);

};
  return (
    <>
      <div>
     <h1>{x}</h1>
     <button onClick={add}>CLick</button>
      </div>
 
    </>
  )
}

export default Login
