const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ScreenScheduleSchema = new mongoose.Schema({

    mallId: {
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
    movieTimeArray: [{
        movieStartTime: {
            type: String,
            required: true,
        },
        movieEndTime: {
            type: String,
            // required: true,
        }
    }],

    showCount: {
        type: Number
    },

    screensData: [{
        screenId: {
            type: String
        },
        ticketSectionArray: [{
            sectionName: { type: String },
            ticketPerSection: { type: Number },
        }],
    }],
    startDate: {
        type: String,
        required: true,
    },
    endDate: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('screenSchedule', ScreenScheduleSchema);
