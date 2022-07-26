import { useEffect, useState } from "react"
import { ACCESS_TOKEN } from "../utils/constants"

const useCheckAuth = () => {

    const [isLoggedIn, setIsLoggedIn] = useState<undefined | boolean>(undefined)

    const login =(token: string) => {
        localStorage.setItem(ACCESS_TOKEN,token)
        setIsLoggedIn(true)
    }

    const logout =() => {
        localStorage.removeItem(ACCESS_TOKEN)
        setIsLoggedIn(false)
    }
    // useEffect(()=>{
    //     const token = localStorage.getItem(ACCESS_TOKEN)
    //     if(token){
    //         setIsLoggedIn(true)
    //     }
    //     else{
    //         setIsLoggedIn(false)
    //     }
    // },[isLoggedIn])

    return {
        isLoggedIn, login, logout
    };
}

export default useCheckAuth;

