const express = require("express")
const router = express.Router()
const User = require("../models/user")
const { createUserJwt } = require("../utils/tokens")
const security = require("../middleware/security")


router.post("/login", async(req,res,next) => {
    try{
        const user = await User.login(req.body)
        const token = createUserJwt(user)
        return res.status(200).json({ user, token })
    } catch(err){
        next(err)
    }
})

router.post("/register", async(req,res,next) => {
    try {
        const user = await User.register(req.body)
        const token = createUserJwt(user)
        return res.status(200).json({ user, token })
    }  
    catch(err){
<<<<<<< HEAD
       next(err)
=======
        next(err);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
    }
})


router.get(("/me"), security.requireAuthenticatedUser, async(req,res,next) => {
    try {
<<<<<<< HEAD
        const { email } = res.locals.user
        const user = await User.fetchUserByEmail(email)
=======
        const { email } = res.locals.user;
        const user = await User.fetchUserByEmail(email);
>>>>>>> c325d6d2a0dd6ab6c3d5b0be8ddf45d3af1fe83d
        const publicUser = {id: user.id, email: user.email, first_name: user.first_name, last_name: user.last_name}
        return res.status(200).json({ user: user })
    }
    catch(err){
        next(err)
    }
})



module.exports = router

