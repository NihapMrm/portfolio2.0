import React from 'react';
import Wifi from './wifi';
import Battery from './battery';
import { CiWifiOn } from "react-icons/ci";


const QuickSettings = () =>{
    return(
        <div>
<CiWifiOn />
<Battery/>
        </div>
    );
};

export default QuickSettings;