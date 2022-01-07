<template>
  <q-card>
    <q-img :src="item.src" height="200px" />
    <q-card-section class="q-mt-md">
      <p class="text-secondary agent-title">
        {{ item.location }}
      </p>
    </q-card-section>
    <q-card-section>
      <div class="row">
        <div class="col-md-8">
          <p class="price">{{ item.price }}</p>
        </div>
        <div class="col-md-4">
          <p>
            <q-avatar size="md">
              <img :src="item.avatar" />
            </q-avatar>
            <span class="q-ml-md">Evan You</span>
          </p>
        </div>
        <div class="col-12">
          <q-toggle
            v-model="value"
            :label="value ? 'Read Less' : 'Read More'"
          />
        </div>
      </div>
    </q-card-section>
    <q-slide-transition>
      <div v-show="value">
        <div class="row q-pa-md">
          <div class="col-12 q-mb-md"><q-separator /></div>
          <div class="col-12">
            <p class="q-mb-xs"><strong>Area:</strong> {{ item.area }}</p>
          </div>
          <div class="col-12">
            <p class="q-mb-xs"><strong>Rooms:</strong> {{ item.rooms }}</p>
          </div>
          <div class="col-12">
            <p class="q-mb-xs">
              <strong>Bathroom:</strong> {{ item.bathroom }}
            </p>
          </div>
          <div class="col-12">
            <p class="q-mb-xs"><strong>Reference #</strong> {{ item.ref }}</p>
          </div>
        </div>
      </div>
    </q-slide-transition>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "app-home-agent-card",

  props: {
    item: {
      required: true,
    },
  },

  setup() {
    const value = ref(false);

    return { value };
  },
});
</script>

<style scoped>
.agent-title {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 0px;
}
.price {
  font-size: 18px;
  font-weight: 500;
}
</style>
