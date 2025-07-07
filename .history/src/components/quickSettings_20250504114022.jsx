import React from 'react';
import Wifi from './wifi';
import Battery from './battery';


const QuickSettings = () =>{
    return(
        <div>
            <Wifi/>
            <Battery/>
        </div>
    );
};

export default QuickSettings;