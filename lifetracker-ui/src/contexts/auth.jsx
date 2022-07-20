<<<<<<< HEAD
import axios from "axios"
import React, { useContext } from "react"
=======
import axios from "axios";
import React, { useContext } from "react";
import ApiClient from "../services/apiClient";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

const AuthContext = React.createContext(null)

export const AuthContextProvider = ({ children }) => {
<<<<<<< HEAD
  const [user, setUser] = React.useState({})
  const [initialized, setInitial] = React.useState(false)
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [error, setError] = React.useState("")
  const [sleep, logSleep] = React.useState(0)

  React.useEffect(async () => {
    try {
      const req = await axios.get("http://localhost:3001/auth/me", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}})
      console.log(req)
      setUser(req.data.user)
      setError(null)
=======
  const [user, setUser] = React.useState({});
  const [initialized, setInitial] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState("");
  const [testUser, setTestUser] = React.useState({});
  
  React.useEffect(async () => {
    if(localStorage.getItem("lifetracker_token")){
      ApiClient.setToken(localStorage.getItem("lifetracker_token"));
    }
    setIsProcessing(true);
    setInitial(false);
    try {
      const req = await ApiClient.fetchUserFromToken();
      setUser(req.data.user);
      setError(null);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
    } catch (err) {
      setError("")
    }

    setIsProcessing(false)
    setInitial(true)
  }, []);


const loginUser = (email,password) => {
<<<<<<< HEAD
    const req = async () => {
      try {
        const getData = await axios.post("http://localhost:3001/auth/login", {
          email: email,
          password: password,
        });
        console.log(getData)
        localStorage.setItem("lifetracker_token", getData.data.token)
        setUser(getData.data.user)
      } catch (err) {
        console.log(err)
        setError(err.response.data.error.message)
      }
    };
    req();
  }
=======
  const req = async () => {
    try {
      const getData = await ApiClient.login({
        email: email,
        password: password,
      });
      ApiClient.setToken(getData.data.token)
      setUser(getData.data.user);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };
  req();
}
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

const signUpUser = async (data) => {
    let obj = {
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      };
      try {
<<<<<<< HEAD
        console.log("getting data")
        const getData = await axios.post("http://localhost:3001/auth/register", {
          credentials: obj,
        });
        setUser(getData.data.user)
        localStorage.setItem("lifetracker_token", getData.data.token)
=======
        const getData = await ApiClient.signup({
          credentials: obj,
        });
        
        ApiClient.setToken(getData.data.token)
        setUser(getData.data.user);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
      } catch (err) {
        console.log(err)
      }
  }

  const logOutUser = () => {
<<<<<<< HEAD
      localStorage.removeItem("lifetracker_token")
      location.reload()
      return false
  }



  const authValue = { user, setUser, loginUser, signUpUser, logOutUser, error, sleep, logSleep }
=======
      ApiClient.removeToken();
      location.reload();
      return false;
  }


  const authValue = { user, setUser, loginUser, signUpUser, logOutUser, error };
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

  return (
    <AuthContext.Provider value={authValue}>
      <>{children}</>
    </AuthContext.Provider>
<<<<<<< HEAD
  )
}

export const useAuthContext = () => useContext(AuthContext);
=======
  );
};

export const useAuthContext = () => useContext(AuthContext);

>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
