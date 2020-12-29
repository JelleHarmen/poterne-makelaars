<template>
  <section class="pb-12">
    <div class="xl:container mx-auto p-3">
      <h3 class="text-3xl font-serif  dark:text-white">
        Uw toekomstige woning?
      </h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 py-6">
        <div
          :key="property.id"
          v-for="property in returnNewestProperties"
          class="transform lg:first:-rotate-1 lg:first:translate-y-1 lg:last:rotate-1 lg:last:translate-y-1 lg:hover:rotate-0"
        >
          <EstateCard :property="property" />
        </div>
      </div>

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
import properties from "@/config/properties.js";

// single card to display a property may be used in a for loop
import EstateCard from "@/components/EstateCard.vue";

export default {
  name: "PropertiesSection",
  components: { EstateCard },
  data() {
    return {
      properties,
    };
  },
  computed: {
    // return the four newest properties in the array
    returnNewestProperties() {
      let nr = 4;
      let a = properties.slice(0, nr);

      return a;
    },
  },
};
</script>

<style></style>
