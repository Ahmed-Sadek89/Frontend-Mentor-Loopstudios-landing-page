<template>
  <div :class="layoutStyle">
    <MainSection />
    <div class="custom-container">
      <LeaderSection />
      <CreationSection />
    </div>
    <FooterSection />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
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
  setup() {
    const layoutStyle = ref("");
    const SetLayoutStyle = () => {
      layoutStyle.value = layoutStyle.value === "" ? "h-screen overflow-hidden" : "";
    };
    provide("SetLayoutStyle", SetLayoutStyle);
    return { layoutStyle };
  },
});
</script>
