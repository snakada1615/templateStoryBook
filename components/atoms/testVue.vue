<template>
  <div class="list-item">
    {{ task.state }}
    {{ task.title }}
    {{ task.id }}
    <label for="title" :aria-label="task.title">
      <input id="title" type="text" readonly :value="task.title" />
    </label>
  </div>
  <div class="q-pa-md">
    <q-btn color="primary" label="Primary" class="q-ma-md" />
    <q-btn color="secondary" label="Secondary" class="q-ma-md" />
    <q-btn color="amber" glossy label="Amber" />
    <q-card
      class="my-card text-white q-ma-md"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div>this is a test</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  task: {
    type: Object,
    required: true,
    validator: (task) => ["id", "state", "title"].every((key) => key in task),
  },
});
</script>
