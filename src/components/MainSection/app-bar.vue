<!-- eslint-disable @typescript-eslint/ban-types -->
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
      @click="setIsOpen()"
    />

    <div
      v-show="isOpen"
      class="block md:hidden absolute w-full h-full bg-black top-0 left-0 z-[10000] transition duration-1000"
    >
      <div class="text-white flex flex-col w-full py-10 px-5 gap-28">
        <div class="flex flex-row items-center justify-between">
          <img src="@/assets/logo.svg" alt="logo" />
          <img
            src="@/assets/icon-close.svg"
            alt="close"
            class="cursor-pointer"
            @click="setIsOpen()"
          />
        </div>
        <ul class="flex flex-col items-start gap-6 text-white font-[500]">
          <li
            class="w-auto font-light text-xl cursor-pointer pb-3 border-b-2 border-b-transparent transition duration-300 hover:border-b-white"
            v-for="index in links"
            :key="index"
            @click="setIsOpen()"
          >
            {{ index }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  name: "AppbarSection",
  setup() {
    const isOpen = ref(false);
    // eslint-disable-next-line @typescript-eslint/ban-types
    const SetLayoutStyle = inject<Function>("SetLayoutStyle");
    const setIsOpen = () => {
      isOpen.value = !isOpen.value;
      if (SetLayoutStyle) {
        SetLayoutStyle();
      }
    };
    const links = ["About", "Careers", "Events", "Products", "Support"];
    return { isOpen, setIsOpen, links };
  },
});
</script>

<style scoped>
</style>