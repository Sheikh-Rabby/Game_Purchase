const mongoose = require("mongoose");
const CartModel = require("../model/CartModel");
const InvoiceModel = require("../model/InvoiceModel");

const createInvoice = async (req, res) => {
    try {
        const userID = req.body.userID;

        const cartItems = await CartModel.aggregate([
            {
                $match: { userID: new mongoose.Types.ObjectId(userID) }
            },
            {
                $lookup: {
                    from: "purchaseitems",
                    localField: "purchaseID",
                    foreignField: "_id",
                    as: "purchaseDetails"
                }
            },
            {
                $unwind: "$purchaseDetails"
            }
        ]);

        let Amount = 0; // Make sure to use 'totalAmount'
        cartItems.forEach((element) => {
            const price = parseFloat(element.purchaseDetails.price);
            const quantity = parseInt(element.quantity);
            Amount += price * quantity;
        });

        const vat = Amount * 0.05;
         const totalAmount = Amount+vat// 5% VAT


        const invoice = await InvoiceModel.create({
            userID: userID,
            number: cartItems[0].number,
            tranID: cartItems[0].tranID,
            amount: totalAmount.toString(),
            payment_status: "success",
            delivery_status: "pending",
            total: totalAmount.toString(),
            vat: vat.toString(),

        });

        return { status: "success", data: invoice };

    } catch (error) {
        return{ status: "fail", message: error.message };
    }



};

module.exports = { createInvoice };
