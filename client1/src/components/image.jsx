import React, {useEffect} from 'react';
import Gamestore from "../store/Gamestore.js";
import {useParams} from "react-router-dom";

const Image = () => {
    const {purchaseitemdetails,purchaseitemdetailsRequest}=Gamestore()
    const {id} = useParams();
    useEffect(() => {
        (async ()=>{
            await purchaseitemdetailsRequest(id);
        })()
    }, []);
    return (
        <div>
            {

               purchaseitemdetails && purchaseitemdetails.length > 0 ? (
                   <img className="game-image1" src={purchaseitemdetails[0].purchaseImage} alt=""/>
               ):(<p>loading</p>)
            }
        </div>
    );
};

export default Image;