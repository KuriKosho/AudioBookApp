import React, { ReactNode, createContext, useContext, useState } from 'react'

interface AuthContextType {
    email?:string;
    password?:string;
    dob?:string;
    setEmail?:React.Dispatch<React.SetStateAction<string>>;
    setPassword?:React.Dispatch<React.SetStateAction<string>>;
    setDob?:React.Dispatch<React.SetStateAction<string>>;
}
export const authContext = createContext<AuthContextType | undefined>(undefined)

const AuthContext:React.FC<{children: ReactNode}> = ({children}) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [dob, setDob] = useState<string>("");
  return (
   <authContext.Provider value={{email, setEmail, password, setPassword, dob, setDob}} >
        {children}
   </authContext.Provider>
  )
}

export default AuthContext;

