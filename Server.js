//Require:
require('./Src/Connection/connection');
const express = require('express');
const App = express();
const cors = require('cors');
const Student = require('./Src/Routes/StudentRoute');

//Middleware;
App.use(express.json());
App.use(cors({origin:'http://localhost:3000'}))

//Route Controller;
App.use('/',Student);

//Port Listing;
const PORT = processs.env.PORT || 4000;
App.listen(PORT, () => {
    console.log('Port is Running on ' + PORT);
});