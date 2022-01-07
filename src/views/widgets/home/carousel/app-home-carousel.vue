<template>
  <q-carousel
    animated
    v-model="slide"
    arrows
    navigation
    infinite
    :autoplay="autoplay"
    transition-prev="slide-right"
    transition-next="slide-left"
    height="700px"
  >
    <q-carousel-slide
      v-for="(item, i) in images"
      :key="i"
      :name="i"
      :img-src="item.src"
    />
  </q-carousel>
</template>

<script lang="ts">
import { cImages } from "@/api/mock_carousel";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "app-home-carousel",

  setup() {
    const slide = ref(0);
    const autoplay = ref(true);
    const images = ref(cImages);

    return { slide, autoplay, images };
  },
});
</script>
