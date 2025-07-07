import React from 'react';
import Wifi from './wifi';
import Battery from './battery';
import { FiVolume2, FiWifi } from "react-icons/fi";


const QuickSettings = () =>{
    return(
        <div>
<FiWifi />
<Battery/>
<FiVolume2/>
        </div>
    );
};

export default QuickSettings;