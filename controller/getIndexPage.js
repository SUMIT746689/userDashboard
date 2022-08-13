const { MobilePhoneModel } = require("../model/MobilePhone");

const renderIndex = async (req,res,next)=>{
    try{
    const resModel = await MobilePhoneModel({
        category : "Education" ,
        subCategory : 'Tuition',
        // bedrooms : [1,2,3,4,5,6,7,8,9,10],
        // bathrooms : [1,2,3,4,5,6,7,8,9,10],
        // 'Land size' : NaN,
        // 'land unit' : ['katha','bigha','acres','shotok','decimal'],
        // 'house size' : NaN,
        // 'house unit' : ['sqft','katha','shotok','decimal'],
        // 'completion status' : ['ready','on going'],
        // address: '',
        //'Bike type' : ['Motorcycle','E-bikes','Scooters'],
//         condition : ['Used','New'],
//         'Textbook type' : [
//             'College / University',
// 'School',
// 'Other',
//             ],
        // type : [
        //     'Video Game Consoles',
        //     'Video Game Accessories',
        //     'Video Games'

        // ],
        // authenticity : ["Original","Refurbished"],
        //  brand :
        //          [
        //             'Akij',
        //             'Alliance',
        //             'Aprilia',
        //             'Auge',
        //             'Bajaj',
        //             'Beetle Bolt',
        //             'Benelli',
        //             'Bennett',
        //             'Bir',
        //             'BMW',
        //             'Butterfly',
        //             'Cafe Racer',
        //             'CZ',
        //             'Daelim',
        //             'Dayang Runner',
        //             'Dayang',
        //             'Dayun',
        //             'Demak',
        //             'Ducati',
        //             'Emma',
        //             'Exploit',
        //             'FKM',
        //             'Frantic',
        //             'Freedom Runner',
        //             'Freedom',
        //             'Goodwheel',
        //             'GPX',
        //             'Grameen Motors',
        //             'Green Tiger',
        //             'H Power',
        //             'Haojin',
        //             'Haojue',
        //             'Harley-Davidson',
        //             'Hero',
        //             'Honda',
        //             'Hundai',
        //             'Hyosung',
        //             'Intraco',
        //             'Italjet',
        //             'Jamuna',
        //             'JB',
        //             'Jialing',
        //             'Karino',
        //             'Kawasaki',
        //             'Keeway',
        //             'Kenbo',
        //             'Kinbo',
        //             'Kinetic',
        //             'Kinlon',
        //             'KTM',
        //             'Lexmoto',
        //             'Lifan',
        //             'LML',
        //             'Loncin',
        //             'Mahindra',
        //             'Marcel',
        //             'Max Chopper',
        //             'Maxton',
        //             'Megelli',
        //             'Meiduo',
        //             'Motrac',
        //             'MyChoice',
        //             'Omoto',
        //             'Pegasus',
        //             'PHP',
        //             'Piaggio',
        //             'Porag',
        //             'Power Ninja',
        //             'Power',
        //             'QJiang',
        //             'Race',
        //             'Regal Raptor',
        //             'Roadmaster',
        //             'Runner',
        //             'Rusi',
        //             'Singer',
        //             'Sinski',
        //             'Starway',
        //             'Sunsuki',
        //             'Suzuki',
        //             'SYM',
        //             'Taro',
        //             'TVS',
        //             'UM',
        //             'Vespa',
        //             'Victor-R',
        //             'Walton',
        //             'Wuyung',
        //             'Xingfu',
        //             'Yamaha',
        //             'Yume Japan',
        //             'Zaara',
        //             'ZNEN',
        //             'Zongshen',
        //             'Other brand',
                    
    

        //  ],
        // model: [],
        title : '',
        // 'Trim/Edition': '',
//          features : [
//              "Bluetooth","Camera","Dual-Lens Camera","Dual SIM","Expandable Memory",
//              "Fingerprint Sensor","GPS","Physical keyboard","Motion Sensors","3G","4G","5G","GSM","Touch screen"
//          ],
        //  'Year of manufacture' : NaN,
        //  'kilometers run' : NaN,
        //  'engine capacity' : NaN,
        //  'Fuel type': ['Diesel',
        //     'Petrol',
        //     'CNG',
        //     'Hybrid',
        //     'Electric',
        //     'Octane',
        //     'LPG',
        //     'Other fuel type'],
        // transmission : [
        //     'Manual',
        //     'Automatic',
        //     'Other transmission'
        // ],
        // 'body type' : [
        //     'Saloon',
        //     'Hatchback',
        //     'Estate',
        //     'Convertible',
        //     'Coupé/Sports',
        //     'SUV / 4x4',
        //     'MPV'

        // ],
        // 'registration year' : NaN,
        
    });
    // await resModel.save();

    // await MobilePhoneModel.deleteMany({category :"Other Electronics"})
    
        const resAllUserCategoty = await MobilePhoneModel.find({});
        // const getAllObjectcategory = resAllUserCategoty.map(value=>value.parentCategory);
        // const setresAllUserCategoty =  Array(...new Set(getAllObjectcategory));
        // console.log(setresAllUserCategoty);
        
        
        console.log(resAllUserCategoty)
        res.status(200).json({
            category: resAllUserCategoty,
            // resModel
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