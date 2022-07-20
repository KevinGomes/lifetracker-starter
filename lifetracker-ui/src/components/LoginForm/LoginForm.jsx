<<<<<<< HEAD
import "./loginForm.css"
import { AuthContextProvider, useAuthContext} from "../../contexts/auth"
import { Navigate } from "react-router-dom"
import React from "react"
=======
import "./LoginForm.css";
import { useAuthContext} from "../../contexts/auth"
import { Navigate } from "react-router-dom";
import React from "react";
import ApiClient from "../../services/apiClient";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

export default function LoginForm(){
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const { user, setUser, loginUser, error } = useAuthContext()

<<<<<<< HEAD

=======
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
    function handleEmailForm(e){
        setEmail(e.target.value)
    }

    function handlePasswordForm(e){
        setPassword(e.target.value)
    }

    function handleLoginSubmit(){
        loginUser(email,password)
    }

 if(user.id > 0) {
    return (
        <div className="logged-in-wrapper">
            {<Navigate to="/activity"/>}
        </div>
    )
} 
    else{
        return(
            <div className="login-form">
                
                <div className="login-form-wrapper">
                    <h1>Login</h1>
                    <h2>Email</h2>
                    <input type="email" className="forem-input" name="email" value={email} onChange={handleEmailForm}></input>
                    <h2>Password</h2>
                    <input type="password" className="forem-input" name="password" value={password} onChange={handlePasswordForm}></input>
                    <h1></h1>
                    <button className="submwit-log" onClick={handleLoginSubmit}>Submit</button>
                    <h3 className={error.length > 0 ? "hidden" : "hidden"}>Wrong Email/Password</h3>
                </div>
            </div>
        )
    }
}

