<<<<<<< HEAD
//import "./RegistrationForm.css"
import { useState, useContext } from "react"
import { AuthContextProvider, useAuthContext } from "../../contexts/auth"
import { Navigate } from "react-router-dom"
=======
import "./RegistrationForm.css"
import { useState } from "react";
import { useAuthContext } from "../../contexts/auth";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const { signUpUser, user } = useAuthContext()

  function handleOnRegisterSubmit(){
    let userObj = {username:userName, password:password, firstName:firstName, lastName:lastName, email:email}
    signUpUser(userObj)
  }

  function setParams(e){
    if(e.target.name === "email"){
      setEmail(e.target.value)
    }
    if(e.target.name === "password"){
      setPassword(e.target.value)
    }
    if(e.target.name === "username"){
      setUserName(e.target.value)
    }
    if(e.target.name === "firstName"){
      setFirstName(e.target.value)
    }
    if(e.target.name === "lastName"){
      setLastName(e.target.value)
    }
  }

  return (
    <div className="registration-formq">
      <h1>Register</h1>
      <div className="input-fieldq">
        <h4 className="title1q">Email</h4>
        <input className="form-inpuqt" name="email" type="email" value={email} onChange={setParams}></input>
      </div>
      <div className="input-fqield">
        <h4 className="title1">Username</h4>
        <input className="form-inpqut" name="username" type="text" value={userName} onChange={setParams}></input>
      </div>
      <h4 className="title1">Name</h4>
      <div className="split input-fieldq">
        <input className="form-input-nqame" name="firstName" type="text" placeholder="First Name" value={firstName} onChange={setParams}></input>
        <input className="form-input-naqme" name="lastName" type="text" placeholder="Last Name" value={lastName} onChange={setParams}></input>
      </div>
      <div className="input-fielqd">
        <h4 className="titleq1">Password</h4>
        <input className="form-inpuqt" name="password" type="password" value={password} onChange={setParams}></input>
      </div>
      <div className="input-fieqld">
        <h4 className="titlqe1">Confirm Password</h4>
        <input className="form-inpuqt" name="passwordConfirm" type="password" onChange={setParams}></input>
      </div>
      <button onClick={handleOnRegisterSubmit} className="register-login">Register</button>
    </div>
  )
}
