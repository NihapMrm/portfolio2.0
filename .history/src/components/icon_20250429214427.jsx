
const Icon = ({name}) =>{
    return(
        <div className="bg-white bg-opacity-20 rounded-sm flex w-10 h-10 p-2">
        <img src={"/src/assets/icons/"+name+".svg"} alt="" />
        </div>
    )
}
export default Icon;