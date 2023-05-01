import { useState } from "react"

const LoggedIn = () =>{
    const handleLogin = () => {
        setisLoggedIn(true)
    }
    const handleLogout = () => {
        setisLoggedIn(false)
    }

    const [isLoggedIn, setisLoggedIn] = useState(false);
        return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>{isLoggedIn ? "User is logged in" : "User is logged out" }</div>
        </div>
    )    
}

export default LoggedIn;