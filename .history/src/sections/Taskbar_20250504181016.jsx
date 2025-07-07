import { useEffect, useState } from 'react';
import Icon from "../components/icon";
import Search from "../components/search";
import Weather from "../components/weather";
import Time from '../components/time';
import Date from '../components/date';
import QuickSettings from '../components/quickSettings';
import { FiChevronUp } from "react-icons/fi";
import AppsModel from '../components/models/AppsModel';



const Taskbar = () =>{
    const [activePopup, setActivePopup] = useState(null);

    const openPopup = (id) => {
        console.log("Opening popup: ", id); // Debugging
        setActivePopup(id);
      };    const closePopup = () => setActivePopup(null);
     // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest('.popModel')) return; // Ignore click inside the modal
      closePopup(); // Close if clicked outside the modal
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside); // Cleanup event listener
    };
  }, []);


    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-between gap-2 pl-4 pr-4 pt-2 pb-2">
        <div className="w-1/5">
            <Weather/>
        </div>
       <div className="flex items-center justify-center gap-2 w-3/5">
        <Icon name={"Windows"} onClick={() => openPopup('apps')}/>
        <Search/>
        <Icon name={"skills"}/>
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
       {activePopup === 'apps' && <AppsModel onClose={closePopup} />}
       </div>
    )
}

export default Taskbar;