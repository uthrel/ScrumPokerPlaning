//Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Story = require('./src/dev/models/story');
const StoryItem = require('./src/dev/models/storyItem');
const User = require('./src/dev/models/user');
const Vote = require('./src/dev/models/vote');
const app = express();
const port = 3000;

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true },function(err){
    if(err) throw err;
});

// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

/* app.get('/authenticationService.js', function (req, res) { 
    res.sendFile('authenticationService.html', {root: 'src/dev/main/authentication'});
}); */

// Main page might change it
app.get('/', function (req, res) { 
    res.sendFile('index.html', {root: 'src/dev/main/js'})
});

// Sign up page
app.get('/signup', function (req, res) { 
    res.sendFile('signup.html', {root: 'src/dev/main/authentication'});
});


//************************************************** */
// Sign in page
app.get('/signin', function (req, res) {
    res.sendFile('signin.html', {root: 'src/dev/main/authentication'});
});

/* app.post('/signin', function (req, res) {
    console.log(req.body.mail);
    console.log("it works nicely");
    res.sendFile('index.html', {root: 'src/dev/main/js'});
}); */

app.get('/home', function (req, res) {
    res.sendFile('index.html', {root: 'src/dev/main/js'});

});

/* app.post('/signin', function (req, res) {
    console.log(req.body.email);
    res.sendFile('index.html', {root: 'src/dev/main/js'});
}); */
//**************************************************** */

// ScrumMasterPlaningView
app.get('/scrumMasterPlaningView', function (req, res) { 
    res.sendFile('scrumMasterPlaningView.html', {root: 'src/dev/main/'});
});

// developerPlaningView
app.get('/developerPlaningView', function (req, res) { 
    res.sendFile('developerPlaningView.html', {root: 'src/dev/main/'});
});

// addStoryListView
app.get('/addStoryListView', function (req, res) { 
    res.sendFile('addStoryListView.html', {root: 'src/dev/main/addStoryList'});
});

//photoRouter.get(‘/’, function(req, res) { });
//photoRouter.post(‘/’, function(req, res) { });
//photoRouter.get(‘/:id’, function(req, res) { });
//photoRouter.patch(‘/:id’, function(req, res) { });
//photoRouter.delete(‘/:id’, function(req, res) { });

//******************************************* */
// Search user's mail
app.get('/users/:mail', function (req, res) { 
    User.find({
        mail : req.body.mail
    }, function(err, user){
        if(err) throw err;
        if(user.length === 1){
            return res.status(200).json({
                status: true,
                message: 'User exists',
                data: user
            });  
        } else {
            return res.status(200).json({
                status: false,
                message: 'Login Failed'
            });
        }
         
    });
});

//************************************************ */

app.post('/users/', function (req, res) { 

});


app.post('/users/:mail/vote/', function (req, res) { 
    var vote, backURL;
    User.find({
        mail : req.body.mail
    }, function(err, user){
        if(err) throw err;
        if(user.length === 1){
                vote = new Vote({ 
                user: User.id, 
                selected_scrum_number: req.body.number,
                story_item_voted: req.body.vote});
        
            vote.save(function (err) {
                if (err) return handleError(err);
                backURL = req.header('Referer');
                res.redirect(backURL);
            });Login
        } else {
            return res.status(200).json({
                status: 'fail',
                message: 'Login Failed'
            });
        }
         
    });
});

app.get('/users/:mail/:name', function (req, res) { 

});

app.get('/stories/', function (req, res) { 

});

app.get('/stories/:storyItems', function (req, res) { 

});

app.post('/story', function (req, res) { 
    console.log('it works in story too');
    res.sendFile('index.html', {root: 'src/dev/main/js'});
});

app.get('/stories/:story/votes', function (req, res) { 
    Story.find({
        _id : req.query.id
    }, function(err, story){
        if(err) throw err;
        if(story._id){
            Vote.find({story_item_voted: story._id}).populate('user selected_scrum_number').exec(function(err, story) {
                if (err) return handleError(err);

                return res.status(200).json({
                    status: 'success',
                    message: 'Votes Exist',
                    data: [{'user': story.vote.user, 'selected_scrum_number': story.vote.selected_scrum_number}]
                });
              });     
        } else {
            return res.status(200).json({
                status: 'fail',
                message: 'Story does not exist'
            });
        }
         
    });
});


// TO BE ABLE TO GET JS FILES AFTER REST
app.use(express.static('src/dev/main'));
app.use(express.static('src/dev/main/js'));
app.use(express.static('src/dev/main/addStoryList'));
app.use(express.static('src/dev/main/authentication'));




app.listen(3000, () => console.log(`Example app listening on port ${port}!`))