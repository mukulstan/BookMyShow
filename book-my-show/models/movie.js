const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({

    movieName: {
        type: String,
        required: true,
    },
    duration: {
        type: String,     //in min
        required: true,
    },
    synopsis:{
        type:String
    },

    genre: {
        type: Array,
        required: true
    },
    language: {
        type: Array,
        required: true
    },
    onlineStatus: {
        type: Boolean
    },


    cast: [{
        actorName: {
            type: String
        },
        actingName: {
            type: String
        },
        role: {
            type: String
        }
    }],
    crew: [{
        crewName: {
            type: String
        },
        role: {
            type: String
        },
    }],
    averageRating: {
        type: Number,
    },
    releaseDate: {
        type: Date,
        required: true

    },
    trailerLink: {
        type: String,
    },


})

module.exports = mongoose.model('movie', MovieSchema);