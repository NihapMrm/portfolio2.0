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
import ExperienceModel from '../components/models/ExperienceModel';
import ProjectsModel from '../components/models/ProjectsModel';



const Taskbar = () =>{
    const [activePopup, setActivePopup] = useState(null);

    const openPopup = (id) => {
        console.log("Opening popup: ", id); // Debugging
        setActivePopup(id);
      };    const closePopup = () => setActivePopup(null);
    
    
    return(
        <>
        <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-between gap-2 pl-4 pr-4 pt-2 pb-2">
        <div className="w-1/5">
            <Weather/>
        </div>
       <div className="flex items-center justify-center gap-2 w-3/5">
       <Icon name={"Windows"} onClick={() => activePopup === 'apps' ? closePopup() : openPopup('apps')} />
       <Search/>
        <Icon name={"skills"} onClick={() => activePopup === 'skills' ? closePopup() : openPopup('skills')}/>
        <Icon name={"experience"} onClick={() => activePopup === 'experience' ? closePopup() : openPopup('experience')}/>
        <Icon name={"projects"} onClick={() => activePopup === 'projects' ? closePopup() : openPopup('projects')}/>
        <Icon name={"education"} onClick={() => activePopup === 'education' ? closePopup() : openPopup('education')}/>
        <Icon name={"contact"} onClick={() => activePopup === 'contact' ? closePopup() : openPopup('contact')}/>
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

      
       </div>
       {activePopup === 'skills' && <SkillsModel onClose={closePopup} />}
       {activePopup === 'experience' && <ExperienceModel onClose={closePopup} />}
       {activePopup === 'projects' && <ProjectsModel onClose={closePopup} />}
       {activePopup === 'education' && <ProjectsModel onClose={closePopup} />}
       {activePopup === 'contact' && <ProjectsModel onClose={closePopup} />}
       </>
       
      
    )
}

export default Taskbar;