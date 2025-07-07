const Desktop = ({onLogout}) =>{
    return(
       <div className="h-screen desktopContainer">

        <button  onClick={onLogout}>Logout</button>
       </div>
    )
}

export default Desktop;