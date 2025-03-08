const userLogin=require('../service/UserService')

exports.Login=async(req, res)=>{
    let result=await userLogin(req)
    return res.status(200).json(result)
}