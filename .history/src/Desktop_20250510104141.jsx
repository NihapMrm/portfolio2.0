import Edge from './components/edge';
import './css/Desktop.css';
import Taskbar from './sections/Taskbar';


const Desktop = ({onLogout}) =>{
    return(
       <div className="h-screen desktopContainer">
            <Edge/>
            <Taskbar/>
       </div>
    )
}

export default Desktop;