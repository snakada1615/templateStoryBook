<script>
import {
  matHome,
  matAccountCircle,
  matMenu,
} from "@quasar/extras/material-icons";
export default {
  setup() {
    return {
      matHome,
      matAccountCircle,
      matMenu,
    };
  },
};
</script>
<template>
  <div class="q-pa-md q-gutter-sm">
    <q-bar class="bg-teal text-white">
      <q-btn dense flat to="/">
        <div class="q-px-md">
          <q-icon :name="matHome" />
          nfa-app
        </div>
      </q-btn>
      <q-space />
      <div>100%</div>
      <div class="cursor-pointer non-selectable">
        <q-icon :name="matMenu" />
        <q-menu>
          <q-list dense style="min-width: 100px">
            <q-item v-close-popup clickable>
              <q-item-section>Open...</q-item-section>
            </q-item>
            <q-item v-close-popup clickable>
              <q-item-section>New</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </div>
      <q-icon :name="matAccountCircle" />
    </q-bar>
  </div>
</template>
