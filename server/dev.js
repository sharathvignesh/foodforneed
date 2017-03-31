
// server/app.js
const express = require('express');

const path = require('path');
var cors=require('cors');
var bodyParser = require('body-parser');

const app = express();
var event = require('../models/event');
// Setup logger
app.use(cors());
app.use(bodyParser.json());
// Serve static assets


// Always return the main index.html, so react-router render the route in the client

app.post('/store', (req, res) => {
  let name = req.body.name;
  let phonenumber = req.body.phonenumber;
  let location = req.body.location;
  let foodtype = req.body.foodtype;
  let dishname = req.body.dishname;
  let imgurl = req.body.imgurl;
  let description = req.body.description;

  event.save(name, phonenumber, location, foodtype, dishname, imgurl, description, (error, eventObj) => {
    if (error) {
          console.log(error);
          return res.status(500).send(error);
        }
    res.json(eventObj);
  });
});



app.get('/ret', (req, res) => {

  event.getDetails((err, detailsObj) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(detailsObj);
  });
});
module.exports = app;
