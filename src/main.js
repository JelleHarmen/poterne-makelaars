import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/tailwindcss.css";
import Vuex from "vuex";
import { store } from "./store/store";

import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(router)
  .use(Vuex)
  .use(store)
  .use(VueAxios, axios)
  .mount("#app");
