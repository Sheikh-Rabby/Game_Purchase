
const {totalGameService,purchaseList,gamePurchaseListByGame,purchaseDetailsByid}=require('../service/GameService')


exports.ReadGame = async(req, res)=>{
    let result=await totalGameService()
    return res.status(200).json(result)

}
exports.purchaseList = async(req, res)=>{
    let result=await purchaseList()
    return res.status(200).json(result)

}
exports.purchaseListByGame = async(req, res)=>{
    let result=await gamePurchaseListByGame(req)
    return res.status(200).json(result)

}
exports.purchasedetailsBy = async(req, res)=>{
    let result=await purchaseDetailsByid(req)
    return res.status(200).json(result)

}