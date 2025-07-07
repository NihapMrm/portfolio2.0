import Icon from "../components/icon";

const Taskbar = () =>{
    return(
        <>
       <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-center">
        <Icon name={"Windows"}/>
        <Icon name={"Windows-Manager"}/>
        <Icon name={"Windows"}/>
        <Icon name={"Windows"}/>
       </div>

       
       </>
    )
}

export default Taskbar;