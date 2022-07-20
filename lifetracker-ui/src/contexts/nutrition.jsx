<<<<<<< HEAD
import axios from 'axios'
import React from 'react'
import { useContext, createContext, useState, useEffect } from 'react'
import { AuthContextProvider, useAuthContext} from "./auth"
=======
import axios from 'axios';
import React from 'react';
import ApiClient from "../services/apiClient"
import { useContext, createContext, useState, useEffect } from 'react';
import { useAuthContext } from "../contexts/auth";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d


const NutritionContext = createContext(null);

export const NutritionContextProvider = ({ children }) => {
    const [nutrition, setNutrition] = useState([])
    const [initialized, setInitial] = React.useState(false)
    const [isProcessing, setIsProcessing] = React.useState(false)
    const [error, setError] = React.useState(null)

<<<<<<< HEAD
    const { user } = useAuthContext()

    useEffect(async () => {
        setIsProcessing(true)
        try {
            console.log(localStorage.getItem("lifetracker_token"))
            const req = await axios.get("http://localhost:3001/nutrition", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}})
            console.log(req.data)
            setNutrition(req.data)
=======
    const { user } = useAuthContext();
    

    useEffect(async () => {
        setIsProcessing(true);
        if(localStorage.getItem("lifetracker_token")){
            ApiClient.setToken(localStorage.getItem("lifetracker_token"));
        }
        try {
            const req = await ApiClient.getNutrition();
            setNutrition(req.data);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
        }
        catch(err){
            console.log(err)
        }
        setIsProcessing(false)
        setInitial(true)
    },[])
<<<<<<< HEAD
=======

   
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
    
    const logNutrition = (data) => {
        let obj = {
            name:data.name,
            category:data.category,
            calories:data.calories,
            image_url:data.imageUrl,
            email:data.email
        }
        const req = async () => {
            try{
<<<<<<< HEAD
                const getData = await axios.post("http://localhost:3001/nutrition", {data:obj})
=======
                const getData = await ApiClient.logNutrition(obj)
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
                setNutrition(getData.data)
            }
            catch(err){
                console.log(err)
            }
        }
        req()
    };

    const nutritionValue = { nutrition, isProcessing, initialized, error, logNutrition }
    
    return (
        <NutritionContext.Provider value={nutritionValue}>
            <>{children}</>
        </NutritionContext.Provider>
    )

}


export const useNutritionContext = () => useContext(NutritionContext)

