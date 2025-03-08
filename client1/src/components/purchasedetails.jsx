import React, { useEffect, useState } from 'react';
import Gamestore from "../store/Gamestore.js";
import { useParams } from "react-router-dom";  // ✅ useParams() এখানে রাখো
import Image from "../components/image.jsx";
import PurchaseStore from "../store/PurchaseStore.js";
import cartStore from "../store/CartStore.js";
import toast from "react-hot-toast";



const Purchasedetails = () => {
    const { purchaseitemdetails, purchaseitemdetailsRequest } = Gamestore();
    const { purchasecardRequest, cartForm, cartFormOnchange } = PurchaseStore();
    const {cartlistByIdRequest}=cartStore()
    const { id: purchaseID } = useParams();
    const userID = localStorage.getItem("userID")?.trim();

    useEffect(() => {
        (async () => {
            await purchaseitemdetailsRequest(purchaseID);
        })();
    }, [purchaseID]);

    const [quantity, setQuantity] = useState(1);

    const plusquantity = () => {
        setQuantity(quantity + 1);
    }

    const minusquantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };
    const handleAddToCart = async () => {
        let res = await purchasecardRequest(userID, purchaseID, quantity);
        if (res) {
            toast.success("Purchase added successfully.");
        }

        await cartlistByIdRequest(userID);
    };



    return (
        <div className="container mt-5">
            <div className="row">

                <div className="col-md-6 p-3">
                    <Image />
                </div>

                <div className="col-md-6 p-3">
                    {purchaseitemdetails && purchaseitemdetails.length > 0 ? (
                        <>
                            <h3 className="text-primary">{purchaseitemdetails[0].purchaseName}</h3>
                            <p className="text-muted">{purchaseitemdetails[0].description}</p>
                            <h4 className="text-success">{purchaseitemdetails[0].price} BDT</h4>

                            <div className="mt-4">
                                {/* Payment Method */}
                                <div className="form-group">
                                    <label className="font-weight-bold">Payment Method</label>
                                    <select
                                        value={cartForm.paymentMethod}
                                        className="form-control"
                                        onChange={(e) => cartFormOnchange("paymentMethod", e.target.value)}
                                    >
                                        <option value="">Select Payment Method</option>
                                        <option value="bkash">Bkash</option>
                                        <option value="nogod">Nogod</option>
                                        <option value="rocket">Rocket</option>
                                    </select>
                                </div>

                                {/* Phone Number */}
                                <div className="form-group">
                                    <label className="font-weight-bold">Phone Number</label>
                                    <input
                                        type="text"
                                        value={cartForm.number}
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        onChange={(e) => cartFormOnchange("number", e.target.value)}
                                    />
                                </div>


                                <div className="form-group">
                                    <label className="font-weight-bold">Transaction ID</label>
                                    <input
                                        type="text"
                                        value={cartForm.tranID}
                                        className="form-control"
                                        placeholder="Enter your Transaction ID"
                                        onChange={(e) => cartFormOnchange("tranID", e.target.value)}
                                    />
                                </div>

                                {/* Amount */}
                                <div className="form-group">
                                    <label className="font-weight-bold">Amount</label>
                                    <input
                                        type="text"
                                        value={cartForm.amount}
                                        className="form-control"
                                        placeholder="Enter the amount"
                                        onChange={(e) => cartFormOnchange("amount", e.target.value)}
                                    />
                                </div>

                                {/* Quantity Selection */}
                                <div className="form-group">
                                    <label className="font-weight-bold">Quantity</label>
                                    <div className="input-group">
                                        <button onClick={minusquantity} className="btn btn-outline-secondary">-</button>
                                        <input
                                            value={quantity}
                                            type="text"
                                            className="form-control text-center"
                                            readOnly
                                        />
                                        <button onClick={plusquantity} className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>


                                <button onClick={handleAddToCart} className="btn btn-success w-100 mt-3 mb-5">
                                    Add to Cart
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="text-center mt-5">
                            <h4>Loading item details...</h4>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Purchasedetails;
