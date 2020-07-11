const mongoose = require('mongoose')

const MovieAnalytics = new mongoose.Schema({
   mallId: {
      type: String,
   },
   movieId: {
      type: String,
   },
   date: {
      type: String,
   },
   totalRevenueGenerated: {
      type: String,
   },
   dayCollection: {
      type: String,
   },
   runningStatus: {
      type: String
   },
   seatsOccupancy: [{
      morningOccupancy: {},
      afterNoonOccupancy: {},
      nightOccupancy: {}
   }],
   releaseDate: {
      type: Date,
      required: true

   },
   showCount: {
      type: Number
   },
   runningDuration: {
      type: String
   }



})

module.exports = mongoose.model('movieanalytics', MovieAnalytics);


// exports.User=User