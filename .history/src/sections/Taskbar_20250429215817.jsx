import Icon from "../components/icon";

const Taskbar = () =>{
    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-center gap-2">
        <div>
        <Icon name={"Weather"}/>
        </div>
       <div className="flex items-center justify-center gap-2">
        <Icon name={"Windows"}/>
        <Icon name={"Desktop-Manager"}/>
        <Icon name={"File-Explorer"}/>
       </div>
     
       <div></div>
       </div>
    )
}

export default Taskbar;