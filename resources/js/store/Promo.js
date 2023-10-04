import {defineStore} from "pinia";
import axios from "axios";

export const usePromoItemStore = defineStore("promoItem", {
    state: () => ({
        promo_items: [],
    }),

    getters: {},

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
      


    },
});

