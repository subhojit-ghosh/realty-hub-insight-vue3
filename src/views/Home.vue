<template>
  <app-home-carousel />
  <app-home-carousel-content />
</template>

<script lang="ts">
import appHomeCarousel from "@/views/widgets/app-home-carousel.vue";
import appHomeCarouselContent from "@/views/widgets/app-home-carousel-content.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",

  components: { appHomeCarousel, appHomeCarouselContent },
});
</script>
