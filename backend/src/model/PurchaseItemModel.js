const mongoose = require("mongoose");

const purchaseItemSchema=mongoose.Schema({
    purchaseName:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:String,required:true},
    star:{type:String,required:true},
    purchaseImage:{type:String,required:true},
    gameID:{ type: mongoose.Schema.Types.ObjectId,required: true },


},{timestamps:true,versionKey:false})
const purchaseItemModel=mongoose.model("purchaseitems",purchaseItemSchema)
module.exports=purchaseItemModel;