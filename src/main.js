import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/tailwindcss.css";
import Vuex from "vuex";
import { store } from "./store/store";

createApp(App)
  .use(router)
  .use(Vuex)
  .use(store)
  .mount("#app");
