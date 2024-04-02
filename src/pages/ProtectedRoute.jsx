import { useContext } from "react";
import { AuthContex } from "../componets/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoute = ({children}) => {
    console.log(children);
    const location =useLocation();
    console.log(location);
    const {user} = useContext(AuthContex);
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>;
  
  
};

export default ProtectedRoute;