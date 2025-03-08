import React, { useEffect } from 'react';
import CartStore from "../store/CartStore.js";
import {useNavigate, useParams} from "react-router-dom";

const CartList = () => {
    const { cartlistByIdRequest, cartList,carListRemoveRequest,cartpayable,cartvat,carttotal ,CreateInvoiceRequest} = CartStore();
    const userID = localStorage.getItem("userID")?.trim();
    const navigate = useNavigate();



    useEffect(() => {
        (async ()=>{
            await cartlistByIdRequest(userID);
        })()
    }, []);

    const removeCart =async (id)=>{
       await  carListRemoveRequest(id)
        await cartlistByIdRequest(userID);
    }
    const createinvoice = async () => {
        let res = await CreateInvoiceRequest(userID);
        await cartlistByIdRequest(userID);
        if (res?.data?.status === "success") {
            navigate("/InvoicePage");
        } else {
            alert("Invoice Not Found");
        }
    };



    return (
        <div className="container mt-5">
            <h3 className="text-center mb-4">Your Shopping Cart</h3>
            {cartList.length === 0 ? (
                <div className="alert alert-info text-center" role="alert">
                    Your cart is empty! Please add some items.
                </div>
            ) : (
                <div className="row">
                    {cartList.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card shadow-sm mb-4">

                                <div className="card-body">

                                    <img className="game-image" src={item.purchaseitems.purchaseImage}/>
                                    <h5 className="card-text">{item.purchaseitems.purchaseName}</h5>

                                    <p className="card-text">Quantity : {item.quantity}</p>
                                    <p className="card-text">Price : {item.purchaseitems.price} BDT</p>
                                    <button onClick={() => removeCart(item._id)}
                                            className="btn btn-danger w-100">Remove
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <hr/>
            <h5>Total : {carttotal} BDT</h5>
            <hr/>
            <h5>Vat : {cartvat} BDT</h5>
            <hr/>
            <h5>Payable : {cartpayable} BDT</h5>


            <button onClick={createinvoice} className="btn btn-success mb-5 mt-5">Click For purchase</button>


        </div>
    );
};

export default CartList;
