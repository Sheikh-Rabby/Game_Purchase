import React from 'react';
import UserStore from "../store/UserStore.js";
import {useNavigate} from "react-router-dom";

const Userlogin = () => {
    const { loginForm, loginFormOnchange, userloginRequest } = UserStore();
    const navigate = useNavigate();

    const login = async () => {
      let res=  await userloginRequest();
      if(res){
          navigate('/')
      }else {
          alert("something went wrong")
      }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h3 className="text-center mb-4">Login</h3>
                <label>Email</label>
                <input
                    value={loginForm?.email}
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    onChange={(e) => loginFormOnchange("email", e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={loginForm?.password}
                    className="form-control mb-3"
                    placeholder="Enter your password"
                    onChange={(e) => loginFormOnchange("password", e.target.value)}
                />
                <div className="d-flex justify-content-between align-items-center">
                    <button onClick={login} className="btn btn-primary w-100">Login</button>
                </div>
                <div className="mt-3 text-center">
                    <small>Don't have an account? <a href="/register">Sign up</a></small>
                </div>
            </div>
        </div>
    );
};

export default Userlogin;
