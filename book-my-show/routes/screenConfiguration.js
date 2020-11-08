const mongoose = require('mongoose');
const ScreenConfiguration = require('../models/screenConfiguration');
const express = require('express');
const router = express.Router();
const serviceResponse = require('../services/response');
const ObjectId = mongoose.Types.ObjectId;





router.post('/', async (req, res) => {
    try {
        let screenConfigurationData = req.body.screen.screendata
        console.log("screenConfigurationData", screenConfigurationData)
        let screen_name = screenConfigurationData.map(x => x.name)
        let screenName = await ScreenConfiguration.find( { "name": { $in: screen_name } } )
        if (screenName.length > 0) {
            res.json("screenname exist")
        }
        let screenConfiguration = await ScreenConfiguration.create(req.body.screen)
        console.log("screenConfiguration", screenConfiguration)
        if (screenConfiguration) {
            var result = {
                status: {
                    code: 200,
                    message: "sucess"
                }
            }
            res.json(result)
        }
    }
    catch (err) {
        console.log("---a", err)
        return res.status(400).send(err);
    }
})

// screenId
router.get('/', async (req, res) => {                   
    // let screenId=req.params['screenId']
    let screenId=  ObjectId("5fa86469f40d7a09f414afb1")
 try {
     let screenArrangement = await ScreenConfiguration.findOne({"screenData._id":{$in:screenId } })
     if (screenArrangement) {
        return serviceResponse.response(res, 'SUCCESS', 'DETAIL', screenArrangement)
    }
    return serviceResponse.response(res, 'NOT_FOUND', 'DETAIL', {})

 }
catch(err){
    console.log("err",err)
    
}

})






module.exports = router