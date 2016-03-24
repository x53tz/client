var express = require('express');
var app = express();
var path = require('path');
var basicAuth = require('basic-auth-connect');

var port = process.env.PORT;

var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');
mongoose.connect(configDB.url);

var basicAuth = require('basic-auth-connect');
app.use(basicAuth('samplecorp', 'dock3r'));

app.use(bodyParser.json());
app.use(methodOverride());



app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

// to redirect folks from a 404 if they reload /home
app.get('/', function(req, res) {
//app.get('*', function(req, res) {  
  res.render('index.ejs');
});

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);


app.get('/*', function(req, res) {
  res.render('index.ejs');
});


//make our app listen for incoming requests on the port assigned above
app.listen(port, function() {
  console.log('SERVER RUNNING... PORT: ' + port);
})

