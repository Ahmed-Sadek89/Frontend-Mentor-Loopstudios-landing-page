<template>
  <MainSection />
  <section>leader</section>
  <section>creation</section>
  <footer>footer</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainSection from "@/components/MainSection.vue";

export default defineComponent({
  components: {
    MainSection
  }
});
</script>
