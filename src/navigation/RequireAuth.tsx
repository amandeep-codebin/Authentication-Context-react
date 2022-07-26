import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";


const RequireAuth = ({ children }: { children: JSX.Element }) => {
  // let {isLogged} = useCheckAuth();
  let {isLogged} = useContext(AuthContext)
  let location = useLocation();
console.log("require Auth islogged value", isLogged)
  if(isLogged !== undefined && isLogged) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;

}

export default RequireAuth;