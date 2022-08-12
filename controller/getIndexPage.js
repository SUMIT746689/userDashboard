const { MobilePhoneModel } = require("../model/MobilePhone");

const renderIndex = async (req,res,next)=>{
//     const resModel = await MobilePhoneModel({
//         parentCategory : 'electronics' ,
//         category : 'Other Electronics',
//         condition : ['Used','New'],
//         // type : [
//         //     'Video Game Consoles',
//         //     'Video Game Accessories',
//         //     'Video Games'

//         // ],
//         // authenticity : ["Original","Refurbished"],
// //         brand :
// //         [
// // 'Canon',
// // 'Ricoh',
// // 'Konica Minolta',
// // 'Xerox',
// // 'Toshiba',
// // 'Sharp',
// // 'Kyocera',
// // 'HP',
// // 'Lexmark',
// // 'Samsung',
// // 'Dell',
// // 'Brother',
// // 'Other Brand'

// //         ],
// //         model: '',
//         title : '',
//         // features : [
//         //     "Bluetooth","Camera","Dual-Lens Camera","Dual SIM","Expandable Memory",
//         //     "Fingerprint Sensor","GPS","Physical keyboard","Motion Sensors","3G","4G","5G","GSM","Touch screen"
//         // ],
        
//     });
    //await resModel.save();

    // await MobilePhoneModel.deleteMany({category :"Other Electronics"})
    try{
        const resAllUserCategoty = await MobilePhoneModel.find({});
        // const getAllObjectcategory = resAllUserCategoty.map(value=>value.parentCategory);
        // const setresAllUserCategoty =  Array(...new Set(getAllObjectcategory));
        // console.log(setresAllUserCategoty);

        res.status(200).json({
            category: resAllUserCategoty
        })
    }
    catch(err){
        res.status(400).json({
            error: err.message
        })
    }
    // res.render('index',{
    //     userCategory: setresAllUserCategoty
    // });

}

module.exports = {
    renderIndex
}