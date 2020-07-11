// const mongoose = require('mongoose');  
const ScreenSchedule = require("../models/screenschedule");
const express = require('express')
const router = express.Router()

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




router.get('/:id', async (req, res) => {                  //id here is screen id 

    let screenScheduleData = await ScreenSchedule.aggregate([
        {
            $match: { "screensData.screenId": ObjectId(id) },
            $project: {
                screensData: {
                    $filter: {
                        input: "$screensData",
                        as: "screen",
                        cond: { $eq: ["$$screensData.screenId", ObjectId(id)] }
                    }
                }
            }
        },
        { $unwind: "$screensData.screenId" }  ,
        {
            $lookup: {
                from: "movies",
                localField: "movieId",
                foreignField: "_id",
                as: "movie"
            }
        },
        { "$lookup": {
            "from": "movies",
            "let": { "movie": "$movieId" },
            "pipeline": [
              { "$match": { "$expr": { "$eq": [ "$_id", "movie" ] } } },
              { "$project": { "movieName": 1 }}
            ],
            "as": "movie"
          }},
          { "$unwind": "$movie" },
        {
            $lookup: {
                from: "screenconfigurations",
                localField: "screensData.screenId",
                foreignField: "_id",
                as: "tickets"
            },
            $project: {
                "movieName": 1,     
            }
        },
    ])
})


module.exports = router











