const mongoose= require('mongoose')

const UserSchema=  new mongoose.Schema({

     name:{
        type:String,
         required:true,
         minLength:2,
         maxLength:5
     },
     email:{
      type:String,
      required:true,
      minLength:5,
      maxLength:255,
      unique:true
     },
     password:{
       type:String,
       minLength:5,
       maxLength:1024,
       requird:true
     },
     role:{
      type:Number,
      required:true,
      minLength:1,
      maxLength:1
     },
     address:{
      type:String,
      required:true,
      minLength:5,
      maxLength:255,
     },
     city:{
      type:String,
      minLength:5,
      maxLength:255,
      },
     state:{
      type:String,
      minLength:5,
      maxLength:255,
      
    },
    pincode:{
      type:Number,
      minLength:5,
      maxLength:10,
}
})

   module.exports  = mongoose.model('users',UserSchema);


// exports.User=User