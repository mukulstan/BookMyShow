const mongoose = require('mongoose');
const User = require('../models/users');
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    // console.log("22222")
})



router.post('/', async (req, res) => {
    try{

    let { name, email, password, role, address, city, state, pincode } = req.body.user
        console.log("--",req.body)
        console.log("--",password)
     let user=  await User.findOne({email:email})
     console.log("--",user)
     if (user) return res.status(400).send('User already registered.');
    //  const salt = await bcrypt.genSalt(10);
    //  password = await bcrypt.hash(password, salt);
    user = await User.create({
        name,
        email,
        password,
        role,
        address,
        city,
        state,
        pincode
    })
    console.log("User Created",user)
    if(user){
        var result = {
            status: {
                code: 200,
                message: "sucess"
            }
        }
        res.json(result)
    }
}
 catch(err){
     console.log("hii",err)
    return res.status(400).send(err);
 }    
})
module.exports = router; 