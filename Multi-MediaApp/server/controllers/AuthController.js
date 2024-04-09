const express = require('express');
const router = express.Router();
const User = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res)=>{
    console.log(req.body);
    const { email, password, passwordConfirmation, username } = req.body;
    const emailExists = await User.findOne({email:email})
    if(emailExists){
        console.log("email exists")
        res.send({error:"Email Already Exists"})
        return
    }
    if(password === passwordConfirmation){
        // The model.create() method is the same as calling new User() and User().save() at the same time
        // it is an asynchronous method, use async-await
        const newUser = await User.create({email:email, password:password, username:username});
        console.log(newUser);
        const token = jwt.sign({newUser}, "secret");
        res.status(200).send(JSON.stringify(token));
    }
    else{
        res.status(406).send({error:"Passwords do not match"})
    }
})

router.post("/login", async ( req, res ) => {
    const { email, password } = req.body;
    // model.find() returns an array
    // model.findOne() returns a single document
    // these are both asynchronous operations
    const userLookup = await User.findOne({email:email});
    if(userLookup){
        if(userLookup.password === password){
            const token = jwt.sign({userLookup}, "secret");
            res.status(200).send(JSON.stringify(token));
        }
        else{
            res.status(404).send({error:"Wrong password"});
        }
    }
    else{
        res.status(404).send({error:"user not found"});
    }
})

module.exports = router;