<script lang="ts" setup>
import { integer, number, string } from "vue-types";
import Availability from "./AvailabilityStatus.vue";
import { statusType } from "~/types";
defineProps({
  id: integer().isRequired,
  description: string().isRequired,
  price: number().isRequired,
  status: statusType(),
});
</script>
<template>
  <li>
    {{ id }} - {{ description }} - $ {{ price }} (<Availability
      :status="status ?? null"
    />)
  </li>
</template>
