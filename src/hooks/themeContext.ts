import { createContext} from "react"

export const themes = {
    light: {
        color:'black',
        background: 'orange'
    },
    dark:{
        color:'orange',
        background: 'black'
    }
}

export const toggleTheme = () => {

}
    

export const ThemeContext = createContext(themes.dark) // here we give the default value to 