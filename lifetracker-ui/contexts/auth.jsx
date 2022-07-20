import React from "react"
import {useState, useContext} from "react"
import axios from "axios"
import apiClient from "../services/apiClient"

const AuthContext = React.createContext(null)

export function AuthContextProvider ({children}) {
    const [user, setUser] = useState({})
    const [initialized, setInitialized] = React.useState(false)
    const [isProcessing, setIsProcessing] = React.useState(false)
    const [error, setError] = React.useState(null)

     const loginUser = (email,password) => {
        const req = async () => {
            try {
              const getUserData = await axios.post("http://localhost:3001/auth/login", {
                email: email,
                password: password,
              });
              console.log(getData);
              localStorage.setItem("lifetracker_token", getUserData.data.token);
              setUser(getUserData.data.user);
            } catch (err) {
              console.log(err);
              setError(err.response.data.error.message)
            }
          };
          req();
        }
    
     function signupUser(){
        //TO-DO
    }
    
     function fetchUserFromToken() {
        //TO-DO
    }
    
     function logoutUser() {
        setUser(null)
    }

    React.useEffect(async() => {
        if(localStorage.getItem("lifetracker_token")){
            apiClient.setToken(localStorage.getItem("lifetracker_token"))
            setIsProcessing(true)
            setError(null)
        }
        try {
            const req = await axios.get("http://localhost:3001/auth/me", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}})
            setUser(req.data.user)
            setError(null)
        } catch (rr) {
            setError("error could not reach http://localhost:3001/auth/me")
        }

        setIsProcessing(false)
        setInitialized(true)
    },[])
    
    console.log(error)
    console.log(user)

    const value={
        user, setUser,
        initialized, setInitialized,
        isProcessing, setIsProcessing,
        error, setError,
        loginUser,logoutUser
    }    

    return(
    <AuthContext.Provider value={value}>
        <>{children}</>
    </AuthContext.Provider>)
}



export const useAuthContext = () => React.useContext(AuthContext)