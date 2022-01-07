<template>
  <div class="q-pa-lg">
    <h5 class="text-center text-primary text-bold q-py-md">
      AGENTS RECOMMENDED
    </h5>
    <div class="row q-px-xl">
      <div
        class="col-md-4 q-px-lg q-mb-lg"
        v-for="(item, i) in agents"
        :key="i"
      >
        <app-home-agent-card :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Agent_Lists } from "@/api/mock_agents";
import appHomeAgentCard from "./app-home-agent-card.vue";

export default defineComponent({
  name: "app-home-agent-card-list",

  components: { appHomeAgentCard },

  setup() {
    const agents = ref(Agent_Lists);

    return { agents };
  },
});
</script>
