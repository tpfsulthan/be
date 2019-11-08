var equipment = [ 
  {"device_id":1,"name":"Catering","icon":"catering.png","lat":12.951598,"lng":80.172462}, 
  {"device_id":2,"name":"Fuelling","icon":"fueling.png","lat":12.948514,"lng":80.196235}, 
  // {"device_id":3,"name":"Baggage","icon":"bma.png","lat":12.958189,"lng":80.187093}, 
  // {"device_id":4,"name":"Ladder","icon":"ladder.png","lat":12.943882,"lng":80.193186}
];
var flight = [ { "name":"RT100"}, { "name":"RT101"}, { "name":"RT102"}, { "name":"RT103"}];
var bay = [ { "name":"01"}, { "name":"02"}, { "name":"03"}, { "name":"04"}];
var style = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{visibility: "off"}]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{visibility: "off"}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}]
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}]
  },
  {
    featureType: 'poi',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [{visibility: 'off'}]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{visibility: "off"}]
  },
  {
    featureType: 'transit.station',
    stylers: [{visibility: "off"}]    
  },
  {
    featureType: 'water',
    stylers: [{visibility: "off"}]
  },
  {
    featureType: 'water',
    stylers: [{visibility: "off"}]
  },
  {
    featureType: 'water',
    stylers: [{visibility: "off"}]
  }
];
var geojson = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              80.18163442611693,
              12.948321119146224
            ],
            [
              80.1828145980835,
              12.948321119146224
            ],
            [
              80.1828145980835,
              12.95048550781089
            ],
            [
              80.18163442611693,
              12.95048550781089
            ],
            [
              80.18163442611693,
              12.948321119146224
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              80.18332958221436,
              12.948331575175299
            ],
            [
              80.18440246582031,
              12.948331575175299
            ],
            [
              80.18440246582031,
              12.950527331561279
            ],
            [
              80.18332958221436,
              12.950527331561279
            ],
            [
              80.18332958221436,
              12.948331575175299
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              80.18491744995116,
              12.948331575175299
            ],
            [
              80.18608689308165,
              12.948331575175299
            ],
            [
              80.18608689308165,
              12.950527331561279
            ],
            [
              80.18491744995116,
              12.950527331561279
            ],
            [
              80.18491744995116,
              12.948331575175299
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              80.18126964569092,
              12.951384716897111
            ],
            [
              80.18264293670653,
              12.951384716897111
            ],
            [
              80.18264293670653,
              12.95337133011648
            ],
            [
              80.18126964569092,
              12.95337133011648
            ],
            [
              80.18126964569092,
              12.951384716897111
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              80.1831579208374,
              12.951259246056653
            ],
            [
              80.18450975418091,
              12.951259246056653
            ],
            [
              80.18450975418091,
              12.953413153382408
            ],
            [
              80.1831579208374,
              12.953413153382408
            ],
            [
              80.1831579208374,
              12.951259246056653
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              80.18498182296753,
              12.95128015786778
            ],
            [
              80.18667697906494,
              12.95128015786778
            ],
            [
              80.18667697906494,
              12.95347588826812
            ],
            [
              80.18498182296753,
              12.95347588826812
            ],
            [
              80.18498182296753,
              12.95128015786778
            ]
          ]
        ]
      }
    }
  ]
};

var util = {};
util.flight = flight;
util.equipment = equipment;
util.bay = bay;
util.style = style;
util.geojson = geojson;
module.exports = util;