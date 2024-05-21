<template>
  <header class="flex flex-row items-center justify-between py-10">
    <img src="@/assets/logo.svg" alt="logo" />
    <ul
      class="hidden md:flex flex-row items-center gap-6 text-white font-[500]"
    >
      <li
        class="cursor-pointer pb-3 border-b-2 border-b-transparent transition duration-300 hover:border-b-white"
        v-for="index in links"
        :key="index"
      >
        {{ index }}
      </li>
    </ul>
    <img
      src="@/assets/icon-hamburger.svg"
      alt="hamburger"
      class="block md:hidden cursor-pointer"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppbarSection",
  setup() {
    const links = ["About", "Careers", "Events", "Products", "Support"];
    return { links };
  },
});
</script>

<style scoped>
</style>