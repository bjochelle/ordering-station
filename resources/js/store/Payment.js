import {defineStore} from "pinia";
import axios from "axios";

export const usePaymentStore = defineStore("payment", {
    state: () => ({
        payment_data: {}
    }),

    getters: {},

    actions: {
        async payment2c2p() {
             const uri = '/api/public/payment-2c2p';
             const response = await axios.get(uri)
            // this.all_roles = response.data
        },
        
    },
});

