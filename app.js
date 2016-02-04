/**
 * Created by mkale9 on 2/3/16.
 */
var express = require('express');
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb')


var app = express();

var port = process.env.PORT || 3000;

var bookRouter = express.Router();

bookRouter.route('/Books')
    .get(function(req, res){
        var responseJson = {hello: 'THis is my api'}
        res.json(resonseJsonmon);

    });
app.use('/api', router);



app.get('/', function(req, res){
    res.send('welcome to Roger api to work with ');

});

app.listen(port, function () {
    console.log('Running on port: ' +port)

    
});





