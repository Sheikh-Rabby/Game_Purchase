const {saveCartListService,cartListService,cartListByIdService,cardlistremove,invoicedata}=require('../service/cartListService')
const {createInvoice}=require('../service/InvoiceService')

exports.saveCartList=async(req,res)=>{
    let result=await saveCartListService(req)
    return res.status(200).json(result)
}
exports.cartList=async(req,res)=>{
    let result=await cartListService()
    return res.status(200).json(result)
}
exports.cartListByID=async(req,res)=>{
    let result=await cartListByIdService(req)
    return res.status(200).json(result)
}
exports.removecardlist=async(req,res)=>{
    let result=await cardlistremove(req)
    return res.status(200).json(result)
}
exports.createinvoice=async(req,res)=>{
    let result=await createInvoice(req)
    return res.status(200).json(result)
}
exports.invoice=async(req,res)=>{
    let result=await invoicedata(req)
    return res.status(200).json(result)
}