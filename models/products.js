const mongoose = require('mongoose');

//schema for products
const products = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
},{
    timestamps : true
});


  

const product = mongoose.model('product' , products);
module.exports =  product;