var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GeoSchema=new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// ninja schema and model
var NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    // add in geo location
    geometry: GeoSchema
});

var Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;