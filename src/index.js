const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

//const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started on Port: ${PORT}`);
        
        // const service = new UserService();
        // const newToken = service.createToken({email: 'aman@gmail.com', id: 1});
        // console.log("new token is", newToken);
        // const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtYW5AZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTcxNjc0OTM3MSwiZXhwIjoxNzE2ODM1NzcxfQ.wib8F4RPkiQ_ObZPTu8CZodQ3ULRhxjHzhM4RnQnduI';
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}   

prepareAndStartServer();