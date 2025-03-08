const cartModel = require('../model/CartModel');
const invoiceModel = require('../model/InvoiceModel');

const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

const saveCartListService = async (req, res) => {
    try {

        let reqBody = req.body;
        reqBody.userID = (new ObjectID(reqBody.userID));
        reqBody.purchaseID = new ObjectID(reqBody.purchaseID);
        await cartModel.create(reqBody);
        return{ status: "success", message: "Cart List Create Success" };
    } catch (e) {
        console.error("Error creating cart list: ", e.message);
        return{ status: "fail", message: "Something Went Wrong!", error: e.message };
    }
}
const cartListService=async(req,res)=>{
    try{
        let data = await cartModel.find()
        return{status:"success", data:data}
    }catch(e){
       return {status:"fail", message: "Something Went Wrong!", error: e.message };
    }
}
const cartListByIdService=async(req,res)=>{
    const {userID} = req.params;
    try{
        let match={$match:{userID:new mongoose.Types.ObjectId(userID)}}
        let JoinStage  ={$lookup:{from:"purchaseitems",localField:"purchaseID",foreignField:"_id",as:"purchaseitems"}}
        let unwindstage ={$unwind:"$purchaseitems"}



        let data =await cartModel.aggregate([
            match,
            JoinStage,
            unwindstage,

        ])

        return{status:"success", data:data}
    }catch(e){
        return {status:"fail", message: "Something Went Wrong!", error: e.message };
    }
}
const cardlistremove=async(req,res)=>{
   try{

    const {id}=req.params;

        await cartModel.deleteOne({_id:id});
       return{status:"success", message:"Cart Delete Success" };


   }catch(e){
   return {status:"fail", message: "Something Went Wrong!", error: e.message };
   }

}

const invoicedata = async (req, res) => {
    const { userID } = req.params;
    try {
        let match = { $match: { userID: new mongoose.Types.ObjectId(userID) } };

        let data = await invoiceModel.aggregate([match]);


        if (data.length > 0) {
            await cartModel.deleteMany({ userID: new mongoose.Types.ObjectId(userID) });
            console.log(data);
        }

        return { status: "success", data: data };
    } catch (e) {
        return{
            status: "fail",
            message: "Something Went Wrong!",
            error: e.message
        };
    }
};









module.exports = {saveCartListService,cartListService,cartListByIdService,cardlistremove,invoicedata};
