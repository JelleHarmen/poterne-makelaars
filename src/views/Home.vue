<template>
  <AppHeader />
  <EstatesSection />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import EstatesSection from "@/components/EstatesSection.vue";

export default {
  name: "Home",
  components: { AppHeader, EstatesSection },
};
</script>
