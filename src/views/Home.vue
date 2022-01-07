<template>
  <app-home-carousel />
  <app-home-carousel-content />
  <app-home-agent-card-list />
</template>

<script lang="ts">
import appHomeAgentCardList from "@/views/widgets/home/agent/app-home-agent-card-list.vue";
import appHomeCarouselContent from "@/views/widgets/home/carousel/app-home-carousel-content.vue";
import appHomeCarousel from "@/views/widgets/home/carousel/app-home-carousel.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",

  components: { appHomeCarousel, appHomeCarouselContent, appHomeAgentCardList },
});
</script>
