const express = require('express');
const app = express()
const port = 8000;
const db = require('./config/mongoose')

app.use(express.urlencoded({ extended: true }));

app.use('/' , require('./routes/index'));

app.listen(port , function(err){
    if(err){
        console.log(`error running the server ${err}`);
    }
    console.log(`Server running on PORT ${port}`);
})