const express = require('express');

const indexRoute = express.Router();

indexRoute.get('/',(req,res,next)=>{
    res.render('index')
})

module.exports = {
    indexRoute
}
