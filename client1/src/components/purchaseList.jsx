import React, {useEffect} from 'react';
import Gamestore from "../store/Gamestore.js";

import StarRatings from 'react-star-ratings';
import {Link} from "react-router-dom";

const PurchaseList = () => {
    const {purchaseList}=Gamestore();

    return (
        <div className="section">
            <h2 className="text-center mt-4">All Game Purchase</h2>
            <div className="container">
                <div className="row mt-4">
                    {purchaseList.map((item, i) => (
                        <div key={i} className="col-md-3 mb-3">
                            <div className="card bg-light">
                                <Link to={`/purchaseDetails/${item._id}`} className="card shadow-sm h-100 t rounded-3 bg-white">
                                    <img src={item.purchaseImage} alt="Game" className="game-image"/>

                                    <div className="card-body">
                                        <h5 className="card-title mt-2">Title: {item.purchaseName}</h5>
                                        <p className="card-text">Des: {item.description}</p>

                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">Tk: {item.price}</h5>
                                            <StarRatings
                                                rating={parseFloat(item.star)}
                                                starRatedColor="red"
                                                starDimension="15px"
                                                starSpacing="2px"
                                            />
                                        </div>
                                    </div>
                                </Link>


                                </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default PurchaseList;