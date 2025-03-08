const express=require('express');
const gameController=require('../controller/GameController')
const userController=require('../controller/UserController')
const cartlistController=require('../controller/CartListController')





const router=express.Router();

router.get('/ReadGame',gameController.ReadGame)
router.get('/purchaseList',gameController.purchaseList)
router.get('/purchaseListByGame/:gameID',gameController.purchaseListByGame)
router.get('/purchaseDetailsByid/:id',gameController.purchasedetailsBy)

router.post('/Login',userController.Login)

router.post('/saveCartList',cartlistController.saveCartList)
router.get('/cartList',cartlistController.cartList)
router.get('/cartListByID/:userID',cartlistController.cartListByID)
router.get('/removecardlist/:id',cartlistController.removecardlist)
router.post('/createinvoice',cartlistController.createinvoice)
router.get('/invoice/:userID',cartlistController.invoice)







module.exports=router;