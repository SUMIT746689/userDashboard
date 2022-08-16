const express = require('express');
const { renderIndex } = require('../controller/getIndexPage');
const { userCategorySend } = require('../controller/userCategorySend');
const { MobilePhoneModel } = require('../model/MobilePhone');

const indexRoute = express.Router();

indexRoute.get('/', renderIndex)
indexRoute.get('/:category/:subCategory', userCategorySend)

module.exports = {
    indexRoute
}
