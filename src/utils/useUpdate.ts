/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from "vue";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function () {
  const refreshing = ref(false);
  const registration = ref<any>(null);
  const updateExists = ref(false);

  // Store the SW registration so we can send it a message
  // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
  // To alert the user there is an update they need to refresh for
  function updateAvailable(event: any) {
    registration.value = event.detail;
    updateExists.value = true;
  }

  // Called when the user accepts the update
  function refreshApp() {
    updateExists.value = false;
    // Make sure we only send a 'skip waiting' message if the SW is waiting
    if (!registration.value || !registration.value.waiting) return;
    // send message to SW to skip the waiting and activate the new SW
    registration.value.waiting.postMessage({ type: "SKIP_WAITING" });
  }

  // Listen for our custom event from the SW registration
  document.addEventListener("swUpdated", updateAvailable, { once: true });

  // Prevent multiple refreshes
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing.value) return;
    refreshing.value = true;
    // Here the actual reload of the page occurs
    window.location.reload();
  });

  return { updateExists, refreshApp };
}
