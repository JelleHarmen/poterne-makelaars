<template>
  <div class="cursor-pointer" @click="toggleDarkmode()">
    <span v-show="$store.state.darkmode">
      <img
        src="@/assets/fontawesome/regular/moon.svg"
        alt="maan"
        class="h-4 invert"
      />
    </span>
    <span v-show="!$store.state.darkmode">
      <img
        src="@/assets/fontawesome/solid/moon.svg"
        alt="maan"
        class="h-4"
        :class="{ invert: $store.state.nav_primary_is_open }"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: "toggleDarkmode",
  methods: {
    toggleDarkmode() {
      // Toggle darkmode
      this.$store.state.darkmode = !this.$store.state.darkmode;
    },
  },
};
</script>

<style></style>
