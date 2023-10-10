import {defineStore} from "pinia";
import axios from "axios";

export const usePromoItemStore = defineStore("promoItem", {
    state: () => ({
        promo_items: [],
        item_details: {},
        descriptions: {},
        price_valid:false,
    }),

    getters: {
        showPriceTag() {
            if (this.price_valid) {
                let default_tag = "ValueClub";
                let mbr_group = ""; // You can set mbr_group as needed

                if (
                    this.item_details.prices &&
                    this.item_details.prices.unit_price_ind != mbr_group
                ) {
                    return default_tag;
                } else {
                    return this.item_details.prices.unit_price_ind;
                }
            }
        },
        showUnitPrice() {
            return  this.item_details.prices.unit_price
        },
        showFulfillBy() {
            return (this.item_details.online_settings) ? 'Fulfilled By: ' + this.item_details.online_settings.fulfilled_by : '';
        },
    },

    actions: {
        async fetchPromoItem(options, page) {
            const uri = 'api/public/promo?' +
                'page=' + page +
                '&search=' + options.search +
                '&sortby=' + options.currentSort +
                '&sortdir=' + options.currentSortDir +
                '&currentpage=' + options.currentPage;
            const response = await axios.get(uri);
            this.promo_items = response.data
        },

        async fetchProductDetails(upc) {
            const uri = `api/public/item-details?id=`+upc
            const response = await axios.get(uri);
            this.item_details = response.data.data
            this.price_valid=true;
        },

        async fetchDescription(upc) {
            const uri = `api/public/item-description?id=`+upc
            const response = await axios.get(uri);
            this.descriptions = response.data.data
        },




    },
});

