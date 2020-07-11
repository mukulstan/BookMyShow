const mongoose = require('mongoose');
const User = require('../models/users');
const express = require('express');
const { BookingTicket } = require('../models/bookingticket');
const router = express.Router()


try {
    cron.schedule("* * * * *", async function () {

        let todayDate = new Date()
        // let bookedTickets=   await BookingTicket.find({   })

        // totalCost
        let movieAnalticsData = await BookingTicket.aggregate([
            { $match: { $and: [{ bookingStatus: 'Confirmed' }, { cartAddTime: todayDate }] } },
            { $group: { _id: "$movieId", dayCollection: { $sum: "$totalCost" } } },

           { $lookup: {
                from: "screenschedule",
                localField: "_id",
                foreignField: "movieId",
                as: "screenCount"
            }},
            { $lookup: {
                from: "movies",
                localField: "movieId",
                foreignField: "_id",
                as: "movieRelease"
            }
        }
        ])

        let movies= await Movies.find({runningStatus:"Running"})

        let movieAnalytics= await MovieAnalytics.find({movieId:{$in :movies}})

        movieAnalytics.forEach((element ,index)=> {
        let movie=  movieAnalticsData.find(movie=>movie.movieId==element.movieId)
        if (movie.dayCollection && movie.dayCollection>element.dayCollection){
            movieAnalticsData.maxDayCollection= movie.dayCollection
        }
        else{
            movieAnalticsData.maxDayCollection= element.dayCollection
        }
        if (movie.totalRevenueGenerated){
            movie.totalRevenueGenerated=movie.totalRevenueGenerated+movie.dayCollection

        }
        else{
            movie.totalRevenueGenerated=movie.dayCollection
          }                
        });

          movie.runningDuration= currentDate-movieAnalyticsData.movieRelease


      let movieAnalyticsData=  await MovieAnalytics.insertMany(movieAnalticsData)



        console.log("running a task every minute");
    });


}
catch (err) {
    console.log("hii", err)
    return res.status(400).send(err);
}

module.exports = router;  