
const FileManagerIcon = ({name, onClick, size = "w-14 h-14", extension = ".svg" }) =>{
    return(
        <div onClick={onClick} className={`bg-transparent flex ${size} group active:scale-100`}>
        <img src={"/src/assets/icons/"+name+extension} alt="" className="transition-transform duration-200 ease-out w-full h-full object-contain" />
        </div>
    )
}
export default FileManagerIcon;