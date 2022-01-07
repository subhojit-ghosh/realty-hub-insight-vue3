<template>
  <q-card flat class="form-card">
    <div class="row">
      <div class="col-12 text-center">
        <p class="title">Find your Property</p>
        <q-btn-toggle
          v-model="toggle"
          toggle-color="primary"
          :options="[
            { label: 'Rent', value: 'rent' },
            { label: 'Buy', value: 'buy' },
          ]"
        />
      </div>
    </div>
    <div class="row q-mt-lg">
      <div class="col-12 q-py-sm">
        <q-btn
          color="white"
          text-color="black"
          class="full-width"
          label="Select your area"
        />
      </div>
      <div class="col-12 q-pb-sm">
        <q-select
          bg-color="white"
          outlined
          dense
          :options="['10-40 K', '40-70 K', '70-100 K', '100-130 K']"
          label="Rental"
        />
      </div>
      <div class="col-6 q-pb-sm q-pr-sm">
        <q-select
          bg-color="white"
          outlined
          dense
          :options="['10-40 K', '40-70 K', '70-100 K', '100-130 K']"
          label="Beedroom"
        />
      </div>
      <div class="col-6 q-pb-sm q-pl-sm">
        <q-select
          bg-color="white"
          outlined
          dense
          :options="['10-40 K', '40-70 K', '70-100 K', '100-130 K']"
          label="Bathroom"
        />
      </div>
      <div class="col-6 q-pb-sm q-pr-sm">
        <q-select
          bg-color="white"
          outlined
          dense
          :options="['10-40 K', '40-70 K', '70-100 K', '100-130 K']"
          label="Beedroom"
        />
      </div>
      <div class="col-6 q-pb-sm q-pl-sm">
        <q-select
          bg-color="white"
          outlined
          dense
          :options="['10-40 K', '40-70 K', '70-100 K', '100-130 K']"
          label="Bathroom"
        />
      </div>
      <div class="col-12 q-pb-sm">
        <q-input
          bg-color="white"
          outlined
          dense
          label="Building Name or Property No."
        />
      </div>
      <div class="col-12 q-pb-sm">
        <q-btn
          color="primary"
          icon="search"
          label="Search"
          class="full-width"
        />
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "app-home-carousel-form",

  setup() {
    const toggle = ref("rent");

    return { toggle };
  },
});
</script>

<style scoped>
.form-card {
  position: relative;
  right: 15% !important;
  background-color: rgba(179, 182, 187, 0.64);
  height: 437px;
  width: 330px;
  padding: 16px;
}
.title {
  font-weight: bold;
  font-size: 16px;
  padding-top: 14px;
}
</style>
