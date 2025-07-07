import Icon from "../components/icon";

const Taskbar = () =>{
    return(
        <>
       <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-center">
        <Icon name={"Windows"}/>
        <Icon name={"Desktop-Manager"}/>
        <Icon name={"Microsoft-Edge"}/>
        <Icon name={"File-Explorer"}/>
       </div>

       
       </>
    )
}

export default Taskbar;