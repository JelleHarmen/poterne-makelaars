<template>
  <div :class="{ dark: $store.state.darkmode }">
    <div class="dark:bg-black">
      <div class="flex flex-col min-h-screen justify-between">
        <div>
          <AlertMessage v-if="$store.state.alert_message_concept" />
          <AppNav />
        </div>

        <main class="mb-auto">
          <router-view />
        </main>

        <AppFooter />
      </div>
      <MobileNavPrimary v-if="$store.state.nav_primary_is_open" />
    </div>
  </div>
</template>

<script>
// import the navigation
import AppNav from "@/components/AppNav.vue";

// import the footer
import AppFooter from "@/components/AppFooter.vue";

// import mobile primary navigation
import MobileNavPrimary from "@/components/MobileNavPrimary.vue";

// import alert demo message at the top of the page
import AlertMessage from "@/components/AlertMessage.vue";

export default {
  name: "App",
  components: { AppNav, AppFooter, MobileNavPrimary, AlertMessage },
  mounted() {
    // watch window changes
    window.addEventListener("resize", () => {
      // if window width is equal or higher than 1024 (LG Devices)
      if (window.innerWidth >= 1024) {
        // close the primary nav
        this.$store.state.nav_primary_is_open = false;
      }
    });
  },
};
</script>

<style lang="scss">
// import Texturina font
@import url("https://fonts.googleapis.com/css2?family=Texturina:wght@500;600;700;800&display=swap");

// temporarily to invert svg images, ideally would use fontawesome directly
.invert {
  filter: invert(1);
}
</style>
