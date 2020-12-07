const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ScreenScheduleSchema = new mongoose.Schema({

    mallId: {
        type: String,
        // required: true,
    },
    movieDate: {
        type: String,
        // required: true,
    },
    movieId: {
        type: Schema.Types.ObjectId,
        ref: 'movies'

    },
    screenName: {
        type: Array,
        // required: true,
    },
   

    showCount: {
        type: Number
    },

    screensData: [{
        screenId: {
            type: String
        },
        movieStartTime: {
            type: String,
            required: true,
        },
        startDate: {
            type: String,
            // required: true,
        },
        endDate: {
            type: String,
            // required: true,
        },
        ticketSectionArray: [{
            sectionName: { type: String },
            ticketPerSection: { type: Number },
        }],
    }],
   
})

module.exports = mongoose.model('screenSchedule', ScreenScheduleSchema);
