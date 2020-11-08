var status= require('../config/statusCode')
var messages = require('./../utils/localfile');

module.exports.response=(res,code,message,data) =>{
 var result ={
     status:{
         code:status.codeStatus[code],
         message: messages.message[message]
     }
 }
 
 if(typeof data!='undefined'){
    result.data=data
 }
else{
    result.data= {}
}
 return  res.json(result)
}