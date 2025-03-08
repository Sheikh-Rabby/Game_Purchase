import {create} from "zustand";
import axios from "axios";
const invoice=create((set)=>({
    invoiceData:[],
    invoiceRequest:async (userID)=>{
       try{
           let response=await axios.get(`http://localhost:3030/api/invoice/${userID}`);
           console.log("res",response)
           if(response.data.status==="success"){
               set({invoiceData:response.data.data});
           }
       }catch(err){
           console.log(err.message);
       }
    }

}))
export default invoice;