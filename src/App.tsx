import "./App.css";
import Core from "./navigation";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext, themes, toggleTheme } from "./hooks/themeContext";
import { AuthContext } from "./hooks/AuthContext";
import { useState } from "react";
import { ACCESS_TOKEN } from "./utils/constants";

const App = () => {
  const [loginStatus, setLoginStatus] = useState<undefined | boolean>(
    undefined
  );

  const loginCheck = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
    setLoginStatus(true);
    console.log("logged in ");
  };

  const logoutCheck = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    setLoginStatus(false);
    console.log("logged out ");
  };

  return (
    <ThemeContext.Provider value={themes.dark}>
      <AuthContext.Provider
        value={{
          isLogged: loginStatus,
          login: loginCheck,
          logoutt: logoutCheck,
        }}
      >
        <BrowserRouter>
          <Core />
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
