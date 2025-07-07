
const Icon = ({name}) =>{
    return(
        <div className="bg-red-700 flex w-10 h-10 p-1">
        <img src={"/src/assets/icons/"+name+".svg"} alt="" />
        </div>
    )
}
export default Icon;