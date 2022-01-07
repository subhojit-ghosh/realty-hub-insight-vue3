<template>
  <div class="banner-card">
    <div class="content">
      <q-img class="slider-ribbon" :src="banner.src" />
      <app-home-carousel-form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import appHomeCarouselForm from "./app-home-carousel-form.vue";

export default defineComponent({
  name: "app-home-carousel-content",

  components: { appHomeCarouselForm },

  setup() {
    const banner = ref({
      src: require("@/assets/img/ribbon.png"),
    });
    return { banner };
  },
});
</script>

<style scoped>
.banner-card {
  position: absolute;
  width: 100%;
  top: 120px;
}
.content {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.slider-ribbon {
  left: 50px;
  max-width: 140px;
  max-height: 560px;
}
</style>
