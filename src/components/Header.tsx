import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../hooks/AuthContext"
import { ThemeContext, themes } from "../hooks/themeContext"


interface LinkType{
    link:string,
    text:string
}

const links: LinkType[] = [
    {
        link:'/',
        text: 'home'
    },
    {
        link:'about',
        text: 'about'
    },
    {
        link:'login',
        text: 'login'
    },
    {
        link:'secured',
        text: 'secured'
    },
    {
        link:'open',
        text: 'open'
    },
]

const Header =()=> {
    const navigate = useNavigate()
    const {isLogged,logoutt} = useContext(AuthContext)
    const {} =useContext(ThemeContext)
    console.log("isLogged in page header", isLogged)
    const handleLogout =() => {
        logoutt();
        navigate('/login')
    }
    // useEffect(()=> {
    //     console.log('isLogged',isLogged)
    // },[isLogged,navigate])

    const [changeTheme, setChangeTheme] = useState(themes.dark)

    const handleTheme = () => {
        if(changeTheme=== themes.dark){
            setChangeTheme(themes.light)
        }
        else {
            setChangeTheme(themes.dark)
        }

    }

    return(
        <>
            <h1></h1>        
        <ul>
        {links.map((item: LinkType) => <li key={item.link} style={{display:'inline',padding:10}}>
            <Link to={item.link} style={{textDecoration:'none'}}>{item.text}</Link>
        </li> )}
        {isLogged ?<button onClick={handleLogout}>logout</button> : null}
        <li>
            <button  style={changeTheme} onClick={handleTheme}>toggle theme</button>
        </li>
    </ul>
    </>
       
    )
}

export default Header;