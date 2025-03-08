import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PurchaseListByGamePage from "./pages/purchaseListByGamePage.jsx";
import Purchasedetailspage from "./pages/purchasedetailspage.jsx";
import Userloginpage from "./pages/Userloginpage.jsx";
import CartListPage from "./pages/CartListPage.jsx";
import InvoicePage from "./pages/InvoicePage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<Userloginpage/>}/>
                <Route path="/purchaselist/:id" element={<PurchaseListByGamePage/>}/>
                <Route path="/purchaseDetails/:id" element={<Purchasedetailspage/>}/>
                <Route path="/cartlist" element={<CartListPage/>}/>
                <Route path="/InvoicePage" element={<InvoicePage/>}/>


            </Routes>
        </BrowserRouter>
    );
};

export default App;