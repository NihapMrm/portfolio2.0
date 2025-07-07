import { useState,useEffect } from 'react';
import Icon from "../components/icon";
import Search from "../components/search";
import Weather from "../components/weather";
import Time from '../components/time';
import Date from '../components/date';
import QuickSettings from '../components/quickSettings';
import { FiChevronUp } from "react-icons/fi";
import AppsModel from '../components/models/AppsModel';
import { AnimatePresence } from 'framer-motion';
import SkillsModel from '../components/models/SkillsModel';



const Taskbar = () =>{
    const [activePopup, setActivePopup] = useState(null);

    const openPopup = (id) => {
        console.log("Opening popup: ", id); // Debugging
        setActivePopup(id);
      };    const closePopup = () => setActivePopup(null);
    
    
    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-between gap-2 pl-4 pr-4 pt-2 pb-2">
        <div className="w-1/5">
            <Weather/>
        </div>
       <div className="flex items-center justify-center gap-2 w-3/5">
       <Icon name={"Windows"} onClick={() => activePopup === 'apps' ? closePopup() : openPopup('apps')} />
       <Search/>
        <Icon name={"skills"} onClick={() => activePopup === 'skills' ? closePopup() : openPopup('skills')}/>
        <Icon name={"experience"}/>
        <Icon name={"projects"}/>
        <Icon name={"education"}/>
        <Icon name={"Contact"}/>
       </div>
     
       <div className="w-1/5 flex justify-end gap-2">

       <div className="comp flex flex-col items-center justify-center">
       <FiChevronUp />

       </div>

       <QuickSettings/>
       <div className="flex flex-col items-center text-xs comp">
        <Time taskbar={true}/>
        <Date taskbar={true}/>
       </div>
       
       </div>
       <AnimatePresence>
       {activePopup === 'apps' && <AppsModel onClose={closePopup} />}
        </AnimatePresence>

        {activePopup === 'skills' && <SkillsModel onClose={closePopup} />}
       </div>
      
    )
}

export default Taskbar;