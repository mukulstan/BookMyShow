const mongoose = require('mongoose')

const BookingTicketSchema = new mongoose.Schema({

    mallId: {
        type: String,
        required: true,
    },
    screenId: {
        type: String,
        required: true,
    },
    movieId: {
        type: String,
        requird: true
    },
    userId: {
        type: String,
        requird: true
    },
     numberOfTickets: {
        type: Number,
        required: true
    },
    seatData:[{
        seat_number:{
            type:String,
            requird:true
        },
        seatType:{
            type:String,
            requird:true
        },
        
        price:{
            type:String,
            requird:true
        }
    }],

    totalCost: {
        type: Number,
        required: true
    },


    
    cartAddTime: {
        type: Date,
        required: true,
    },
    paymentStatus:{
        type: String,
        required: true,
    },
    bookingStatus:{
        type: String,                 //1-confirmed 2-payment-pending
         required: true,
    },

    timeSlots: {
        start_time:{
        type: String,
        required: true,
    },
    endTime:{
        type: String,
        required: true,
    },

}})

const BookingTicket = mongoose.model('bookingTicket', BookingTicketSchema);


exports.BookingTicket = BookingTicket