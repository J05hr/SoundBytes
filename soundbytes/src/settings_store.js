import { reactive, inject } from "vue";
import Settings from "@/objs/Settings";

export const state = reactive({
    settings: new Settings()
});

export const useSettings = () => inject("settings");