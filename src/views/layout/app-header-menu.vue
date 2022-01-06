<template>
  <q-btn-dropdown flat :label="menu.name" v-if="menu.tabs">
    <q-list>
      <template v-for="(tab, i) in menu.tabs" :key="i">
        <q-btn-dropdown
          flat
          no-caps
          :label="tab.name"
          v-if="tab.subitems"
          class="sub-menu-dropdown"
        >
          <q-list>
            <template v-for="(subitem, j) in tab.subitems" :key="j">
              <q-item clickable :to="tab.subitem">
                <q-item-section>{{ subitem.name }}</q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-btn-dropdown>
        <q-item clickable :to="tab.link" v-else>
          <q-item-section>{{ tab.name }}</q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-btn-dropdown>
  <q-btn flat :label="menu.name" v-else>
    <router-link
      exact
      :to="menu.link"
      class="absolute full-width full-height"
    ></router-link>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-header-menu",

  props: {
    menu: { required: true },
  },
});
</script>
<style scoped>
.sub-menu-dropdown {
  width: 100%;
  font-weight: 400;
}
.justify-center {
  justify-content: space-between !important;
}
</style>
