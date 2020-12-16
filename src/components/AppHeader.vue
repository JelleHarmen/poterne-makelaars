<template>
  <section>
    <div class="xl:container mx-auto p-3 py-16">
      <div class="grid grid-cols-6">
        <div
          class="col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 lg:col-start-2 xl:col-start-2"
        >
          <h1
            class="text-5xl lg:text-5xl xl:text-6xl font-serif dark:text-white"
          >
            De geheime toegangspoort <br />
            naar uw droomwoning<span class="text-primary">.</span>
          </h1>

          <SearchField class="pt-10" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchField from "@/components/SearchField.vue";

export default {
  name: "Home",
  components: { SearchField },
};
</script>
