const express = require('express');
const { renderIndex } = require('../controller/getIndexPage');
const { MobilePhoneModel } = require('../model/MobilePhone');

const indexRoute = express.Router();

indexRoute.get('/', renderIndex)

module.exports = {
    indexRoute
}
