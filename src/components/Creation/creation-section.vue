<template>
  <section
    class="flex flex-col gap-16 items-center md:items-start text-center md:text-start pb-10"
  >
    <div class="flex flex-row items-center justify-between w-full">
      <h2 class="text-5xl font-light text-black uppercase w-full md:w-auto">
        Our creations
      </h2>
      <button
        class="hidden md:block uppercase tracking-widest text-lg border-2 border-black py-2 px-5 text-black transition duration-300 hover:text-white hover:bg-black"
      >
        See all
      </button>
    </div>
    <CreationCard/> 
    <button
      class="block md:hidden uppercase tracking-widest text-lg border-2 border-black py-2 px-5 text-black transition duration-300 hover:text-white hover:bg-black"
    >
      See all
    </button>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import CreationCard from "./creation-card.vue";

export default defineComponent({
  name: "CreationSection",
  components: {
    CreationCard
  },
  setup() {
    const images = computed(() => {
      return `bg-[url('@/assets/mobile/image-deep-earth.jpg')] md:bg-[url('@/assets/desktop/image-deep-earth.jpg')] h-[50vh]`;
    });
    return { images };
  },
});
</script>

<style scoped>
</style>