    import React from 'react'
    import { FiArrowLeft, FiGlobe, FiLayers, FiLayout, FiMinimize2, FiMinus, FiPlus, FiX } from "react-icons/fi";
    import Close from './close';
    import Minimize from './minimize';
    import Restore from './restore';
import { PiFileDoc } from 'react-icons/pi';
import { MdOutlineRefresh } from 'react-icons/md';


    const Edge = () =>{
        return(
            <div className='bg-[#2e2e2e] w-full h-[calc(100vh-3rem)]'>
                <style>
                
                </style>
                <div className="absolute top-0 w-full h-10 flex justify-between">
                    <div className="items flex items-center">
                        <div className='w-24 500 h-full flex after:content-[""] after:w-4 after:h-4 after:bg-[#2e2e2e] after:bottom-0 after:right-0 after:absolute relative after:rounded-full z-50'>
                            <FiLayers className="bg-transparent flex w-10 h-9 group active:scale-100 p-[0.6rem] hover:bg-[#ffffff20] duration-300 rounded"/>
                            <FiLayout className="bg-transparent flex w-10 h-9 group active:scale-100 p-[0.6rem] hover:bg-[#ffffff20] duration-300 rounded"/>
                        </div>
                        <div className='flex items-center justify-between pl-5 pr-5 bg-[#3b3b3b] w-64 h-full rounded-tl-xl rounded-tr-xl after:content-[""] after:w-3 after:h-3 after:bg-[#3b3b3b] after:bottom-[-2px] after:left-[-0.5rem] after:absolute relative after:rounded-full before:content-[""] before:w-3 before:h-3 before:bg-[#3b3b3b] before:bottom-[-2px] before:right-[-0.5rem] before:absolute  before:rounded-full'>
                            <div className='flex items-center justify-center gap-2  '>
                            <FiGlobe/>
                            Nihap Mrm
                            </div>
                            <FiX/>
                        </div>
                        <div className='after:content-[""] after:w-4 after:h-4 after:bg-[#2e2e2e] after:bottom-0 after:left-0 after:absolute relative after:rounded-full z-50'>
                            <FiPlus className="bg-transparent flex w-10 h-9 group active:scale-100 p-[0.6rem] hover:bg-[#ffffff20] duration-300 rounded ml-4"/>
                        </div>
                    </div>
                    <div className="actions w-1/4 flex justify-end items-center">
                    <Minimize/>
                    <Restore/>
                    <Close/>
                    </div>
                </div>
                <div className="bg-[#3b3b3b] absolute top-[2.5rem] w-full h-9 flex">
                    <div className="flex items-center h-full pl-2 pr-2 w-20 text-xl justify-between">
                        <FiArrowLeft/>  
                        <MdOutlineRefresh/>
                    </div>

                    <div className="bg-[#3b3b3b]w-full h-full rounded-full">
                        
                    </div>

                </div>
            </div>
        )
    }

    export default Edge;