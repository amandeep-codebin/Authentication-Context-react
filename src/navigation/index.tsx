import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import { AboutScreen, HomeScreen, LoginScreen, SecuredScreen, UnSecuredScreen } from "../Screen";
import RequireAuth from "./RequireAuth";

const Core =() => {

    return(

        <div>
            <Header />
            <Routes>
                <Route path="/" element={
                <RequireAuth>
                <HomeScreen />
                </RequireAuth>}
                />
                <Route path="about" element={
                <RequireAuth>
                    <AboutScreen />
                </RequireAuth>
                }/>
                <Route path="secured" element={
                <RequireAuth>
                    <SecuredScreen />
                </RequireAuth>
                }/>
                <Route path="login" element={
                    <LoginScreen />
                }/>
                
                <Route path="open" element={<UnSecuredScreen />}/>
            </Routes>
        </div>
    )
}

export default Core;