<template>
  <form action="">
    <div class="mb-2 md:mb-0">
      <label for="search" class="dark:text-white"
        >Waar zoekt u uw droomhuis?</label
      >
    </div>

    <div class="grid grid-cols-5 gap-3 md:gap-1">
      <div class="col-span-3 md:col-span-2">
        <input
          type="text"
          name="search"
          placeholder="Plaats, buurt, adres, etc."
          class="border w-full h-full rounded-none md:rounded-l-md p-3"
          required
        />
      </div>
      <div class="col-span-2 md:col-span-1">
        <select name="km" class="border w-full rounded-none h-full p-3">
          <option value="0">+ 0 km</option>
          <option value="10">+ 10 km</option>
          <option value="20">+ 20 km</option>
          <option value="30">+ 30 km</option>
          <option value="50">+ 50 km</option>
        </select>
      </div>

      <div class="col-span-5 md:col-span-2 lg:col-span-1">
        <button
          type="submit"
          class="bg-primary w-full h-full text-white rounded md:rounded-l-none md:rounded-r-md py-4"
        >
          Zoeken
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchField",
};
</script>

<style></style>
