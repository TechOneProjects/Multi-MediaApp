const express = require('express');
const router = express.Router();
const user = require("../models/UserModel.ts");

router.post("/signup", (req, res)=>{
    console.log(req.body);
})

router.post("/login", ( req, res ) => {
    console.log(req.body);
    res.send({msg: "getting data"});
})

module.exports = router;