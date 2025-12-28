
const Icon = ({name,onClick, extension = ".svg", size = "w-10 h-10" }) =>{
    return(
        <div onClick={onClick} className={`bg-transparent comp flex ${size} group active:scale-100`}>
        <img src={"/src/assets/icons/"+name+extension} alt="" className="transition-transform duration-200 ease-out group-active:scale-75" />
        </div>
    )
}
export default Icon;