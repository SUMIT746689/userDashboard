const express = require('express');
const { MobilePhoneModel } = require('../model/MobilePhone');

const indexRoute = express.Router();

indexRoute.get('/', async (req,res,next)=>{
    const resModel = await MobilePhoneModel({
        type : 'mobile' ,
        category : 'mobiles phones',
        condition : ['Used','New'],
        authenticity : ["Original","Refurbished"],
        brand :[
            "SAMSUNG","APPLE","HUAWEI","NOKIA","SONY","LG",
          "HTC","MOTOROLA","LENOVO","XIAOMI","GOOGLE","HONOR","OPPO",
          "REALME","ONEPLUS","VIVO","MEIZU","BLACKBERRY","ASUS","ALCATEL",
          "ZTE","MICROSOFT","VODAFONE","ENERGIZER","CAT","SHARP","MICROMAX",
          "INFINIX","TCL","ULEFONE","TECNO","BLU","BLACKVIEW","ACER","PANASONIC",
          "PLUM","TECHNO","SYMPHONY","ITEL","WALTON","NOTHING","OTHER BRAND"
        ],
        features : [
            "Bluetooth","Camera","Dual-Lens Camera","Dual SIM","Expandable Memory",
            "Fingerprint Sensor","GPS","Physical keyboard","Motion Sensors","3G","4G","5G","GSM","Touch screen"
        ],
    });
    await resModel.save();
    res.render('index');

})

module.exports = {
    indexRoute
}
