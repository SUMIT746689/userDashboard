//external middleware 
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { indexRoute } = require('./routes/indexRoute');

const app = express();
dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>{console.log('Connection successfull')})
.catch((err)=>{console.log(err.message)})

//Json body parser
app.use(bodyParser.json());

//x-www-form-urlencoded body parser
app.use(bodyParser.urlencoded({extended:false}));

//set view engine
app.set('view engine','ejs');

app.get('/',indexRoute);


app.listen(3000,()=>console.log('Connecting PORT',3000));