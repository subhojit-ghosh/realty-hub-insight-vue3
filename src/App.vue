<template>
  <app-layout />
  <app-add-to-home-screen />
</template>

<script lang="ts">
import { useQuasar } from "quasar";
import { defineComponent, watch } from "vue";
import useUpdate from "@/utils/useUpdate";
import appAddToHomeScreen from "@/components/app-add-to-home-screen.vue";
import appLayout from "@/views/layout/app-layout.vue";

export default defineComponent({
  name: "App",

  components: { appAddToHomeScreen, appLayout },

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
