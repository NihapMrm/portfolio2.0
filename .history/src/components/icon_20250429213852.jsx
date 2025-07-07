
const Icon = ({name}) =>{
    return(
        <div className="bg-red-700 flex w-full">
        <img src={"/src/assets/icons/"+name+".svg"} alt="" />
        </div>
    )
}
export default Icon;