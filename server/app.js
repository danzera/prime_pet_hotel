var express = require('express'); // import express
var app = express(); // unpack (?) express
// import path functionality - allows us to join & resolve paths to figure out
// where files are located - this is necessary b/c we won't know where exactly
// files are located on the external server, when hosting online (heroku, et al)
var path = require('path');
var bodyParser = require('body-parser'); // import body-parser
app.use(bodyParser.urlencoded({extended: true})); // use body-parser
var index = require('./modules/index.js'); // '.' means "start in the current directory (of this file)"
app.set('port', 5000); // set port for server -- more flexible than saying "var port = 4567"

var registerOwner = require('./modules/register_owner.js');
app.use('/registerOwner', registerOwner);

app.use(express.static('server/public')); // set default path
app.use('/', index); // serve up index.html via index.js if base URL hit


app.listen(app.get('port'), function() { // listen on the port we set
  console.log('live on port', app.get('port')); // log to the server console
});
