const mongoose = require('mongoose')

const ScreenConfigurtionSchema = new mongoose.Schema({

  mall_id: {
    type: String,
    required: true,
  },
  number_of_screens: {
    type: Number,
    required: true,
    minLength: 1,
  },
  
    name_of_screen: {
        type: String,
      minLength: 5,
      maxLength: 1024,
      requird: true
    },
    number_of_section: {
      type: Number,
      required: true,
    },
    section_data: [{
      name_of_section: {
        type: String,
        minLength: 5,
        maxLength: 1024,
        requird: true
      },
      number_of_rows: {
        type: Number,
        required: true,
      },
      seats_in_row: {                //keepstatus of each seat --like it may not to be used for sale  reason -broke/anything else 
        type: Array,
        required: true,
      },
      name_of_seat:{                                              //[{row1:gold1},{row1:gold2},{row2:silvver2} ]
         type:Array,
         required:true
      },
      ticket_price: {
        type: Number,  
        required:true,
      },
      seating_naming_from: {
        type: String,
        minLength: 5,
        maxLength: 10,
      }
    }]

  

})

module.exports = mongoose.model('screenConfigurtion', ScreenConfigurtionSchema);

