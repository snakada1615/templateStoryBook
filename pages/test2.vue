<script setup lang="ts">
import TestVue from "~/components/atoms/testVue.vue";
</script>

<template>
  <div id="app">
    <q-btn color="secondary" class="q-mx-md">
      <NuxtLink to="/vueTypes"> vueTypes </NuxtLink>
    </q-btn>
    <q-btn color="secondary" class="q-mx-md">
      <NuxtLink to="/"> index </NuxtLink>
    </q-btn>
    <test-vue :task="{ id: 'hiroto', state: false, title: 'hey guys' }" />
  </div>
</template>
