  import {create} from "zustand";
  import axios from "axios";
  import Cookies from "js-cookie";
  import Userlogin from "../components/userlogin.jsx";

const UserStore = create((set,get)=>({
    data:[],
    loginForm:{
        email:"",
        password:"",
    },
    loginFormOnchange:(name,value)=>{
        set((state)=>({
            loginForm:{...state.loginForm, [name]:value}
        }))
    },

    userloginRequest:async ()=>{

        const {email,password}=get().loginForm
       try{
            let reqbody={
                email,
                password
            }
           let response=await axios.post(`http://localhost:3030/api/Login`, reqbody);
           if(response){
               localStorage.setItem('token',response.data.token);
               localStorage.setItem('userID',response.data.data._id);
               return true;
           }else {
               return false;
           }

       }catch(error){
           console.log(error.message)
           return false;
       }
    }



}));
export default UserStore;