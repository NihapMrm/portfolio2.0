import React from 'react'
import { FiMinimize2, FiMinus, FiX } from "react-icons/fi";
import Close from './close';
import Minimize from './minimize';
import Restore from './restore';


const Edge = () =>{
    return(
        <div className='bg-[#2e2e2e] w-full h-[calc(100vh-3rem)]'>
            <div className="absolute top-0 w-full h-10 flex justify-between">
                <div className="items bg-red-600 w-1/4">
                    <div className='w-24 bg-yellow-500 h-full'></div>
                </div>
                <div className="actions w-1/4 flex justify-end items-center">
                <Minimize/>
                <Restore/>
                <Close/>
                </div>
            </div>
            <div className="bg-[#3b3b3b] absolute top-[2.5rem] w-full h-9"></div>
        </div>
    )
}

export default Edge;