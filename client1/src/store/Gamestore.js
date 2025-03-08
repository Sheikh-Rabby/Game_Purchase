import {create} from  "zustand";
import axios from "axios";

const GameStore =create((set)=>({

    gameData:[],
    gameDataRequest:async (req,res)=>{
        let response=await axios.get("http://localhost:3030/api/ReadGame");

        if(response.data.status === "success"){
            set({gameData:response.data.data});
        }
    },

    purchaseList:[],
    purchaseListRequest:async (req,res)=>{
        let response=await axios.get("http://localhost:3030/api/purchaseList")

        if(response.data.status === "success"){
            set({purchaseList:response.data.data});
        }
    },
    purchaseListByGame:[],
    purchaseListRequestByGame:async (id)=>{
        let response=await axios.get(`http://localhost:3030/api/purchaseListByGame/${id}`);
        if(response.data.status === "success"){
            set({purchaseListByGame:response.data.data});
        }
    },

    purchaseitemdetails:[],
    purchaseitemdetailsRequest:async (id)=>{
        let response=await axios.get(`http://localhost:3030/api/purchaseDetailsByid/${id}`);
        console.log(response);
        if(response.data.status === "success"){
            set({purchaseitemdetails:response.data.data});
        }
    },





}));
export default GameStore;