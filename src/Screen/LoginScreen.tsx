import axios from "axios";
import {ChangeEvent, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

import { ACCESS_TOKEN } from "../utils/constants";

interface LoginType {
    email: string,
    password: string
}

const initialLoginData: LoginType = {
    email :'',
    password: '',
}
const LoginScreen = () => {
    const [userDetails, setUserDetails] = useState(initialLoginData)
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const {isLogged, login} = useContext(AuthContext)

    const dispatchLogin = async() => {
        axios.post("https://reqres.in/api/login",{
        "email": userDetails.email,
        "password": userDetails.password
        })
        .then((res) =>{ 
            setError('')
            login(res.data.token)
            // localStorage.setItem(ACCESS_TOKEN,res.data.token)
            console.log("response", res)
        })
        .catch((err) => setError(err.response.data.error))
    }
    const handleChange =(e:ChangeEvent<HTMLInputElement>) => {
        setUserDetails({...userDetails, [e.currentTarget.name]: e.currentTarget.value})
        // e.currentTarget.name mai current value store karwa rahe he. name me email, password hai
    }
    useEffect(() => {
        if(isLogged !== undefined && isLogged)
        navigate('/')
    },[isLogged, navigate])
    return (
    <div>
       <label>Username</label> 
<input name="email" type="text" placeholder="Enter email" value={userDetails.email} onChange={handleChange} />
<br />
<label>Password</label>
<input name="password" type="password" placeholder="Enter password" value={userDetails.password} onChange={handleChange}/>
<br />
<button onClick={dispatchLogin}>login</button>
    </div>
    )
        
        
}

export default LoginScreen;