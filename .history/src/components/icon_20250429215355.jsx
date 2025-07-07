
const Icon = ({name}) =>{
    return(
        <div className="bg-transparent hover:bg-white hover:bg-opacity-20 rounded-md flex w-10 h-10 p-2 group active:scale-100 ">
        <img src={"/src/assets/icons/"+name+".svg"} alt="" className="transition-transform duration-200 ease-out group-active:scale-80" />
        </div>
    )
}
export default Icon;