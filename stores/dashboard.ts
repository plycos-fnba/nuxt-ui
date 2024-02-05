export const useDashBoardStore = defineStore("dashboard", () => {
  const dashboard = reactive({
    insufficientCoverage: undefined,
    followUpReview: undefined,
    highDeductibleReview: undefined,
    taxResearchProperties: undefined,
  });

  async function load() {
    const res = await useEscrowApi("dashboard");
    const data = await res.json();

    dashboard.insufficientCoverage = data.insufficientCoverage;
    dashboard.followUpReview = data.followUpReview;
    dashboard.highDeductibleReview = data.highDeductibleReview;
    dashboard.taxResearchProperties = data.taxResearchProperties;
  }

  return {
    dashboard,
    load,
  };
});
