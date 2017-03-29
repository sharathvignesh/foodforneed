var express = require('express');
var app = express();
var cors=require('cors');
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var event = require('./../../models/event');
//import event from './../../public/models/event';
//app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());

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

app.listen(8081);
