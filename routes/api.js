var express = require('express');
var router = express.Router();
var Ninja = require('../models/ninja');


// get a list of ninjas from the database
router.get('/ninjas', function (req, res) {
    res.send({ type: 'GET' });
});

// add a new ninja to the database
router.post('/ninjas', function (req, res, next) {
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

// update the ninja in the database
router.put('/ninjas/:id', function (req, res) {
    res.send({
        type: 'PUT'
    });
});

// delete a ninja from the database
router.delete('/ninjas/:id', function (req, res) {
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
    // res.send({ type: 'DELETE' });
});

module.exports = router;