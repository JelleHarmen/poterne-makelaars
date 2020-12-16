<template>
  <div class="cursor-pointer" @click="toggleNavPrimary()">
    <img
      src="@/assets/fontawesome/regular/bars.svg"
      alt="Menu"
      title="Open primaire menu"
      class="h-4"
      :class="{
        invert: $store.state.darkmode,
      }"
      v-if="!$store.state.nav_primary_is_open"
    />

    <img
      src="@/assets/fontawesome/regular/times.svg"
      alt="Menu"
      title="Open primaire menu"
      class="h-4 invert"
      v-if="$store.state.nav_primary_is_open"
    />
  </div>
</template>

<script>
export default {
  name: "ToggleNavPrimary",
  methods: {
    toggleNavPrimary() {
      // Toggle darkmode
      this.$store.state.nav_primary_is_open = !this.$store.state
        .nav_primary_is_open;
    },
  },
};
</script>

<style></style>
