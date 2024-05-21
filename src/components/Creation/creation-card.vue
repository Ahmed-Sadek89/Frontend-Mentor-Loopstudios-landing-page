<template>
  <ul
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5"
  >
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-deep-earth.jpg')] md:bg-[url('@/assets/desktop/image-deep-earth.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        Deep earth
      </h2>
    </li>
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-night-arcade.jpg')] md:bg-[url('@/assets/desktop/image-night-arcade.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        Night arcade
      </h2>
    </li>
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-soccer-team.jpg')] md:bg-[url('@/assets/desktop/image-soccer-team.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        Soccer team VR
      </h2>
    </li>
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-grid.jpg')] md:bg-[url('@/assets/desktop/image-grid.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        The grid
      </h2>
    </li>
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-from-above.jpg')] md:bg-[url('@/assets/desktop/image-from-above.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        From up above VR
      </h2>
    </li>
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-pocket-borealis.jpg')] md:bg-[url('@/assets/desktop/image-pocket-borealis.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        Pocket borealis
      </h2>
    </li>
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-curiosity.jpg')] md:bg-[url('@/assets/desktop/image-curiosity.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        The curiosity
      </h2>
    </li>
    <li
      class="group cursor-pointer flex items-end bg-[url('@/assets/mobile/image-fisheye.jpg')] md:bg-[url('@/assets/desktop/image-fisheye.jpg')] h-[50vh] lg:h-[70vh] bg-center bg-cover relative bg-no-repeat"
    >
      <div
        class="bg-transparent transition duration-300 hover:bg-[#ffffffb8] w-full h-full absolute top-0 z-30"
      />
      <h2
        class="text-white hover:text-white group-hover:text-black transition duration-300 z-40 relative py-5 pl-3 text-5xl font-light uppercase"
      >
        Make it fisheye
      </h2>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CreationCard",

  setup() {
    return {};
  },
});
</script>
