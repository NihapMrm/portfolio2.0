const Desktop = ({onLogout}) =>{
    return(
       <div className="h-screen bg-blue-400">

        <button  onClick={onLogout}>Logout</button>
       </div>
    )
}

export default Desktop;