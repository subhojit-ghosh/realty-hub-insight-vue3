<template>
  <q-layout view="hhh lpR fff">
    <app-header />
    <app-content />
    <app-footer />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appHeader from "./app-header.vue";
import appContent from "./app-content.vue";
import appFooter from "./app-footer.vue";

export default defineComponent({
  name: "app-layout",

  components: { appHeader, appContent, appFooter },
});
</script>
