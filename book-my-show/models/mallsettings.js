const mongoose = require('mongoose')

const BookingTicketSchema = new mongoose.Schema({

mall_id: {
    type: String,
    required: true,
},


mall_schedule:[{
    day:String,
    timings:String,
    type:String

}],

mall_status:{
type:String,
required:true

}



})