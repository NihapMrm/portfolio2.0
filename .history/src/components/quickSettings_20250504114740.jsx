import React from 'react';
import Wifi from './wifi';
import Battery from './battery';
import { FiWifi } from "react-icons/fi";


const QuickSettings = () =>{
    return(
        <div>
<FiWifi />
<Battery/>
        </div>
    );
};

export default QuickSettings;