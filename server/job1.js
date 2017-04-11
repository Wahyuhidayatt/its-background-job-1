var kue = require('kue')
var queue = kue.createQueue();
var CronJob = require('cron').CronJob;



new CronJob('*/12 * * * * *', function() {
    var job = queue.create('sendEmail', {
      from: 'wahyuhdyt95@gmail.com',
      to: 'wahyuwajjoo@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
    }).save( function(err){
       if( !err ) console.log( job.id );
    });
}, null, true, 'Asia/Jakarta');
