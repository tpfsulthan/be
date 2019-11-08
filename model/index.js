var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/SmartTrack', { useNewUrlParser: true, useUnifiedTopology: true });
var Schema = mongoose.Schema;
var data = require("./data");
var equipmentSchema = {
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  "lng": String,
  "lat": String,
  "icon": String,
  "status": String,
  "name": String,
  "device_id": String
}
var flightSchema = {
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  "status": String,
  "name": String
}
var baySchema = {
  updated_at: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
  "status": String,
  "name": String
}

var equipment = mongoose.model('equipment', equipmentSchema);
var flight = mongoose.model('flight', flightSchema);
var bay = mongoose.model('bay', baySchema);

equipment.countDocuments(function(err, count) {
  if (!err) {
      if (count == 0) {
          for (let index = 0; index < data.equipment.length; index++) {
            var dataElement = new equipment({ "status": 1, "name": data.equipment[index].name, "lat": data.equipment[index].lat, "lng": data.equipment[index].lng, "icon": data.equipment[index].icon, "device_id": data.equipment[index].device_id });
            dataElement.save(function(err) { if (err) { console.log(err); } else { console.log('Seeded success'); } });  
          }
      }
  } else {  console.log("Error in establishing DB"); }
});

flight.countDocuments(function(err, count) {
  if (!err) {
      if (count == 0) {
          for (let index = 0; index < data.flight.length; index++) {
            var dataElement = new flight({ "status": 1, "name": data.flight[index].name });
            dataElement.save(function(err) { if (err) { console.log(err); } else { console.log('Seeded success'); } });  
          }
      }
  } else {  console.log("Error in establishing DB"); }
});

bay.countDocuments(function(err, count) {
  if (!err) {
      if (count == 0) {
          for (let index = 0; index < data.bay.length; index++) {
            var dataElement = new bay({ "status": 1, "name": data.bay[index].name });
            dataElement.save(function(err) { if (err) { console.log(err); } else { console.log('Seeded success'); } });  
          }
      }
  } else {  console.log("Error in establishing DB"); }
});

mongoose.set('debug', true);
module.exports = { equipment: equipment,flight : flight,bay: bay};