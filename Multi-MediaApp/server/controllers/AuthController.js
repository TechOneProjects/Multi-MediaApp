const express = require('express');
const router = express.Router();
const User = require("../models/UserModel.ts");
const jwt = require("jsonwebtoken");

router.get("/", async ( req, res ) => {
    console.log(req.get("Authorization"));
    const token = jwt.get; // this doesnt actually get a token
    if(token){
        res.status(200).send(JSON.stringify(token));
    }
    else{
        res.status(200).send({msg:"no log in"});
    }
})

router.post("/signup", async (req, res)=>{
    console.log(req.body);
    const { email, password, passwordConfirmation, username } = req.body;
    if(password === passwordConfirmation){
        // The model.create() method is the same as calling new User() and User().save() at the same time
        // it is an asynchronous method, use async-await
        const user = await User.create({email:email, password:password, username:username});
        console.log(user);
        const token = jwt.sign({user}, "secret");
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
    const user = await User.findOne({email:email});
    if(user){
        if(user.password === password){
            const token = jwt.sign({user}, "secret");
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