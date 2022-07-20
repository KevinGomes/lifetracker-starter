import axios from "axios"
import React from "react";
import constants from "constants";

console.log(constants);

class ApiClient {
    constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "lifetracker_token"
    }

    //Sets the token
    async setToken(token){
        this.token = token;
<<<<<<< HEAD
        localStorage.setItem(this.tokenName, token)
=======
        localStorage.setItem(this.tokenName, this.token);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
    }

    async removeToken(){
        this.token = null;
        localStorage.removeItem(this.tokenName);
    }

     reload() {
        window.location.reload();
        return false;
    }

    //Issues axios requests
    async request({endpoint, method = "GET", data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }
        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }
        try {
<<<<<<< HEAD
            const request = await axios({url, method, data, headers})
            return {data: request.data, error:null}
=======
            const request = await axios({url, method, data, headers});
            if(request){ 
                return {data: request.data, error:null};
            }
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
        }
        catch(err){
            return {data:null, error:err};
        }
    }

    async fetchUserFromToken(){
        return await this.request({ endpoint: `auth/me`, method: `GET` })
    }

     async login(loginData){
        return await this.request({endpoint: `auth/login`, method:`POST`, data:loginData})
    }

<<<<<<< HEAD
   async signup(loginData){
    return await this.request({endpoint: `auth/register`, method:`POST`, data:loginData})
    }

    logoutUser(){
        localStorage.removeItem("lifetracker_token")
        window.location.reload()
        return false;
=======
   async signup(loginData){   
    return await this.request({endpoint: `auth/register`, method:`POST`, data:loginData})
    }

    async logNutrition(nutritionData){
        return await this.request({endpoint: `nutrition`, method:`POST`, data: nutritionData})
    }
    async getNutrition(){
        return await this.request({ endpoint: `nutrition`, method: `GET` })
    }

    async getActivity(){
        return await this.request({ endpoint: `activity`, method: `GET` })
    }
    async getActivityExercise(){
        return await this.request({ endpoint: `activity/exercise`, method: `GET` })
    }

    async getExercises(){
        return await this.request({ endpoint: `exercise`, method: `GET` })
    }
    async logExercises(exerciseData){
        return await this.request({endpoint: `exercise`, method:`POST`, data: exerciseData})
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
    }
} 


<<<<<<< HEAD
export default new ApiClient("http://localhost:3001")
=======
export default new ApiClient("https://lifetracker-site-amaar.herokuapp.com");

>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
