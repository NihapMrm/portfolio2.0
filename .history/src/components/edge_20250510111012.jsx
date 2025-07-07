import React from 'react'
import { FiMinimize2, FiMinus, FiX } from "react-icons/fi";
import Close from './close';
import Minimize from './minimize';


const Edge = () =>{
    return(
        <div className='bg-[#2e2e2e] w-full h-[calc(100vh-3rem)]'>
            <div className="absolute top-0 w-full h-9 flex justify-between">
                <div className="items bg-red-600 w-1/4"></div>
                <div className="actions w-1/4 flex justify-end items-center">
                <Minimize/>
                <FiMinimize2 className="bg-transparent comp flex w-10 h-9 group active:scale-100 rounded-none"/>
                <Close/>
                </div>
            </div>
            <div className="bg-[#3b3b3b] absolute top-[2.2rem] w-full h-9"></div>
        </div>
    )
}

export default Edge;