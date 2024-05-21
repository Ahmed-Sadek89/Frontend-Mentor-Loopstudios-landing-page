<template>
  <MainSection />
  <div class="custom-container">
    <LeaderSection />
    <CreationSection />
  </div>
  <FooterSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainSection from "@/components/MainSection/MainSection.vue";
import LeaderSection from "@/components/Leader/leader-section.vue";
import CreationSection from "@/components/Creation/creation-section.vue";
import FooterSection from "./components/Footer/footer-section.vue";

export default defineComponent({
  components: {
    MainSection,
    LeaderSection,
    CreationSection,
    FooterSection,
  },
});
</script>
