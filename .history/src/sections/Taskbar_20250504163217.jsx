import Icon from "../components/icon";
import Search from "../components/search";
import Weather from "../components/weather";
import Time from '../components/time';
import Date from '../components/date';
import QuickSettings from '../components/quickSettings';


const Taskbar = () =>{
    return(
        <div className="w-full h-12 bg-transparent backdrop-blur-xl fixed bottom-0 flex items-center justify-between gap-2 pl-4 pr-4 pt-2 pb-2">
        <div className="w-1/5">
            <Weather/>
        </div>
       <div className="flex items-center justify-center gap-2 w-3/5">
        <Icon name={"Windows"}/>
        <Search/>
        <Icon name={"skills"}/>
        <Icon name={"experience"}/>
        <Icon name={"cmd"}/>
        <Icon name={"Store"}/>
        <Icon name={"Microsoft-Edge"}/>
       </div>
     
       <div className="w-1/5 flex justify-end gap-2">
       <QuickSettings/>
       <div className="flex flex-col items-center text-xs comp">
        <Time taskbar={true}/>
        <Date taskbar={true}/>
       </div>
       
       </div>
       </div>
    )
}

export default Taskbar;