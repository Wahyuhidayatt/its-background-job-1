const kue = require('kue');
const queue = kue.createQueue();
require('dotenv').config();

const api_key = process.env.API_KEY;
const domain = process.env.DOMAIN;
const mailgun = require('mailgun-js')({
  apiKey: api_key,
  domain: domain
});


queue.process('sendEmail', function(job, done){
  email(job.data, done);
});

function email(job, done) {
  mailgun.messages().send(job, function (error, body) {
  console.log(body);
});
  done();
}
