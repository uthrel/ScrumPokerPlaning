//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var user = new Schema({
    mail: {
        type: String,
        maxlength: 20,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        maxlength: 10,
        required: true,
    },
    created_stories: [{type: Schema.Types.ObjectId, ref: 'Story'}],
    vote: [{type: Schema.Types.ObjectId, ref: 'Vote'}]
});


//Export function to create "User" model class
module.exports = mongoose.model('User', user );