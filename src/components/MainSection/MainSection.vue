<template>
  <main class="bg-center bg-cover w-full h-screen">
    <div class="custom-container h-full">
      <AppbarSection />
      <HeroSection />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppbarSection from "@/components/MainSection/app-bar.vue";
import HeroSection from "@/components/MainSection/HeroSection.vue";
import "./style.css";

export default defineComponent({
  components: {
    AppbarSection,
    HeroSection,
  },
  setup() {
    return {};
  },
});
</script>
