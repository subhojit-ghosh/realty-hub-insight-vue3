<template>
  <span></span>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "app-add-to-home-screen",

  setup() {
    const $q = useQuasar();
    const deferredPrompt = ref(null);

    function captureEvent() {
      window.addEventListener("beforeinstallprompt", (e) => {
        // ! Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt.value = e;
        $q.notify({
          message: "Add To Homescreen",
          color: "primary",
          timeout: 0,
          actions: [
            { label: "Add", color: "yellow", handler: clickCallback },
            {
              label: "Dismiss",
              color: "white",
            },
          ],
        });
      });
    }

    function clickCallback() {
      // Show the prompt
      deferredPrompt.value.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.value.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          // Call another function?
        }
        deferredPrompt.value = null;
      });
    }

    onMounted(() => {
      captureEvent();
    });

    return {};
  },
});
</script>
