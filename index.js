var express = require('express');
var app = express();
var mongoose = require('mongoose');

// connect to mongo db
mongoose.connect('mongodb+srv://mongodbadmin1:12345@cluster0-dtg3g.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');

var routes = require('./routes/api');



app.use(bodyParser.json());

app.use('/api', routes);

// error handling midddleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

// listen to ports
app.listen('3000');
console.log('listening to port 3000');