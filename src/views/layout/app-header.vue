<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar class="q-pa-md">
      <q-space />
      <q-btn flat icon="mdi-home-assistant" to="/"></q-btn>
      <div v-for="(menu, i) in menu" :key="'category_' + i">
        <app-header-menu :menu="menu" />
      </div>
      <q-btn flat icon="mdi-phone"></q-btn>
      <q-btn flat icon="mdi-heart"></q-btn>
      <q-btn flat icon="mdi-magnify"></q-btn>
      <q-space />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Menu } from "@/api/mock_appbar_subitem";
import appHeaderMenu from "./app-header-menu.vue";

export default defineComponent({
  name: "app-header",

  components: { appHeaderMenu },

  setup() {
    const menu = ref(Menu);

    return { menu };
  },
});
</script>
