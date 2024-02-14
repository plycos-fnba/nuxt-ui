<template>
  <DataTable :columns="columns" :rows="store.initialReviews" />
</template>

<script lang="ts" setup>
import { Column } from "~/models/table/Column";

const store = useTaxInitialReviewStore();

const columns = [
  new Column("collateralNumber.number", "Collateral Number", "collateralNumber"),
  new Column("accountNumber", "Account"),
  new Column("accountStatus", "Status"),
  new Column("address.street", "Street", "address"),
  new Column("address.city", "City", "city"),
  new Column("address.state", "State", "state"),
  new Column("address.county", "County", "county"),
  new Column("lastReviewDate", "Last Search"),
];

onBeforeMount(() => {
  store.load();
});
</script>
