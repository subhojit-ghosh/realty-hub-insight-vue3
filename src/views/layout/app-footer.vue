<template>
  <q-footer class="bg-primary text-white">
    <q-card dark flat class="bg-primary">
      <q-card-section class="q-my-xs text-center">
        <q-avatar
          v-for="icon in icons"
          :key="icon"
          class="q-ma-sm"
          :icon="icon"
        >
        </q-avatar>
      </q-card-section>
      <q-separator color="white" inset />
      <q-card-section class="text-center">
        <p>
          Insight Property Consultants (Statement of Particulars of Business
          Number: E-301073-A000).<br />

          ©2020 All rights reserved.<br />
        </p>
      </q-card-section>
    </q-card>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "app-footer",
  components: {},
  setup() {
    const icons = ref([
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
    ]);
    return {
      icons,
    };
  },
});
</script>
