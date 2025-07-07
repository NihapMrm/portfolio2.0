
const Icon = ({name}) =>{
    return(
        <div className="bg-transparent comp flex w-10 h-10 group active:scale-100 ">
        <img src={"/src/assets/icons/"+name+".svg"} alt="" className="transition-transform duration-200 ease-out group-active:scale-75" />
        </div>
    )
}
export default Icon;