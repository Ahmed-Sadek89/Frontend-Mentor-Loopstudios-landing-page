<template>
  <MainSection />
  <div class="custom-container">
    <Leader />
    <section>creation</section>
  </div>
  <footer>footer</footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainSection from "@/components/MainSection/MainSection.vue";
import Leader from "@/components/Leader.vue";

export default defineComponent({
  components: {
    MainSection,
    Leader,
  },
});
</script>
