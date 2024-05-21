<template>
  <footer class="py-16 bg-black text-white">
    <div class="custom-container">
      <div
        class="flex flex-col md:flex-row w-full items-center md:items-start justify-between"
      >
        <div class="flex flex-col gap-2 items-center md:items-start">
          <img
            src="@/assets/logo.svg"
            alt="logo"
            class="w-full md:w-[100px] h-auto"
          />
          <ul
            class="flex flex-col md:flex-row items-center gap-x-6 text-white font-[400]"
          >
            <li
              class="cursor-pointer pb-3 border-b-2 border-b-transparent transition duration-300 hover:border-b-white"
              v-for="index in links"
              :key="index"
            >
              {{ index }}
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center md:items-end gap-2">
          <div
            class="flex flex-wrap flex-row items-center gap-x-6 text-white font-[400]"
          >
            <img
              src="@/assets/icon-facebook.svg"
              alt="facebook"
              class="cursor-pointer pb-3 border-b-2 border-b-transparent transition duration-300 hover:border-b-white"
            />
            <img
              src="@/assets/icon-twitter.svg"
              alt="twitter"
              class="cursor-pointer pb-3 border-b-2 border-b-transparent transition duration-300 hover:border-b-white"
            />
            <img
              src="@/assets/icon-pinterest.svg"
              alt="pinterest"
              class="cursor-pointer pb-3 border-b-2 border-b-transparent transition duration-300 hover:border-b-white"
            />
            <img
              src="@/assets/icon-instagram.svg"
              alt="instagram"
              class="cursor-pointer pb-3 border-b-2 border-b-transparent transition duration-300 hover:border-b-white"
            />
          </div>
          <span class="text-sm text-gray-400">
            © 2021 Loopstudios. All rights reserved.</span
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterSection",
  setup() {
    const links = ["About", "Careers", "Events", "Products", "Support"];
    return { links };
  },
});
</script>

<style scoped>
</style>