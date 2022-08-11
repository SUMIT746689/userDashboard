const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name : {
    type : String,
    require : true
    }
})