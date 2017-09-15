// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
console.log('Server started!');

app.post('/mail', function(req, res) {
    var user_id = req.param('id');
    var token = req.param('id1');
    var geo = req.param('id2');

    var mailgun = require("mailgun-js");
    var api_key = 'key-a0a6f0f537f651a6afb73234d346a045';
    var DOMAIN = 'sandbox54dd8016480441aaa29353d95fdf3890.mailgun.org';
    var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

    var data = {
        from: user_id,
        to: token,
        subject: geo,
        text: 'Testing some Mailgun awesomness!'
    };

    mailgun.messages().send(data, function(error, body) {
        console.log(data);
        console.log(body);
    });
    res.send(user_id + ' ' + token + ' ' + geo);
});