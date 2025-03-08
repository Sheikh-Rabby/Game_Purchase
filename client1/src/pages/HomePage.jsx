import React from 'react';
import Home from "../components/Home.jsx";
import PurchaseList from "../components/purchaseList.jsx";
import MasterLayout from "../components/MasterLayout.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
            <Home/>
            <PurchaseList/>
        </MasterLayout>
    );
};

export default HomePage;