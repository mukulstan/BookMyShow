const mongoose= require('mongoose');
const express=  require('express');
const app=  express();
const user= require('./controllers/user');
const screenconfiguration= require('./controllers/screenConfiguration');
 const screenSchedule=  require('./controllers/screenSchedule')

 const movie=  require('./controllers/movie')
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
app.use('/owner/screenconfiguration',screenconfiguration);
app.use('/owner/screenSchedule',screenSchedule);
app.use('/admin/movie',movie);
const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening on port ${port}...`));
app.listen(port, (err) => {  
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
  })