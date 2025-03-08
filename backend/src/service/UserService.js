 const userModel=require("../model/UserModel")
 const {EncodeToken}=require('../TokenHelper/TokenHelper')

 const userLogin=async(req,res)=>{

    try{
        const { email,password } = req.body;
        let user=await userModel.findOne({email:email});
        if(!user){
            return{status:"fail",message:"User not found"}
        }
        if(user.password !== password){
            return{status:"fail",message:"Passwords do not match"}
        }

        else {
            let token=EncodeToken (user._id.toString())
            return {status:"success",token:token,data:user};
        }
    }catch(err){
       return {status:"fail",message:err.message};
    }

 }
 module.exports=userLogin