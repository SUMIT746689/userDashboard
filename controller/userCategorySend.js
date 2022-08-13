const { MobilePhoneModel } = require("../model/MobilePhone");

const userCategorySend = async (req,res,next)=>{
 try{
    const {category,subCategory} = req.params ;
    console.log(typeof category,typeof subCategory);

    // convert '_' to space
    const refactorCategory = category.split('_').join(' ') || '';
    const refactorsubCategory = subCategory.split('_').join(' ') || '';
    
    console.log(refactorCategory,refactorsubCategory);
    
    //search user dashboard data 
    const resUserDashboard =await MobilePhoneModel.findOne({category:refactorCategory,subCategory:refactorsubCategory},{_id:0,__v:0,createdAt:0,updatedAt:0})
    
    // console.log(resUserDashboard)
    res.status(200).json({
        subCategory: resUserDashboard
    })
 }
 catch(err){
    res.status(500).json({
        error :{
            message : err.message
        }
    })
 }
 
}

module.exports={
    userCategorySend
}