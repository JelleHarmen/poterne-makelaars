<template>
  <section>
    <div class="xl:container mx-auto px-3">
      <div
        class="flex justify-between border-b border-primary rounded-lg px-3 py-2"
      >
        <div>
          <p class="dark:text-white">
            !! Poterne Makelaars is een concept. Alle content is fictief.
            <a href="https://jelleharmen.com" class="underline"
              >JelleHarmen.com</a
            >
          </p>
        </div>
        <div class="text-right self-center pl-3" @click="closeMessage">
          <div class="cursor-pointer">
            <img
              src="@/assets/fontawesome/regular/times.svg"
              alt="maan"
              class="h-4"
              :class="{ invert: $store.state.darkmode }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AlertMessage",
  methods: {
    closeMessage() {
      // toggle / remove the alert message using the close icon
      this.$store.state.alert_message_concept = !this.$store.state
        .alert_message_concept;
    },
  },
};
</script>

<style></style>
