import React from 'react';
import Wifi from './wifi';
import Battery from './battery';
import { FiVolume2, FiWifi } from "react-icons/fi";


const QuickSettings = () =>{
    return(
        <div className='flex items-center justify-center gap-4'>
            <FiWifi />
            <FiVolume2/>
            <Battery/>

        </div>
    );
};

export default QuickSettings;