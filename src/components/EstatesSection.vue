<template>
  <section class="pb-12">
    <div class="xl:container mx-auto p-3">
      <h3 class="text-3xl font-serif  dark:text-white">
        Uw toekomstige woning?
      </h3>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        <div
          :key="estate.id"
          v-for="estate in estates"
          class="transform lg:first:-rotate-1 lg:first:translate-y-1 lg:last:rotate-1 lg:last:translate-y-1 lg:hover:rotate-0"
        >
          <EstateCard :estate="estate" />
        </div>
      </div>

      <!-- {{ estates }} -->

      <div class="grid grid-cols-1">
        <div>
          <router-link
            :to="{ name: 'Home' }"
            class="p-3 bg-primary text-white inline-block rounded-md"
            >Bekijk meer</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import the properties, houses etc.

// single card to display an estate may be used in a for loop
import EstateCard from "@/components/EstateCard.vue";

export default {
  name: "EstatesSection",
  components: { EstateCard },
  data() {
    return {
      estates: Array,
      estates_all: Array,
    };
  },
  mounted() {
    this.useApi(`${process.env.VUE_APP_API_URL}/estates`);
  },
  methods: {
    useApi(uri) {
      const axios = require("axios");
      axios
        .get(uri)
        .then((response) => {
          if (response.status === 200) {
            this.estates_all = response.data;
            this.fillEstates();
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    fillEstates() {
      this.estates = this.estates_all.slice(0, 4);
    },
  },
};
</script>

<style></style>
