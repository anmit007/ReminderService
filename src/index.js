const express = require("express");
const bodyParser = require("body-parser");
const {sendBasicEmail} = require('./services/email-service');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    const cron = require('node-cron');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.listen(PORT, async () => {
       
        console.log(`Server started at ${PORT}`);
        // sendBasicEmail(
        //     'support@airline.com',
        //     'anmit.ray911@gmail.com',
        //     'this is a testing email',
        //     'good to have you onboard'

        // );
        // cron.schedule('*/2 * * * *', () => {
        //     console.log('running 2 minute ');
        //   });
    });
}

setupAndStartServer();