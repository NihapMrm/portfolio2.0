import React from 'react'
import { FiMinimize2, FiMinus, FiX } from "react-icons/fi";


const Minimize = () =>{
    return(
                <FiMinus className="bg-transparent flex w-10 h-9 group active:scale-100 p-[0.6rem] hover:bg-[#ffffff20] duration-300" onClick={onClose}/>
               

    )
}

export default Minimize;

