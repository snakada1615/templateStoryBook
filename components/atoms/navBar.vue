<script setup></script>
import { thumb_up } from '@quasar/extras/material-icons'

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-bar dense class="bg-teal text-white">
      <q-icon :name="font_download" class="text-white" />
      <div>nfa app</div>
      <q-space />
      <q-icon name="near_me" />
      <q-icon name="signal_cellular_alt" size="2em" />
    </q-bar>
  </div>
</template>
