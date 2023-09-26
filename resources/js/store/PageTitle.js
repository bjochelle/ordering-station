import { defineStore } from "pinia";

export const pageTitle = defineStore("page_title", {
    state: () => ({
        pageName: null
    }),

});
