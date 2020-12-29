<template>
  <div class="xl:container mx-auto p-3">
    <h1 class="font-serif text-4xl pb-6">Droomhuis aanmelden</h1>

    <div class="grid grid-cols-2">
      <div class="col-span-1">
        <form @submit.prevent="submitForm()">
          <div class="grid grid-cols-2 gap-3 pb-6">
            <div class="pb-2">
              <label for="zip_code">Postcode</label>
              <input
                @change="getEstateInfo()"
                id="zip_code"
                v-model="zip_code"
                type="text"
                name="zip_code"
                placeholder="Bv. 4207 ER"
                pattern="[1-9][0-9]{3}\s?[a-zA-Z]{2}"
                class="border border-1 border-black w-full p-2"
                required
              />
            </div>

            <div class="pb-2">
              <label for="nr">Huisnummer</label>
              <input
                @change="getEstateInfo()"
                id="house_nr"
                v-model="house_nr"
                type="text"
                name="house_nr"
                placeholder="Bv. 2a"
                pattern="[0-9]{1,}"
                class="border border-1 border-black w-full p-2"
                required
              />
            </div>
          </div>

          {{ is_rental }}
          <div class="pb-2">
            <label for="is_rental">Koop of huur?</label>
            <div class="grid grid-cols-2 border border-black p-2 gap-2">
              <div>
                <input
                  type="radio"
                  id="sell"
                  name="sell"
                  value="false"
                  v-model="is_rental"
                />
                <label for="sell" class="cursor-pointer">
                  <div
                    class="bg-gray-100 text-center p-2 rounded-lg"
                    :class="{ 'bg-primary text-white': is_rental == 'false' }"
                  >
                    Koop
                  </div>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="rent"
                  name="rent"
                  value="true"
                  v-model="is_rental"
                />
                <label for="rent" class="cursor-pointer">
                  <div
                    class="bg-gray-100 text-center p-2 rounded-lg"
                    :class="{ 'bg-primary text-white': is_rental == 'true' }"
                  >
                    Huur
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div class="pb-2">
            <label for="esate_id">Wat verkoopt/ verhuurt u?</label>
            <select
              id="esate_id"
              name="esate_id"
              class="border border-1 border-black w-full p-2"
              v-model="esate_id"
              required
            >
              <option value="" selected disabled>Maak een keuze</option>

              <option value="1">Woning</option>
              <option value="2">Appartement</option>
              <option value="3">Kantoorruimte</option>
              <option value="4">Parkeergelegenheid</option>
            </select>
          </div>

          <div class="pb-6">
            <label for="price">De prijs van uw estate</label>
            <input
              id="price"
              v-model.number="price"
              type="number"
              name="title"
              placeholder="180000"
              min="0"
              class="border border-1 border-black w-full p-2"
              required
            />
          </div>

          <div class="pb-2">
            <label for="title">De titel van uw estate</label>
            <input
              id="title"
              v-model="title"
              type="text"
              name="title"
              placeholder="Bv. Poterne 2a"
              class="border border-1 border-black w-full p-2"
              required
            />
          </div>

          <div class="pb-2">
            <label for="description">Beschrijf uw droomhuis</label>
            <textarea
              id="description"
              v-model="description"
              name="description"
              placeholder="Dit droomhuis.."
              class="border border-1 border-black w-full p-2"
              required
            />
          </div>

          <div>
            <label for="images">Kies uw beste foto's.</label>
            <input
              type="file"
              id="images"
              name="filename"
              class="w-full"
              @change="imageChecker($event)"
              required
            />
          </div>

          <button
            type="submit"
            class="bg-primary text-white rounded-lg text-center px-3 py-6 w-full mt-5 text-xl"
          >
            Aanmaken
          </button>
        </form>
      </div>
      <div>
        <p>Opsomming van uw data:</p>
      </div>
    </div>
  </div>
</template>

<script>
// define axios
import axios from "axios";

// import toUrlString mixin
import toUrlString from "@/mixins/toUrlString.js";

export default {
  name: "CreateEstate",
  mixins: [toUrlString],
  data() {
    return {
      // all estate data
      zip_code: "",
      house_nr: "",

      esate_id: "",
      title: "",

      is_rental: "false",
      price: 180000,
      image_header: "",
      description: "",

      api_estate_info: Object,

      // estate api is loading
      api_estate_is_loading: false,
    };
  },
  methods: {
    getEstateInfo() {
      // only fire if zip_code and house_nr are filled
      if (this.zip_code && this.house_nr) {
        this.api_estate_is_loading = true;
        axios
          .get("https://photon.komoot.io/api/", {
            params: {
              q: `${this.zip_code.trim()} - ${this.house_nr}`,
              lang: "it",
            },
          })
          .then((response) => {
            let countrycode = response.data.features[0].properties.countrycode;

            // OK and dutch estate
            if (response.status === 200 && countrycode === "NL") {
              // fill the info
              let estate_info_form_api = response.data.features[0].properties;
              this.EstateInfoToFormFields(estate_info_form_api);
              console.log(estate_info_form_api);
              this.api_estate_info = estate_info_form_api;

              // Api did succesfully fire, but did not receive a dutch estate or a correct zip_code and house_nr combination
            } else if (response.status === 200 && countrycode !== "NL") {
              // error
              console.log("Geen geldig (Nederlands) adres");

              // something else went wrong
            } else {
              // error
              console.log("er is iets fout gegaan");
            }
          })
          // catch all errors
          .catch((err) => {
            // did not fetch
            console.log(err, "did not fetch");
          })

          // if api is loaded aside from succeeding or failing
          .finally(() => {
            this.api_estate_is_loading = false;
          });
      } else {
        // zip_code or house_nr is empty
        console.log("Een van de waardes is leeg");
      }
    },
    // fills the correct estate information to the form fields
    EstateInfoToFormFields(estate_info_form_api) {
      this.title = `${estate_info_form_api.street} ${estate_info_form_api.housenumber}`;
    },
    imageChecker(e) {
      let image_type = e.target.files[0].type;

      // supported files
      let supported_files = ["image/png", "image/jpg", "image/jpeg"];

      // includes is not supported for IE
      // if the image_type is a supported image type
      if (supported_files.includes(image_type)) {
        // fill the image with the input image
        this.image_header = e.target.files[0].name;
      } else {
        console.log(`Aleen PNG of JPG/JPEG bestanden worden ondersteund`);
      }
    },
    submitForm() {
      axios
        .post(`${process.env.VUE_APP_API_URL}/estates`, {
          esate_id: this.esate_id,
          user_id: this.$store.state.user_logged_in.id,
          is_rental: false,
          title: `${this.api_estate_info.street} ${this.api_estate_info.housenumber}`,
          street: this.api_estate_info.street,
          zip_code: this.zip_code.replace(/\s/g, ""),
          city: this.api_estate_info.city,
          locality: this.api_estate_info.locality,
          price: 780000,
          image_header: this.image_header,
        })
        .then((response) => {
          // recieve the ID thats assigned to the new post
          let estate = response.data;
          this.formSuccess(estate);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    formSuccess(estate) {
      // send user to the asset page he just created
      this.$router.push({
        name: "Estate",
        params: {
          id: estate.id,
          is_rental: estate.is_rental === false ? "koop" : "huur",
          city: this.toUrlString(estate.city),
          title: this.toUrlString(this.title),
        },
      });
    },
  },
};
</script>

<style></style>
