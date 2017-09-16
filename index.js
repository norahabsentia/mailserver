var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', function(req, res) {
//     res.sendfile("index.html");
// });
app.post('/mail', function(req, res) {
    res.header('Access-Control-Allow-Origin', "*")
    var mail_from = req.body.name + "<" + req.body.email + ">";
    var mail_to = 'Ashish Gupta <ashish@absentiavr.com>';
    var mail_subject = 'A message from norah.ai';
    var mail_text = "Phone Number: " + req.body.phone + "\n" + req.body.text;

    console.log("Sending Mail");
    var mailgun = require("mailgun-js");
    var api_key = 'key-a0a6f0f537f651a6afb73234d346a045';
    var DOMAIN = 'sandbox54dd8016480441aaa29353d95fdf3890.mailgun.org';
    var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

    var data = {
        from: mail_from,
        to: mail_to,
        subject: mail_subject,
        text: mail_text
    };

    mailgun.messages().send(data, function(error, body) {});
    res.send("ok");
});
app.listen(process.env.PORT || 3000, function() {
    console.log("Started on PORT 3000");
})