const mongoose = require("mongoose");

const InvoiceModelSchema = mongoose.Schema({
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    number: { type: Number, required: true },
    tranID: { type: Number, required: true },
    payment_status: { type: String, required: true, enum: ['success', 'failed'] },
    delivery_status: { type: String, required: true, enum: ['pending', 'shipped', 'delivered'] },
    total: { type: String, required: true },
    vat: { type: String, required: true },

}, { timestamps: true,versionKey:false });

const InvoiceModel = mongoose.model("invoices", InvoiceModelSchema);

module.exports = InvoiceModel;
