<script lang="ts" setup>
import { arrayOf, instanceOf } from "vue-types";
import ListItem from "./ListItem.vue";
import { QaList } from "~/types";

defineProps({
  list: arrayOf(ListItem),
  qaList: instanceOf(QaList),
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
      {{
        qaList
      }}
    </ul>
  </div>
</template>
