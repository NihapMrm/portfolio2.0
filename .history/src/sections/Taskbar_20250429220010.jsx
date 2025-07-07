import Icon from "../components/icon";
import Weather from "../components/weather";

const Taskbar = () =>{
    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-between gap-2">
        <div>
            <Weather/>
        </div>
       <div className="flex items-center justify-center gap-2">
        <Icon name={"Windows"}/>
        <Icon name={"Desktop-Manager"}/>
        <Icon name={"File-Explorer"}/>
        <Icon name={"Microsoft-Edge"}/>
       </div>
     
       <div></div>
       </div>
    )
}

export default Taskbar;