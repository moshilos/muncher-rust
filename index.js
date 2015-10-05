/**
 * Created by Moshi.los on 10/2/2015.
 */
var express = require('express');
var app = express();

//static files
app.use(express.static('webapp/app'));

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function (req, res) {
    res.sendFile(__dirname + '/webapp/app/index.html');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});