import axios from"axios"

class ApiClient{
     constructor(remoteHostUrl){
        this.remoteHostUrl = remoteHostUrl
        this.token = null
        this.tokenName = "lifetracker_token"
    }

    setToken(token){
        this.token = token
        localStorage.setItem(this.tokenName, token)
    }

    async request({endpoint, method = "GET", data = {}}){
        const url = `${this.remoteHostUrl}/${endpoint}`

        const headers = {
            "Content-Type": "application/json"
        }

        if(this.token){
            headers["Authorization"] = `Bearer ${this.token}`
        }

        try {
            const request = await axios({url, method, data, headers});
            return {data: request.data, error:null};
        }
        catch(err){
            console.log(err)
            return {data:null, error:err}
        }
    }

    login(){
        return await this.request({endpoint: `auth/login`, method:`POST`, data:loginData})
    }

    signup(){
        return await this.request({endpoint: `auth/register`, method:`POST`, data:loginData})
    }

    fetchUserFromToken(){
        return await this.request({ endpoint: `auth/me`, method: `GET` })
    }

    logoutUser(){
        localStorage.removeItem("lifetracker_token")
        window.location.reload()
        return false
    }

}

export default new ApiClient("http://localhost:3001")