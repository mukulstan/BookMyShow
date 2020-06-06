const mongoose = require('mongoose')

const userReviews = new mongoose.Schema({

user_id:{
type:String,
required:true
},
movie_id:{
    type:String,
required:true
},
title:{
    type:String,
required:true
},
comment:{
    type:String,
required:true
},

liked_value:{
    type:Number,
    required:true
},
disliked_value:{
    type:Number,
    required:true
},

date_of_review:{
        type:Date,
        required:true
    
}


})