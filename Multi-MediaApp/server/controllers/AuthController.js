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
        res.status(200).send({user: newUser});
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
            res.status(200).send(userLookup);
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