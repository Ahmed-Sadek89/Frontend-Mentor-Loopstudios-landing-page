<template>
  <main class="bg-center bg-cover w-full h-screen">
    <div class="custom-container h-full">
      <Appbar />
      <HeroSection />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appbar from "@/components/MainSection/Appbar.vue";
import HeroSection from "@/components/MainSection/HeroSection.vue";
import "./style.css";

export default defineComponent({
  components: {
    Appbar,
    HeroSection,
  },
  setup() {
    return {};
  },
});
</script>
