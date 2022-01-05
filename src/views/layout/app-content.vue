<template>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-content",
});
</script>
