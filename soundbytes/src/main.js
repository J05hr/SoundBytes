import { createApp } from "vue";
import router from "@/router";
import SoundBytes from "./App.vue";
import { state } from "./settings_store";


const app = createApp(SoundBytes);
app.provide("settings", state);
app.use(router);
app.mount("#app");
