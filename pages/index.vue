<script setup lang="ts"></script>

<template>
  <div id="app">
    <q-btn color="primary" class="q-mx-lg-md">
      <div>Primary</div>
      <NuxtLink to="/"> top </NuxtLink>
    </q-btn>
    <q-btn color="secondary" class="q-mx-lg-md">
      <div>Secondary</div>
      <NuxtLink to="/vueTypes"> vueTypes </NuxtLink>
    </q-btn>
    <q-btn color="amber" class="q-mx-lg-md">
      <div>Tertiary</div>
      <NuxtLink to="/test2"> test2</NuxtLink>
    </q-btn>
  </div>
</template>
