const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    type: {
        type : String
    },
    category : {
        type : String,
        require : true
    },
    condition :{
        type : Array
    }
    ,
    authenticity : {
        type : Array
    },
    brand : {
        type :Array
    },
    model : {
        type : Object,
    },
    features : {
        type : Array
    },
    description : {
        type : String
    },
    taka : {
        type : Number
    },
},{timestamps:true});

const MobilePhoneModel = mongoose.model('user dashboard model',schema);

module.exports = {
    MobilePhoneModel
}