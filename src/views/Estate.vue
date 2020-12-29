<template>
  <section>
    <div class="xl:container mx-auto p-3">
      <header
        class="grid grid-rows-2 grid-cols-12 gap-1 h-80 rounded-xl overflow-hidden"
      >
        <div
          class="bg-cover bg-center row-span-2 col-span-6"
          :style="{
            'background-image': 'url(' + estate.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + estate.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + estate.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + estate.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + estate.image_header + ')',
          }"
        ></div>
      </header>

      <div class="grid grid-cols-6 py-4 border-b">
        <div class="col-span-full lg:col-span-4 lg:col-start-2 dark:text-white">
          <h3 class="text-3xl font-medium" v-if="estate.title">
            {{ estate.title }}
          </h3>

          <p class="pb-1">{{ estate.zip_code }} {{ estate.city }}</p>
        </div>
      </div>
      <div class="grid grid-cols-12 justify-center pt-6 dark:text-white">
        <div class="col-span-full lg:col-span-5 lg:col-start-3 pb-3">
          <h5 class="text-xl font-medium">Omschrijving</h5>
          <div v-if="estate.description">
            <p>{{ estate.description }}</p>
          </div>
        </div>

        <div class="col-span-full lg:col-span-3">
          <div class="bg-gray-50 dark:bg-gray-900 p-3">
            <h5 class="font-serif text-2xl pb-2">{{ owner.username }}</h5>

            <p class="text-bold">{{ owner.fullname }}</p>
            <p>{{ owner.phone }}</p>
            <p>{{ owner.email }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Estate",
  data() {
    return { estate: Object, owner: Object };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.apiEstate();
  },
  methods: {
    apiEstate() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/estates`, {
          params: {
            id: this.id,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            this.estate = response.data[0];

            this.apiEstateOwner(response.data[0].owner);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    apiEstateOwner(owner) {
      axios
        .get(`${process.env.VUE_APP_API_URL}/users`, {
          params: {
            id: owner,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            this.owner = response.data[0];
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
