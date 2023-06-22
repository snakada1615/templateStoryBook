<template>
  <div class="list-item">
    {{ task.state }}
    {{ task.title }}
    {{ task.id }}
    <label for="title" :aria-label="task.title">
      <input id="title" type="text" readonly :value="task.title" />
    </label>
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
