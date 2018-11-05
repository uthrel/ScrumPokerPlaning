//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;



var vote = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    selected_scrum_number: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    story_item_voted: { 
        type: Schema.Types.ObjectId, ref: 'StoryItem' 
    },
});

//Export function to create "Vote" model class
module.exports = mongoose.model('Vote', vote );