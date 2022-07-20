<<<<<<< HEAD
//import "./NutritionForm.css"
import { AuthContextProvider, useAuthContext} from "../../contexts/auth"
import { Navigate } from "react-router-dom"
import React, { useState } from "react"
import { Link } from "react-router-dom"
=======
import "./NutritionForm.css"
import { useAuthContext } from "../../contexts/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d


export default function NutritionForm(props){
  const [calories, setCalories] = useState("")
  const [category, setCategory] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [name, setName] = useState("")

  const { user } = useAuthContext()
  
  function setParams(e){
    if(e.target.name === "name"){
      setName(e.target.value)
    }
    if(e.target.name === "category"){
      setCategory(e.target.value)
    }
    if(e.target.name === "calories"){
      setCalories(e.target.value)
    }
    if(e.target.name === "imageUrl"){
      setImageUrl(e.target.value)
    }
  }

  function handleOnSubmit(){
    let obj = {name:name, category:category, calories:calories, imageUrl:imageUrl, email:user.email}
    props.logNutrition(obj)
  }

    return (
      <div className="qnutrition-form">
      <div className="qinput-field">
        <h4 className="qtitle1">Name</h4>
        <input className="qform-input" name="name" type="name" value={name} onChange={setParams}></input>
      </div>
      <div className="qinput-field">
        <h4 className="qtitle1">Category</h4>
        <input className="qform-input" name="category" type="text" value={category} onChange={setParams}></input>
      </div>
      <div className="qinput-field">
        <h4 className="qtitle1">Calories</h4>
        <input className="qform-input" name="calories" type="number" value={calories} onChange={setParams} min={1}></input>
      </div>
      <div className="qinput-field">
        <h4 className="qtitle1">Image</h4>
        <input className="qform-input" name="imageUrl" type="text" value={imageUrl} onChange={setParams}></input>
      </div>
      <div className="qregister-button">
        <Link to="/nutrition"> <button onClick={handleOnSubmit} className="register">Submit</button> </Link>
      </div>
    </div>
    )
}