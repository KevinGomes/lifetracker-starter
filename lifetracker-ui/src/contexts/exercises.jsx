<<<<<<< HEAD
import axios from "axios"
import React, { useContext, createContext, useState, useEffect } from "react"
import { useAuthContext } from "./auth"
=======
import axios from "axios";
import React, { useContext } from "react";
import ApiClient from "../services/apiClient";
import { useAuthContext } from "../contexts/auth";
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d

const ExerciseContext = React.createContext(null);

export const ExerciseContextProvider = ({ children }) => {
    const [exercises, setExercises] = React.useState({})
    const [initialized, setInitial] = React.useState(false)
    const [isProcessing, setIsProcessing] = React.useState(false)
    const [error, setError] = React.useState("")

    const { user } = useAuthContext()

    React.useEffect(async () => {
<<<<<<< HEAD
        setIsProcessing(true)
        try {
          const req = await axios.get("http://localhost:3001/exercise", {headers: {Authorization: `Bearer ${localStorage.getItem("lifetracker_token")}`}})
          setExercises(req.data.listExercises)
=======
        setIsProcessing(true);
        if(localStorage.getItem("lifetracker_token")){
            ApiClient.setToken(localStorage.getItem("lifetracker_token"));
          }
        try {
          const req = await ApiClient.getExercises();
          setExercises(req.data.listExercises);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
        } catch (err) {
          setError("")
        }
        setIsProcessing(false)
        setInitial(true)
    }, []);

    
    const logExercise = (data) => {
        let obj = {
            name: data.name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
            category: data.category.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))),
            duration:data.duration,
            email: user.email
        }
        const req = async () => {
            try {
<<<<<<< HEAD
                const getData = await axios.post("http://localhost:3001/exercise", obj)
=======
                const getData = await ApiClient.logExercises(obj);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
                setExercises(getData);
            }
            catch(err){
                console.log(err)
            }
        }
        req();
    }

    const reload = () => {
        if(isLoading === false){
            window.location.reload()
        }
    }

    const exerciseValue = { exercises, initialized, setInitial, isProcessing, setIsProcessing, logExercise, reload }

    return (
        <ExerciseContext.Provider value={exerciseValue}>
            <>{ children }</>
        </ExerciseContext.Provider>
    )
}  


export const useExerciseContext = () => useContext(ExerciseContext)