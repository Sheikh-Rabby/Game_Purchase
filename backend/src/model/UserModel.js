const mongoose = require("mongoose");
const UserModelSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    town:{type:String,required:true},


},{timestamps:true,versionKey:false});
const userModel=mongoose.model("users",UserModelSchema)
module.exports=userModel;