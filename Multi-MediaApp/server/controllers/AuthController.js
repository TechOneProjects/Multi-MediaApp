const express = require('express');
const router = express.Router();
const User = require("../models/UserModel.ts");

router.post("/signup", async (req, res)=>{
    console.log(req.body);
    const { email, password, passwordConfirmation, username } = req.body;
    if(password === passwordConfirmation){
        // The model.create() method is the same as calling new User() and User().save() at the same time
        // it is an asynchronous method, use async-await
        const newUser = await User.create({email:email, password:password, username:username});
        console.log(newUser);
        res.send({user: newUser});
    }
})

router.post("/login", ( req, res ) => {
    console.log(req.body);
    res.send({msg: "getting data"});
})

module.exports = router;