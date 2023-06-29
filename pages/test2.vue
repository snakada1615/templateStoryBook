<script setup lang="ts">
import TestVue from "~/components/atoms/testVue.vue";
</script>

<template>
  <div id="app">
    <q-btn color="primary" class="q-mx-lg-md" to="/" label="Top" />
    <q-btn
      color="secondary"
      class="q-mx-lg-md"
      to="/vueTypes"
      label="vueTypes"
    />
    <div class="q-mt-md q-gutter-md">
      <q-icon name="font_download" color="primary" size="32px" />
      <q-icon name="warning" color="warning" size="4rem" />
      <q-icon name="format_size" style="color: #ccc; font-size: 1.4em" />
      <q-icon name="print" color="teal" size="4.4em" />
      <q-icon name="today" class="text-orange" size="2em" />
      <q-icon name="style" size="3em" />
    </div>
    <test-vue :task="{ id: 'hiroto', state: false, title: 'hey guys' }" />
  </div>
</template>
