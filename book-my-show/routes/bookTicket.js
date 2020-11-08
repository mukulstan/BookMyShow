const BookTicket = require('../models/bookingticket');
const express = require('express')
const router = express.Router()






router.post('/', async (req, res) => {
    try {
        const { mallId, screenId, movieId, userId, numberOfTickets, seatData, totalCost, cartAddTime } = req.body
            if(mallId && screenId && movieId && userId && numberOfTickets && seatData && totalCost && cartAddTime){    
                let scheduleData = await BookTicket.create({
                    mallId, screenId, movieId, userId, numberOfTickets, seatData, totalCost, cartAddTime
                    })

            }
      if(scheduleData){
        res.json("Ticket Added To Cart")
      }
        
    }
    catch (err) {

    }
}
)




router.get('/:id', async (req,res) =>{                  //id here is user id    this is cart Api
 
    //    let  = await ScreenSchedule.find()
    
       let cartData = await BookTicket.aggregate([
        {
            $match : { user_id : ObjectId(id)}} ,
            {
                "$lookup": {
                    "from": "movies",
                    "localField": "movie_id",
                    "foreignField": "_id",
                    "as": "movie"
                }}
            ])
            if(cartData){
                res.json(cartData)
              }

        })
