//external middleware 
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { indexRoute } = require('./routes/indexRoute');
const cors = require('cors'); 
const path = require('path')

const app = express();
dotenv.config();

app.use(cors());

//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>{console.log('Connection successfull')})
.catch((err)=>{console.log(err.message)})

//Json body parser
app.use(bodyParser.json());

//x-www-form-urlencoded body parser
app.use(bodyParser.urlencoded({extended:false}));

//set view engine
// app.set('view engine','ejs');

app.use('/userCategory',indexRoute);

//set production for heroku
if(process.env.Node_ENV ==='production'){
    app.use(express.static("client/build"));
}

app.listen(process.env.PORT || 5000,()=>console.log('Connecting PORT',process.env.PORT || 5000));