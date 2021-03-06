var mongoose = require('mongoose');
//var mongoDB = 'mongodb://sharath:renade@ds145800.mlab.com:45800/heroku_vtn7562l';
var mongoDB = 'mongodb://127.0.0.1/foodforneed';
var Schema = mongoose.Schema;
mongoose.connect(mongoDB);

const EventSchema = new Schema({
  name: String,
  phonenumber: String,
  foodtype: [String],
  location: String,
  dishname: String,
  imgurl: String,
  description: String
});

const Event = mongoose.model('Event', EventSchema);

function save(name, phonenumber, location, foodtype, dishname, imgurl, description) {
  Event.count({name: name, phonenumber: phonenumber, location: location, foodtype: foodtype, dishname: dishname, imgurl: imgurl, description: description}, (err, number) => {
    if (err) {
      console.log("error");
      return "error";
    }
    let event = new Event({name: name, phonenumber: phonenumber, location: location, foodtype: foodtype, dishname: dishname, imgurl: imgurl, description: description});
    event.save();
  });
  return {'name': name, 'phonenumber': phonenumber, 'location': location, 'dishname': dishname, 'imgurl': imgurl, 'description': description}
}
function getDetails(callback) {
  return Event.find(callback);
}

module.exports = {
  save: save,
  getDetails: getDetails
};
