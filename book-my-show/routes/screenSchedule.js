const mongoose = require('mongoose');
const ScreenSchedule = require("../models/screenschedule");
const express = require('express')
const router = express.Router()
const ObjectId = mongoose.Types.ObjectId;
const serviceResponse = require('../services/response');

router.post('/', async (req, res) => {
    let mailId
    try {
        const { screenName, movieName, screensData, startDate, endDate, movieTimeArray } = req.body.screen

        let conditions = {}
        // [{ "rating.average": { gte: 3 } }
        if (startDate) {
            conditions = {
                $and: [{ mailId: mailId }, { "screenName": { $in: screenName } },
                { startDate: startDate }]
            }
        }

        if (startDate && endDate) {
            conditions = {
                $and: [{ mailId: mailId }, { "screenName": { $in: screenName } },
                { startDate: { $gte: startDate } }, {
                    endDate: { $lte: endDate }
                }]
            }
        }

        if (startDate == '' && endDate) {
            return res.status(400).send('StartDate cannot be empty');
        }

        let screenData = await ScreenSchedule.findOne(conditions)

        if (screenData) {
            return res.status(400).send('Booking exist on this date.For adding movie ,go to edit section.');
        }


        let scheduleData = await ScreenSchedule.create({
            screenName, movieName, screensData, startDate, endDate, movieTimeArray
        })
        if (scheduleData) {
            return res.status(200).send('schedule success');
        }
    }
    catch (err) {
        console.log('errr', err)
        return res.status(400).send(err);
    }
})



router.put('/', async (req, res) => {
    try {
        const { mall_id, screen_id, movie_id, start_date_id, time_slots } = req.body
        let screenData = ScreenSchedule.findOne({
            $and: [{ mall_id: mall_id }, { screen_id: screen_id },
            { start_date: start_date }
            ]
        })

        let timeSlots = screenData.time_slots
        let occupiedTimeSlots = []
        if (timeSlots) {
            for (let i = 0; i < time_slots.length; i++) {
                for (let j = 0; j < timeSlots.length; j++) {
                    if (time_slots[i].start_time.isBetween(timeSlots[j].start_time, timeSlots[j].end_time)) {
                        occupiedTimeSlots.push(time_slots)
                        break;
                    }
                }
            }
        }
        if (occupiedTimeSlots) {
            return res.status(400).send('time slots registered.');
        }

        let filter = start_date_id
        let update = req.body
        let screenUpdated = await ScreenSchedule.update(filter, update)
        if (screenUpdated) {
            res.status(200).send('Screen Updated');
        }
    }
    catch (error) { }



})



// students:{$elemMatch:{$eq:ObjectId("51780f796ec4051a536015cf")}}


router.get('/', async (req, res) => {                  //id here is screen id 
    let id = "5fa86469f40d7a09f414afb1";
    let movieId=ObjectId("5efa3ef59de42327b0e612ab")

    let screenScheduleData = await ScreenSchedule.aggregate([
        {
            $match: {
                $and: [
                    { movieDate: "02-12-2020" },
                    // { 'stores.$': 1 }
                    {movieId: movieId}, 
                ]
            }
        },
        { $unwind: "$screensData" },
        { $match: { "screensData.screenId": ObjectId(id) } },
        {
            $lookup: {
                from: "movies",
                localField: "movieId",
                foreignField: "_id",
                as: "movie"
            }
        },
        // {
        //     $lookup: {
        //         from: "screenconfigurtions",
        //         localField: "screensData.screenId",
        //         foreignField: "screenData._id",
        //         as: "screenconfigurationData"
        //     }
        // },
    ])
    if (screenScheduleData) {
        return serviceResponse.response(res, 'SUCCESS', 'DETAIL', screenScheduleData)
    }

    console.log("screenScheduleData", JSON.stringify(screenScheduleData))
})


module.exports = router











