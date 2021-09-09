import React , {useEffect} from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
  const history = useHistory();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));


  
      if (isLogin) {
        history.push("/");
      } else {
        history.push("/login");
      }
     
  return (
    <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>
  );
}
