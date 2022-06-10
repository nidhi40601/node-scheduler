const schedule = require('node-schedule');

//Cron JOB
const job = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('Cron job is getting executed....');
})
    
//Date-baed JOB
const date = new Date("2022-06-10T13:46:00");
const job2 = schedule.scheduleJob(date, function(){
    console.log('Date-based job is getting executed.....',new Date().toString());
})

