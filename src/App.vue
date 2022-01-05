<template>
  <router-view />
  <AddToHomeScreen />
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { defineComponent, watch } from "vue";
import useUpdate from "./utils/useUpdate";
import AddToHomeScreen from "@/components/AddToHomeScreen.vue";

export default defineComponent({
  name: "App",

  components: { AddToHomeScreen },

  setup() {
    const $q = useQuasar();
    const { updateExists, refreshApp } = useUpdate();

    watch(updateExists, (value) => {
      if (value) {
        $q.notify({
          message: "An update is available",
          color: "primary",
          timeout: 0,
          actions: [
            {
              label: "Update",
              color: "white",
              handler: refreshApp,
            },
          ],
        });
      }
    });
    return {};
  },
});
</script>
