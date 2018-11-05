//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;



var storyItem = new Schema({
    name: {
        type: String,
        required: true
    },
    story_point: {
        type: Number,
        required: false,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    status:{
        type: String,
        required: true
    },
    story_id : { type: Schema.Types.ObjectId, ref: 'Story' } ,
    max_num_votes: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    votes : [{type: Schema.Types.ObjectId, ref: 'Vote'}]
});

//Export function to create "StoryItem" model class
module.exports = mongoose.model('StoryItem', storyItem );