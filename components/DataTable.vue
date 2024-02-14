<template>
  <UTable
    ref="table"
    :columns="columns"
    :rows="rows"
    @update:sort="(e) => console.log(e)"
    sort-mode="manual"
    :sort="sort"
  />
</template>

<script lang="ts" setup>
import type { Column } from "~/models/table/Column";

const props = defineProps<{
  columns: Column[];
  rows: any[];
}>();

const table = ref<any>();
const sort = ref<any>({
  column: 'name',
  direction: 'asc'
});

watch(
  () => sort.value,
  () => {
    console.log("sort", sort.value)
  }
)

const columns = props.columns.map((column) => {
  return {
    key: column.key,
    label: column.label,
    sortable: column.sortable,
  };
});
</script>
