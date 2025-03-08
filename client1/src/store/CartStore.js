import { create } from "zustand";
import axios from "axios";
import cartList from "../components/CartList.jsx";

const cartStore = create((set) => ({

    carListRemoveRequest: async (id) => {
        try {
            let response = await axios.get(`http://localhost:3030/api/removecardlist/${id}`);

            return response;
        } catch (err) {
        }
    },
    cartList: [],
    cartCount: 0,
    carttotal: 0,
    cartvat: 0,
    cartpayable: 0,

    cartlistByIdRequest: async (userID) => {
        try {
            let response = await axios.get(`http://localhost:3030/api/cartListByID/${userID}`);
            if (response.data.status === "success") {
                set({ cartList: response.data.data ,
                      cartCount: response.data.data.length });
                let total = 0;
                let vat = 0;
                let payable = 0;

                response.data.data.forEach((item) => {
                    total += parseInt(item.quantity) * parseInt(item.purchaseitems.price);
                });

                vat = total * 0.05;
                payable = total + vat;
                set({ carttotal: total });
                set({ cartvat: vat });
                set({ cartpayable: payable });

            }
        } catch (err) {
            console.log(err.message);
        }
    },
    CreateInvoiceRequest: async (userID) => {
        try {
            let req = {userID};
            let response = await axios.post(`http://localhost:3030/api/createinvoice`,req);

            if (response.data.status === "success") {
                return response;
            }
        } catch (err) {
            console.error(err);
        }
    },
}));

export default cartStore;
