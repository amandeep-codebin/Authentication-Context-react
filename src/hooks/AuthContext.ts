import { createContext } from "react"

export interface AuthContextType{
    isLogged : undefined | boolean,
    login(token: string): void,
    logoutt(): void,
}


export const AuthContext = createContext<AuthContextType>({isLogged: undefined, login: ()=> {}, logoutt:()=> {} })