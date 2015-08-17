var database = require('../models/database');
var Instagram = require('instagram-node-lib');

Instagram.set('client_id', '3ba6c2ea50604888af69a0997c14841f');
Instagram.set('client_secret', '75c62cfcbc404d2e9e85ecbb0f126214');
// Instagram.set('callback_url', 'CALLBACK-URL');
// Instagram.set('redirect_uri', 'YOUR-REDIRECT-URI');
// Instagram.set('maxSockets', 10);

Instagram.media.search({
  lat: 35.6582555,
  lng: 139.700862,
  distance: 1000,
  complete: function (data, pagenation) {
    console.log(data);
  },
  error: function (errorMessage, errorObject, caller) {
  }
});
