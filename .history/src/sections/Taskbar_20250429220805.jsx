import Icon from "../components/icon";
import Weather from "../components/weather";

const Taskbar = () =>{
    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-between gap-2 pl-4 pr-4 pt-4 pb-4">
        <div className="w-1/3">
            <Weather/>
        </div>
       <div className="flex items-center justify-center gap-2 w-1/3">
        <Icon name={"Windows"}/>
        <Icon name={"Desktop-Manager"}/>
        <Icon name={"File-Explorer"}/>
        <Icon name={"Microsoft-Edge"}/>
       </div>
     
       <div className="w-1/3"></div>
       </div>
    )
}

export default Taskbar;