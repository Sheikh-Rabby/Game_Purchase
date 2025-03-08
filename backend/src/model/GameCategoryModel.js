const mongoose = require("mongoose");
const GameModelSchema=mongoose.Schema({
    gameName:{type:String,required:true},
    gameImage:{type:String,required:true},

},{timestamps:true,versionKey:false});
const gameCategoryModel=mongoose.model("gamecategorys",GameModelSchema)
module.exports=gameCategoryModel;