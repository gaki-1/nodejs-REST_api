var express = require('express');
var router = express.Router();
var Ninja = require('../models/ninja');


// get a list of ninjas from the database
router.get('/ninjas', function (req, res) {
    // Ninja.find({}).then(function(ninjas){
    //     res.send(ninjas);
    // });
    Ninja.aggregate().near({
        near: {
         'type': 'Point',
         'coordinates': [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        maxDistance: 100000,
        spherical: true,
        distanceField: "dis"
       }).then(function (ninjas) {
            res.send(ninjas);
        });
});

// add a new ninja to the database
router.post('/ninjas', function (req, res, next) {
    Ninja.create(req.body).then(function (ninja) {
        res.send(ninja);
    }).catch(next);
});

// update the ninja in the database
router.put('/ninjas/:id', function (req, res) {
    Ninja.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function (ninja) {
        res.send(ninja);
    });
});

// delete a ninja from the database
router.delete('/ninjas/:id', function (req, res) {
    Ninja.findByIdAndRemove({ _id: req.params.id }).then(function (ninja) {
        res.send(ninja);
    });
    // res.send({ type: 'DELETE' });
});

module.exports = router;