import { createContext, ReactNode, useContext, useState } from "react";

//define context type
type AuthContextType = {
  isLoggedIn: boolean;
  login:any|void;
  logout:any|void
  
};

//create a context
const AuthContext = createContext< AuthContextType | undefined>(undefined);
//custom hook to use auth context
export const useAuth = () => useContext(AuthContext);

//provider
export const AuthProvider = ({ children }:{children:ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  //login function

  const login = () => {
    setIsLoggedIn(true);
  };

  //logout function

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
