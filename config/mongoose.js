const mongoose = require('mongoose');



mongoose.connect(`mongodb://0.0.0.0/ecommmercebackend`);


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error'));

db.once('open', function (params) {
    console.log('Connected to database');
})

module.exports = db