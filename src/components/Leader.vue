<template>
  <section class="relative flex flex-col lg:flex-row items-end pt-20 lg:pt-40 pb-20">
    <div class="w-full lg:w-3/4">
      <img
        src="@/assets/desktop/image-interactive.jpg"
        alt="interactive"
        class="hidden lg:block w-[700px] object-cover"
      />
      <img
        src="@/assets/mobile/image-interactive.jpg"
        alt="interactive"
        class="block lg:hidden w-full object-cover"
      />
    </div>
    <div
      class="w-full lg:w-[35%] static lg:absolute right-[200px] bg-white p-5 lg:p-10 flex flex-col text-center lg:text-start gap-5"
    >
      <h2
        class="text-[hsl(0, 0%, 55%)] text-[30px] md:text-[40px] font-[400] leading-[1.2] uppercase"
      >
        The leader in interactive VR
      </h2>
      <p class="text-[hsl(0, 0%, 41%)] text-[11px] leading-[1.5] font-[400]">
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>