//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;



var story = new Schema({
     session_name: {
        type: String,
        required: true
    },
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    story_items : { type: Schema.Types.ObjectId, ref: 'StoryItem' } ,
});

//Export function to create "Story" model class
module.exports = mongoose.model('Story', story );