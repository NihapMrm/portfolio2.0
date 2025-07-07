import { React,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/Login.css'

const Login = () => {
let x = 0;

const addDD = () =>{
  x=x+1;
  console.log(x)

}
  return (
    <>
      <div>
     <h1>{x}</h1>
     <button onclick={addDD}>CLick</button>
      </div>
 
    </>
  )
}

export default Login
