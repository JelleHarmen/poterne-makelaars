<template>
  <section
    class="bg-primary dark:bg-black absolute top-0 left-0 h-screen w-screen text-white"
  >
    <AppNav />
    <div class="container mx-auto text-center">
      <div class="grid grid-cols-1">
        <div :key="link.title" v-for="link in navigation_primary" class="my-3">
          <router-link
            :to="{ name: link.name }"
            class="dark:text-white cursor-pointer font-serif text-3xl"
          >
            {{ link.title }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import the navigation
import AppNav from "@/components/AppNav.vue";

// import primary navigation import navigation_primary from
import navigation_primary from "@/config/navigation_primary.js";

export default {
  name: "MobileNavPrimarry",
  components: { AppNav },
  data() {
    return { navigation_primary };
  },
  watch: {
    $route() {
      this.closeNavPrimary();
    },
  },
  methods: {
    closeNavPrimary() {
      this.$store.state.nav_primary_is_open = false;
    },
  },
};
</script>

<style></style>
