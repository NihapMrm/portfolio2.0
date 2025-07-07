import './css/Desktop.css';
import Taskbar from './sections/Taskbar';


const Desktop = ({onLogout}) =>{
    return(
       <div className="h-screen desktopContainer">
            <Taskbar/>
       </div>
    )
}

export default Desktop;