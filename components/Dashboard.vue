<script lang="ts" setup>
const { dashboard, load } = useDashBoardStore();

const dashboardCards = computed(() => [
  {
    title: "Insufficient Coverage",
    count: dashboard.insufficientCoverage,
    route: "/",
    description:
      "Due to either the lack of information from our borrowers or through the expiration of current policies, our collateral might not be sufficient covered by hazard insurance policies.",
  },
  {
    title: "High Deductible Review",
    count: dashboard.highDeductibleReview,
    route: "/hello",
    description:
      "Some insurance policies are created with exceptionally high deductibles. The policies need to be reviewed to make sure our collateral is sufficiently protected.",
  },
  {
    title: "Tax Research Properties",
    count: dashboard.taxResearchProperties,
    route: "/",
    description:
      "Properties are typically taxed. If First National Bank of America is not paying those taxes, they can go unpaid and compromise the security of the collateral.",
  },
  {
    title: "Tax Follow-Ups",
    count: dashboard.followUpReview,
    route: "/",
    description:
      "Non-escrowed properties that are found to have taxes that have not been paid, whether they be delinquent, unconfirmed, on a payment plan, etc., need to be re-reviewed until the taxes are paid.",
  },
]);

onBeforeMount(() => load());
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center gap-4 p-4">
    <UCard v-for="card in dashboardCards" :key="card.title" class="w-[450px]">
      <template #header>
        <div class="flex items-center justify-between">
          <span class="font-semibold">{{ card.title }}</span>
          <UButton color="white" label="View All" @click="useNavigate(card.route)" />
        </div>
      </template>

      <div
        class="text-xl font-medium flex justify-center align-middle h-[25px] text-fnba-green-600"
      >
        <TransitionFade>
          <div :key="card.count">{{ card.count ?? "..." }}</div>
        </TransitionFade>
      </div>

      <template #footer>
        {{ card.description }}
      </template>
    </UCard>
  </div>
</template>
