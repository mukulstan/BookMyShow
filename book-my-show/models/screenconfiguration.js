const mongoose = require('mongoose')

const ScreenConfigurtionSchema = new mongoose.Schema({

  mall_id: {
    type: String,
    // required: true,
  },
  numberOfScreens: {
    type: Number,
    required: true,
    minLength: 1,
  },
  screendata: [{
    name: {
      type: String,
      minLength: 5,
      maxLength: 1024,
      requird: true
    },
    numberOfSection: {
      type: Number,
      required: true,
    },
    sectiondata: [{
      name: {
        type: String,
        minLength: 5,
        maxLength: 1024,
        requird: true
      },
      numberOfRows: {
        type: Number,
        required: true,
      },
      seatsInRow: [{
        numberOfSeatsInRow: {                //keepstatus of each seat --like it may not to be used for sale  reason -broke/anything else 
          type: Number,
        }
      }],
      name_of_seat: {                                              //[{row1:gold1},{row1:gold2},{row2:silvver2} ]
        type: Array,
        //  required:true
      },
      totalTickets: {
        type: Number,
      },
      bookedTickets: {
        type: Number,
      },
      availableTickets: {
        type: Number,
      },
      seating_naming_from: {
        type: String,
      }
    }]

  }]

})

module.exports = mongoose.model('screenConfigurtion', ScreenConfigurtionSchema);

