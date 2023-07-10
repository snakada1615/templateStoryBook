<script setup lang="ts">
import { ref } from "vue";
import TestVue from "~/components/atoms/testVue.vue";
const languages = [
  { label: "English", value: "en" },
  { label: "日本語", value: "ja" },
];
const currentLanguage = ref({ label: "English", value: "en" });
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
    <q-select
      v-model="currentLanguage"
      :options="languages"
      label-color="white"
      filled
      :dense="true"
      :options-dense="true"
      bg-color="green"
      style="max-width: 530px"
      @update:model-value="$i18n.locale = $event.value"
    />
    <div class="q-mt-md q-gutter-md">
      <q-icon name="font_download" color="primary" size="32px" />
      <q-icon name="warning" color="warning" size="4rem" />
      <q-icon name="format_size" style="color: #ccc; font-size: 1.4em" />
      <q-icon name="print" color="teal" size="4.4em" />
      <q-icon name="today" class="text-orange" size="2em" />
      <q-icon name="style" size="3em" />
    </div>
    <div class="text-h4">{{ $t("hello") }}</div>
    <div class="text-h4">{{ $t("pages.privacy") }}</div>
    <div>current language is {{ $i18n.locale }}</div>
    <test-vue :task="{ id: 'hiroto', state: false, title: 'hey guys' }" />
  </div>
</template>
