  
const mongoose = require('mongoose')

const ScreenScheduleSchema = new mongoose.Schema({

    mall_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    screen_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    movie_schedule: [{
     movie_id: {  
         type: Schema.Types.ObjectId,
        requird: true
      },
      time_slots: [{
        start_time:{
        type: String,
        required: true,
    },
    end_time:{
        type: String,
        required: true,
    }
}]
    }],
    price_seat_section:[{
      section:{type:String},
      price:{type:Number},
    }],
    start_date: {
        type: Date,
        required: true,
    },
    end_date: {
        type: Date,
    },
    
})

const ScreenSchedule = mongoose.model('ScreenSchedule', ScreenScheduleSchema);


exports.ScreenScheduleSchema = ScreenSchedule