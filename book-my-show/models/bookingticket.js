const mongoose = require('mongoose')

const BookingTicketSchema = new mongoose.Schema({

    mall_id: {
        type: String,
        required: true,
    },
    screen_id: {
        type: String,
        required: true,
    },
    movie_id: {
        type: String,
        requird: true
    },
    user_id: {
        type: String,
        requird: true
    },
     number_of_tickets: {
        type: Number,
        required: true
    },
    seat_data:[{
        seat_number:{
            type:String,
            requird:true
        },
        seat_type:{
            type:String,
            requird:true
        },
        
        price:{
            type:String,
            requird:true
        }
    }],

    total_cost: {
        type: Number,
        required: true
    },


    
    cart_add_time: {
        type: Date,
        required: true,
    },
    payment_status:{
        type: String,
        required: true,
    },
    booking_status:{
        type: String,                 //1-confirmed 2-payment-pending
         required: true,
    },

    time_slots: {
        start_time:{
        type: String,
        required: true,
    },
    end_time:{
        type: String,
        required: true,
    },

}})

const BookingTicket = mongoose.model('bookingTicket', BookingTicketSchema);


exports.BookingTicket = BookingTicket