 const gameCategory=require('../model/GameCategoryModel')
 const purchaseItem=require('../model/PurchaseItemModel')
 const mongoose=require('mongoose')
 const ObjectId=mongoose.Types.ObjectId;





 const totalGameService=async (req,res)=>{
    let data = await gameCategory.find()
     return{status:"success",data:data}
 }
 const purchaseList=async(req,res) =>{
    try{
        let data = await purchaseItem.find()
        return{status:"success",data:data}
    }catch(err){
        console.log(err.message)
    }
 }

 const gamePurchaseListByGame=async(req,res) =>{

    try{
        let gameID=new ObjectId(req.params.gameID)
        let MatchStage={$match:{gameID:gameID}}

        let JoinWithGameStage={$lookup:{from:"gamecategorys",localField:"gameID",foreignField:"_id",as:"gameCategory"}};
        let unwindStage={$unwind:"$gameCategory"}

        let data=await purchaseItem.aggregate([
            MatchStage,
            JoinWithGameStage,
            unwindStage
        ])
        return {status:"success",data:data}

    }catch(err){
    console.log(err.message)
    }

 }

const purchaseDetailsByid=async(req,res) =>{
     try{
         const {id} = req.params
         let data =await purchaseItem.find({_id:id})
         return {status:"success",data:data}


     }catch(err){
         console.log(err.message)
     }
}





 module.exports= {totalGameService,purchaseList,gamePurchaseListByGame,purchaseDetailsByid}