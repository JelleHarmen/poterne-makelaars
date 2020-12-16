<template>
  <router-link
    v-if="property.city"
    :to="{
      name: 'Property',
      params: {
        ownership: property.ownership ? 'koop' : 'huur',
        name: property.name,
        id: property.id,
        city: toUrlString(property.city),
        street: toUrlString(property.street),
      },
    }"
  >
    <div
      class="group shadow rounded-2xl overflow-hidden hover:shadow-lg border-4 border-white border-opacity-0 hover:border-primary hover:border-opacity-25 dark:bg-gray-900"
    >
      <div
        class="p-3 h-64 bg-cover bg-center"
        :style="{ 'background-image': 'url(' + property.image_header + ')' }"
      ></div>

      <div class="p-3 dark:text-white">
        <h5
          class="text-xl group-hover:text-primary transition font-medium"
          v-if="property.street"
        >
          {{ property.street }}
        </h5>

        <p class="pb-1">{{ property.zip_code }} {{ property.city }}</p>

        <p v-if="property.price">
          {{
            property.price.toLocaleString($store.state.locale, {
              style: "currency",
              currency: $store.state.currency,
              maximumSignificantDigits: 2,
            })
          }}
          <span v-if="property.ownership">k.k.</span>
          <span v-else>p/m</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
// import toUrlString mixin
import toUrlString from "@/mixins/toUrlString.js";

export default {
  name: "PropertyCard",
  mixins: [toUrlString],
  props: {
    // the property prop
    property: Array,
  },
};
</script>

<style></style>
