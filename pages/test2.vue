<script setup lang="ts">
import TestVue from "~/components/atoms/testVue.vue";
</script>

<template>
  <div id="app">
    <div class="text-h4">
      {{ $t("apple") }}
    </div>
    <q-btn color="primary" class="q-mx-lg-md" to="/" label="Top" />
    <q-btn
      color="secondary"
      class="q-mx-lg-md"
      to="/vueTypes"
      label="vueTypes"
    />
    <test-vue :task="{ id: 'hiroto', state: false, title: 'hey guys' }" />
  </div>
</template>
