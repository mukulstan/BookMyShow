const Movie = require('../models/movie');
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const serviceResponse = require('../services/response')
const ObjectId = mongoose.Types.ObjectId;




router.post('/', async (req, res) => {
    try {
        const { movieName, duration, genre, language, cast, crew, averageRating, releaseDate, trailerLink } = req.body.movie

        let movieExist = await Movie.findOne({ movieName: movieName })
        console.log("movieExist", movieExist)
        if (movieExist) {
            res.json("Movie Name Exist")
        }
        let scheduleData = await Movie.create({
            movieName, duration, genre, language, cast, crew, averageRating, releaseDate, trailerLink
        })

        if (scheduleData) {
            res.json("Movie Added")
        }

    }

    catch (err) {
        console.log("errr", err)
    }
}
)


// router.get('/:id', async (req, res) => {                  //id here is user id    this is cart Api
//     let movieAnalticsData = await MovieAnaltics.aggregate([
//         {
//             $match: {
//                 movieId: ObjectId(id)
//             }
//         },
//         {
//             $limit: limit
//         }, {


//             $skip: skip
//         },
//         {
//             $group: {
//                 _id: $movieId,
//                 maxDayCollection: { $max: $dayCollection },
//                 totalRevenueGenerated: { $first: '$totalRevenueGenerateds' },
//             }
//         },
//         {
//             $lookup: {
//                 from: "screenschedule",
//                 localField: "_id",
//                 foreignField: "movieId",
//                 as: "movi"
//             }
//         }
//     ])
// })

    router.get('/online', async (req, res) => {
        let moviesOnline = await Movie.find({ onlineStatus: true })
        if (moviesOnline) {
            return serviceResponse.response(res, 'SUCCESS', 'DETAIL', moviesOnline)
        }
        return serviceResponse.response(res, 'NOT_FOUND', 'DETAIL', {})
    })


    router.get('/:id', async (req, res) => {
        console.log(req.params)
        let movieId = req.params['id'];
        let movieDetails = await Movie.findOne({ _id:ObjectId(movieId)})
        if (movieDetails) {
            return serviceResponse.response(res, 'SUCCESS', 'DETAIL', movieDetails)
        }
        return serviceResponse.response(res, 'NOT_FOUND', 'DETAIL', {})



    })



module.exports = router