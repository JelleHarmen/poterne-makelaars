<template>
  <router-link
    v-if="estate"
    :to="{
      name: 'Estate',
      params: {
        id: estate.id,
        is_rental: estate.is_rental ? 'koop' : 'huur',
        city: toUrlString(estate.city),
        title: toUrlString(estate.title),
      },
    }"
  >
    <div
      class="group shadow rounded-2xl overflow-hidden hover:shadow-lg border-4 border-white border-opacity-0 hover:border-primary hover:border-opacity-25 dark:bg-gray-900"
    >
      <div
        class="p-3 h-64 bg-cover bg-center"
        :style="{ 'background-image': 'url(' + estate.image_header + ')' }"
      ></div>

      <div class="p-3 dark:text-white">
        <h5
          class="text-xl group-hover:text-primary transition font-medium"
          v-if="estate.title"
        >
          {{ estate.title }}
        </h5>

        <p class="pb-1" v-if="estate.zip_code && estate.city">
          {{ estate.zip_code }} {{ estate.city }}
        </p>

        <p v-if="estate.price" class="font-bold">
          {{
            estate.price.toLocaleString($store.state.locale, {
              style: "currency",
              currency: $store.state.currency,
              maximumSignificantDigits: 2,
            })
          }}

          <span v-if="estate.estate_id >= 100 && estate.estate_id <= 199"
            >k.k.</span
          >
          <span v-else-if="estate.estate_id >= 200 && estate.estate_id <= 299"
            >/mnd</span
          >
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
// import toUrlString mixin
import toUrlString from "@/mixins/toUrlString.js";

export default {
  name: "EstateCard",
  mixins: [toUrlString],
  props: {
    // the estate prop
    estate: Object,
  },
};
</script>

<style></style>
