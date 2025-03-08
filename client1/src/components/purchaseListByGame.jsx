import React, {useEffect} from 'react';
import GameStore from "../store/Gamestore.js";
import {Link, useParams} from "react-router-dom";
import StarRatings from "react-star-ratings";
import PurchaseList from "./purchaseList.jsx";


const PurchaseListByGame = () => {
  const {purchaseListByGame,purchaseListRequestByGame}=GameStore()
    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            await purchaseListRequestByGame(id)
        })()
    },[])

    return (
        <div className="container">
            <div className="row mt-4">
                {purchaseListByGame.map((item, i) => (
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
            <PurchaseList/>
        </div>

    );
};

export default PurchaseListByGame;