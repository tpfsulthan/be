var express = require('express');
var router = express.Router();
var dbModel = require("../model/index");
var data = require("../model/data");
var style = data.style;
var equipment = data.equipment;
var geojson = require("../public/geojson");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ status : true });
});

router.get('/airship', function(req, res, next) {
  
  res.json({ status : "Message sent"+req.body.message });
});


router.get('/getGeoLocation', function(req, res, next) {
  var vehicle = req.query.vehicle;
  if(equipment[vehicle]==undefined){
    res.json({ status : false, message : "Invalid vehicle number. Allowed 0-3" });
  }
  else{
    var location = {lat: equipment[vehicle].lat,lng:equipment[vehicle].lng};
    res.json({ status : true, location : location });
  }
});

router.get('/updateGeoLocation', function(req, res, next) {
  var device = req.query.device_id;
  dbModel.equipment.findOne({device_id:device}, function(err, data) {
    data.lat = req.query.lat;
    data.lng = req.query.lng;
    data.save(function(err) {
        if (err) {
            res.status(202).json({
                "success": "0",
                "message": "Error fetching data"
            });
        } else {
            res.status(200).json({status: 1, message: 'Location updated Success'} );  
        }
    })
    });
});


router.get('/getNotification', function(req, res, next) {
  var message = [
    {id : 1, message : "Catering vehicle was cancelled"},
    {id : 2, message : "Fuelling vehicle was cancelled"}
  ]
  res.json({ status : true, message : message });
});

router.get('/ping', function(req, res, next) {
  res.json({ status : true });
});

router.get('/getMaster', function(req, res, next) {
  dbModel.bay.find({}, function(err, bay) {
    if(err){
      res.status(200).json({status: 0, error  : err} );
    } else {
      dbModel.flight.find({}, function(err, flight) {
        if(err){
          res.status(200).json({status: 0, error  : err} );
        } else {
          
          dbModel.equipment.find({}, function(err, equipment) {
            if(err){
              res.status(200).json({status: 0, error  : err} );
            } else {
              var data = {bay : bay, flight: flight, equipment : equipment, style : style, geojson : geojson};
              res.status(200).json({status: true, data  : data} );
            }
          });

        }
      });

    }
  });
});
router.get('/getBay', function(req, res, next) {
  res.status(200).json({status: true, data  : geojson} );
});


module.exports = router;
