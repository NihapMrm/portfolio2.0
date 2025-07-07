
const Icon = ({name}) =>{
    return(
        <div className="bg-transparent hover:bg-white bg-opacity-20 rounded-md flex w-10 h-10 p-2">
        <img src={"/src/assets/icons/"+name+".svg"} alt="" />
        </div>
    )
}
export default Icon;