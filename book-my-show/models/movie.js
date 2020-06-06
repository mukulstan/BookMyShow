const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({

movie_name: {
    type: String,
    required: true,
},
duration:{
    type:String,     //in min
    required:true,
},

genre: {
    type:Array,
    required:true
},
language: {
    type:Array,
    required:true
},
cast:{
    type:Array,
    required:true
},
average_rating:{
    type:double,
    required:true

},
release_date:{
    type:Date,
    required:true

},
trailer_link:{
    type:String,
    required:true
}
})

