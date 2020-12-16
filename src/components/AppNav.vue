<template>
  <nav>
    <div class="xl:container mx-auto p-3 lg:py-6">
      <div class="grid grid-cols-5 md:grid-cols-3">
        <div class="col-span-3 md:col-span-1">
          <router-link :to="{ name: 'Home' }">
            <img
              src="@/assets/poterne_makelaars-logo.svg"
              alt="Poterne makelaars logo"
              v-show="
                !$store.state.darkmode && !$store.state.nav_primary_is_open
              "
            />
            <img
              src="@/assets/poterne_makelaars-logo-dark.svg"
              alt="Poterne makelaars logo"
              v-show="$store.state.darkmode || $store.state.nav_primary_is_open"
            />
          </router-link>
        </div>
        <div class="flex justify-end md:justify-center">
          <div class="self-center">
            <ToggleDarkmode />
          </div>
        </div>
        <div class="self-center hidden lg:inline-block">
          <div class="flex justify-end">
            <div class="pl-3" :key="n.title" v-for="n in navigation_primary">
              <router-link
                :to="{ name: n.name }"
                class="dark:text-white text-lg cursor-pointer"
              >
                {{ n.title }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="flex justify-end lg:hidden">
          <div class="self-center">
            <ToggleNavPrimary />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import toggle darkmode feature
import ToggleDarkmode from "@/components/ToggleDarkmode.vue";

// import primary navigation
import navigation_primary from "@/config/navigation_primary.js";

// import alert demo message at the top of the page
import ToggleNavPrimary from "@/components/ToggleNavPrimary.vue";

export default {
  name: "AppHeader",
  components: { ToggleDarkmode, ToggleNavPrimary },
  data() {
    return { navigation_primary };
  },
};
</script>

<style></style>
