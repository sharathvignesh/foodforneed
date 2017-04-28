

import express from 'express';
const path = require('path');
import GraphQLHTTP from 'express-graphql';
import schema from './../graphql/schema';
var cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
var event = require('./../models/event');

app.use(cors());
app.use(bodyParser.json());

///////////////////////////////////
//
//  Without graphql
//
///////////////////////////////////
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
// app.get('/ret', (req, res) => {
//
//   event.getDetails((err, detailsObj) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.json(detailsObj);
//   });
// });

///////////////////////////////////
//
//  With graphql
//
///////////////////////////////////
app.use('/graphql', GraphQLHTTP(req => {
	return ({
	  schema: schema,
	  pretty: true,
    graphiql: true
	})
}));

module.exports = app;
