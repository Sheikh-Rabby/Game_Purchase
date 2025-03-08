import React, { useEffect } from 'react';
import invoice from "../store/Invoice.js";

const Invoice = () => {
    const { invoiceData, invoiceRequest } = invoice();
    const userID = localStorage.getItem("userID");

    useEffect(() => {
        (async () => {
            await invoiceRequest(userID);
        })();
    }, [userID]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Your Invoice Details</h2>
            <div className="row">
                {invoiceData.length > 0 ? (
                    invoiceData.map((item, i) => (
                        <div className="col-md-4 mb-4" key={i}>
                            <div className="card shadow-lg border-0 rounded">
                                <div className="card-body">
                                    <h5 className="card-title ">Number #{item.number}</h5>
                                    <p className="card-text"><strong>Transaction ID:</strong> {item.tranID}</p>
                                    <p className="card-text"><strong>Payment Status:</strong> {item.payment_status}</p>
                                    <p className="card-text"><strong>Delivery Status:</strong> {item.delivery_status}</p>
                                    <p className="card-text"><strong>Total:</strong> {item.total} BDT</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p>No invoices found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Invoice;
