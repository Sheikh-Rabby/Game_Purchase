import {create} from "zustand";
import axios from "axios";
import {useParams} from "react-router-dom";

const PurchaseStore=create((set,get)=>({


    cartForm:{

        paymentMethod:"",
        number:"",
        tranID:"",
        amount:""
    },
    cartFormOnchange:(name,value)=>{
      set((state)=>({
          cartForm:{...state.cartForm,[name]:value}
      }))
    },



    purchaseData:[],
    purchasecardRequest:async (userID,purchaseID,quantity)=>{
        const { paymentMethod, number, tranID, amount} = get().cartForm


        let reqbody={
            userID,
            purchaseID,
            quantity,
            paymentMethod,
            number,
            tranID,
            amount
        }
        try {
            let response = await axios.post("http://localhost:3030/api/saveCartList", reqbody);
            console.log("Response:", response.data);
            return true
        } catch (error) {
            console.error("Error saving cart:", error);
            return false;
        }
    }
}));
export default PurchaseStore;