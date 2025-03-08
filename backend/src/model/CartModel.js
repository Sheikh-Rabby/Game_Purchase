const mongoose = require("mongoose");
const CartModelSchema=mongoose.Schema({
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    purchaseID:{type:mongoose.Schema.Types.ObjectId,required:true},
    quantity:{type:String,required:true},
    paymentMethod:{type:String,required:true,enum:['bkash','nogod','rocket']},
    number:{type:String,required:true},
    tranID:{type:String,required:true},
    amount:{type:String,required:true},

},{timestamps:true,versionKey:false});
const cartModel=mongoose.model("carts",CartModelSchema)
module.exports=cartModel;