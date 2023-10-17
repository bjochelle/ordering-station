import { defineStore } from "pinia";

export const useFullscreenLoader = defineStore("fullscreen_loader", {
    state: () => ({
        fullscreen_loader: false
    }),

});
