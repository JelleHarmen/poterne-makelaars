<template>
  <AppHeader />
  <PropertiesSection />
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import PropertiesSection from "@/components/PropertiesSection.vue";

export default {
  name: "Home",
  components: { AppHeader, PropertiesSection },
};
</script>
