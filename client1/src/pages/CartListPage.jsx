import React from 'react';
import CartList from "../components/CartList.jsx";
import MasterLayout from "../components/MasterLayout.jsx";

const CartListPage = () => {
    return (
        <MasterLayout>
          <CartList/>
        </MasterLayout>
    );
};

export default CartListPage;