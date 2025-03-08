import React from 'react';
import Invoice from "../components/invoice.jsx";
import MasterLayout from "../components/MasterLayout.jsx";

const InvoicePage = () => {
    return (
        <MasterLayout>
            <Invoice/>
        </MasterLayout>
    );
};

export default InvoicePage;