import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    nav_primary_is_open: false,
    darkmode: false,
    locale: "nl-nl",
    currency: "EUR",
    alert_message_concept: true,
    api_url: "http://localhost:3000",
    user_logged_in: {
      is_logged_in: true,
      id: 1,
    },
  },
});
