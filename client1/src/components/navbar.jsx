import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import CartStore from "../store/CartStore.js";

const Navbar = () => {
    const {cartCount,cartlistByIdRequest}=CartStore()

    const userID = localStorage.getItem("userID")?.trim();

    useEffect(() => {
        (async ()=>{
           await cartlistByIdRequest(userID)
        })()
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary   ">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>

                            {
                                <Link to="/cartlist" type="button" className="btn ms-2 btn-light position-relative">
                                    <i className="bi bi-bag text-dark"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartCount}</span>
                                </Link>

                            }


                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;