var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    }
    // add in geo location
});

var Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;