const mongoose= require('mongoose');
const express=  require('express');
const app=  express();
const user= require('./routes/user');
const screenconfiguration= require('./routes/screenConfiguration');
 const screenSchedule=  require('./routes/screenSchedule')

 const movie=  require('./routes/movie')
const cors = require('cors');
const bodyParser = require('body-parser');



 mongoose.connect('mongodb://localhost/bookMyShow')
 .then(() => console.log('Connected to MongoDB...'))
 .catch(err => console.error('Could not connect to MongoDB...',err));
 app.use(cors());
//  app.use(logger('dev'));
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());
app.use(express.json());
app.use('/users/signup',user);
app.use('/screenConfiguration',screenconfiguration);
app.use('/screenSchedule',screenSchedule);
app.use('/movie',movie);
const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
app.listen(port, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
  })