var mailgun = require("mailgun-js");
var api_key = 'key-a0a6f0f537f651a6afb73234d346a045';
var DOMAIN = 'sandbox54dd8016480441aaa29353d95fdf3890.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

var data = {
    from: 'Excited User <ashishlnmiit3@gmail.com>',
    to: 'ashish@absentiavr.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function(error, body) {
    console.log(data);
    console.log(body);
});