import React from 'react';
import PurchaseList from "../components/purchaseList.jsx";
import MasterLayout from "../components/MasterLayout.jsx";

const PurchaseListPage = () => {
    return (
        <MasterLayout>
            <PurchaseList/>
        </MasterLayout>
    );
};

export default PurchaseListPage;