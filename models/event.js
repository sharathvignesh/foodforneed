var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/foodforneed';
var Schema = mongoose.Schema;
mongoose.connect(mongoDB);

const EventSchema = new Schema({
  name: String,
  phonenumber: String,
  foodtype: [String],
  location: String,
  dishname: String,
  description: String
});

const Event = mongoose.model('Event', EventSchema);

function save(name, phonenumber, location, foodtype, dishname, description, callback) {
  Event.count({name: name, phonenumber: phonenumber, location: location, foodtype: foodtype, dishname: dishname, description: description}, (err, number) => {
    if (err) {
      return callback(err);
    }
    if (number !== 0) {
      return callback(name + ' is already registered.');
    }
    let event = new Event({name: name, phonenumber: phonenumber, location: location, foodtype: foodtype, dishname: dishname, description: description});
    event.save(callback);
  });
}
function getDetails(callback) {
  Event.find({}, function(err, details) {
    res.send(details);
  });
}



module.exports = {
  save: save,
  getDetails: getDetails
};
