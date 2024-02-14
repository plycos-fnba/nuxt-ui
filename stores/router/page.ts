export const usePageStore = defineStore("page", () => {
  const pageParam = useRouteQuery("page", 1, { transform: Number });
  const page = computed(() => pageParam.value);

  const totalPageCount = ref(0);

  function changePage(pageNum: number) {
    pageParam.value = pageNum;
  }

  function $reset() {
    pageParam.value = 1;
    totalPageCount.value = 0;
  }

  return {
    page,
    totalPageCount,
    changePage,
    $reset,
  };
});
