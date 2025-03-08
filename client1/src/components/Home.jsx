import React, { useEffect } from 'react';
import Gamestore from "../store/Gamestore.js";
import {Link} from "react-router-dom";

const Home = () => {
    const { gameData, gameDataRequest,purchaseList,purchaseListRequest } = Gamestore();

    useEffect(() => {
        (async () => {
            await gameDataRequest();
            await purchaseListRequest()
        })();
    }, []);

    return (
        <div className="section">


        <div className="container ">
            <div className="row ">
                <h1 className="m">Game</h1>

                {gameData.map((item, i) => (
                    <div key={i} className="col-md-3   mb-3 ">
                        <div className="card  bg-light">
                            {/* ✅ Bootstrap Image Optimization */}
                            <img src={item.gameImage} alt="Game" className="game-image"/>


                            <div className="card-body d-flex justify-content-between ">
                                <h5 className="card-title mt-2">{item.gameName}</h5>
                                <Link className="text-white btn btn-success" to={`/purchaselist/${item._id}`}>click here</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>

    );
};

export default Home;
