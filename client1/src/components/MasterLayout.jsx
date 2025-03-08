import React from 'react';
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";
import {Toaster} from "react-hot-toast";

const MasterLayout = (props) => {
    return (
        <div>
            <Navbar />

            {props.children}
            <Toaster/>
            <Footer />

        </div>
    );
};

export default MasterLayout;