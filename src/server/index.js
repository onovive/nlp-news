var path = require('path');
const express = require('express');
var aylien = require('aylien_textapi');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json())

var textapi = new aylien({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`
});

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(express.static('dist'))

app.get('/', (req, res) => {
  console.log(req.body);
  res.sendFile(path.resolve('index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    //console.log(mockAPIResponse)
})

app.post('/test', async (req,res,next) => {
  try {
    var data = textapi.sentiment({
  'text': 'John is a very good football player!'
}, function(error, response) {
  if (error === null) {
    console.log(response);
    res.send(response);
  }
});

} catch(error){
  return next (error)
}
})
