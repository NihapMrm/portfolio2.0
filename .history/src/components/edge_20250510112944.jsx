import React from 'react'
import { FiLayers, FiLayout, FiMinimize2, FiMinus, FiX } from "react-icons/fi";
import Close from './close';
import Minimize from './minimize';
import Restore from './restore';


const Edge = () =>{
    return(
        <div className='bg-[#2e2e2e] w-full h-[calc(100vh-3rem)]'>
            <div className="absolute top-0 w-full h-10 flex justify-between">
                <div className="items w-1/4 flex">
                    <div className='w-24 500 h-full flex'>
                        <FiLayers className="bg-transparent flex w-10 h-9 group active:scale-100 p-[0.6rem] hover:bg-[#ffffff20] duration-300"/>
                        <FiLayout className="bg-transparent flex w-10 h-9 group active:scale-100 p-[0.6rem] hover:bg-[#ffffff20] duration-300"/>
                    </div>
                    <div className='bg-[#3b3b3b] w-36 h-full rounded-tl-xl'></div>
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