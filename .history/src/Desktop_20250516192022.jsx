import SkillsModel from './components/models/SkillsModel';
import './css/Desktop.css';
import Taskbar from './sections/Taskbar';


const Desktop = ({onLogout}) =>{
    return(
       <div className="h-screen desktopContainer">
            <SkillsModel/>
            <Taskbar/>
       </div>
    )
}

export default Desktop;