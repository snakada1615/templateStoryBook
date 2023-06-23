<script lang="ts" setup>
import { arrayOf } from "vue-types";
import ListItem from "./ListItem.vue";

defineProps({
  list: arrayOf(ListItem),
});
</script>
<template>
  <div>
    <h4>Products list</h4>
    <ul>
      <list-item
        v-for="item in list"
        :id="item.id"
        :key="item.id"
        :description="item.description"
        :price="item.price"
        :status="item.status"
      />
    </ul>
  </div>
</template>
