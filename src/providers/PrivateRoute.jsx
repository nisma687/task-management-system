import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(user){
        return children;
    }
    if(loading){
        return <div 
        className="text-center">Loading...</div>
    }
    if(!user){
        return <Navigate to={{
            pathname:"/login",
            state:{from:location}
        }}/>
    }
};

export default PrivateRoute;