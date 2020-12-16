<template>
  <section>
    <div class="xl:container mx-auto p-3">
      <header
        class="grid grid-rows-2 grid-cols-12 gap-1 h-80 rounded-xl overflow-hidden"
      >
        <div
          class="bg-cover bg-center row-span-2 col-span-6"
          :style="{
            'background-image': 'url(' + property.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + property.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + property.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + property.image_header + ')',
          }"
        ></div>
        <div
          class="bg-cover bg-center col-span-3"
          :style="{
            'background-image': 'url(' + property.image_header + ')',
          }"
        ></div>
      </header>
      <div class="grid grid-cols-6 py-4 border-b">
        <div class="col-span-full lg:col-span-4 lg:col-start-2 dark:text-white">
          <h3 class="text-3xl font-medium" v-if="property.street">
            {{ property.street }}
          </h3>

          <p class="pb-1">{{ property.zip_code }} {{ property.city }}</p>
        </div>
      </div>
      <div class="grid grid-cols-12 justify-center pt-6 dark:text-white">
        <div class="col-span-full lg:col-span-5 lg:col-start-3 pb-3">
          <h5 class="text-xl font-medium">Omschrijving</h5>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            congue vitae metus eget commodo. Phasellus eleifend lorem feugiat
            sapien faucibus, nec suscipit urna posuere. Duis nec placerat neque.
            Suspendisse pretium euismod nisl a venenatis. Suspendisse consequat,
            augue et dapibus volutpat, justo arcu gravida lectus, eu consectetur
            erat sem at tortor. Aliquam viverra tellus tortor, quis malesuada
            lacus efficitur nec. Proin vel diam fermentum, dapibus lacus ac,
            lacinia velit. Duis vitae luctus sapien. Cras ex odio, efficitur
            rutrum iaculis id, iaculis vitae magna. Nulla sodales nunc facilisis
            neque condimentum, gravida bibendum sapien dictum. Donec mi nulla,
            vulputate eget urna vestibulum, pulvinar tempus odio. Praesent sit
            amet dui eu nulla vehicula dignissim.
          </p>

          <p>
            Maecenas non mauris eget augue facilisis laoreet. Sed a leo a lorem
            hendrerit dapibus. Integer et varius lacus. Morbi nec rhoncus
            tellus. Vestibulum iaculis ipsum vel sodales ornare. Aliquam porta
            massa nisl, et accumsan eros finibus a. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Pellentesque iaculis enim id mi tincidunt, luctus aliquet dui
            pretium. Nulla facilisi. Fusce pellentesque purus vitae porta
            hendrerit. Suspendisse consectetur, metus at placerat vestibulum,
            elit massa iaculis quam, in auctor lacus risus vitae elit.
          </p>

          <p>
            Donec bibendum lorem non tortor lacinia, vel venenatis dui placerat.
            Fusce ultricies pellentesque neque blandit commodo. Suspendisse id
            libero mauris. Suspendisse potenti. Nunc in volutpat nisl. Quisque
            hendrerit interdum venenatis. Maecenas sagittis placerat nulla in
            mollis. Aliquam erat volutpat. Sed vel ultrices sapien, vitae
            consectetur orci. Pellentesque fermentum, sapien sed posuere cursus,
            felis sapien mollis eros, ut aliquet enim purus eu risus.
          </p>
        </div>

        <div class="col-span-full lg:col-span-3">
          <div class="bg-gray-50 dark:bg-gray-900 p-3">
            <h5 class="font-serif text-lg pb-2">Extra informatie</h5>
            <p>
              Proin vel diam fermentum, dapibus lacus ac, lacinia velit. Duis
              vitae luctus sapien. Cras ex odio, efficitur rutrum iaculis id,
              iaculis vitae magna. Nulla sodales nunc facilisis neque
              condimentum, gravida bibendum sapien dictum. Donec mi nulla,
              vulputate eget urna vestibulum, pulvinar tempus odio. Praesent sit
              amet dui eu nulla vehicula dignissim.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import properties from "@/config/properties.js";

export default {
  name: "Property",
  data() {
    return {
      properties,
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  computed: {
    property() {
      // filter the property
      let filtered_property = this.properties.filter((p) => p.id == this.id);
      return filtered_property[0];
    },
  },
};
</script>

<style></style>
