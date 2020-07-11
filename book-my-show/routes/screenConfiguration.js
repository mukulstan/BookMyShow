const mongoose = require('mongoose');
const ScreenConfiguration = require('../models/screenConfiguration');
const express = require('express');
const router = express.Router()






router.post('/', async (req, res) => {
    try{
        let screenConfigurationData= req.body.screen.screendata
        console.log("screenConfigurationData",screenConfigurationData)
       let screen_name=screenConfigurationData.map(x=> x.name)
       console.log("screen_Name",screen_name)
let screenName=  await ScreenConfiguration.find({"name":{$in:screen_name}})
console.log("screenName",screenName)


        if(screenName.length>0)
        {
            res.json("screenname exist")
        }
         
        


  let screenConfiguration = await ScreenConfiguration.create(req.body.screen)
  console.log("screenConfiguration",screenConfiguration)
    if(screenConfiguration){
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
     console.log("---a",err)
    return res.status(400).send(err);
 }    
})
module.exports=router