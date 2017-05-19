var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var authToken = 'your_auth_token';
var Twilio = require('twilio').Twilio;

var client = new Twilio(accountSid, authToken);
var service = client.preview.sync.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

service.syncMaps('Players')
  .syncMapItems.create({
    key: 'steph_curry',
    data: JSON.stringify({
      level: 30,
      name: "Stephen Curry",
      username: "spicy_curry"
    })
  }).then(function(response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error);
  });