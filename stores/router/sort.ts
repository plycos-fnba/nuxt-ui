import { SortItem } from "~/models/router/SortItem";

export const useSortStore = defineStore("sort", () => {
	const sortParam = useRouteQuery("sort", "", { transform: String });
	const sort = computed(() => (sortParam.value ?? ""));
	const sortList = computed<SortItem[]>(() => {
		if (sort.value === "") return [];
		return sort.value.split(",").map((s) => SortItem.fromQueryParam(s));
	});

	function sortChange(col: { order: "ascending" | "descending" | null; prop: string }) {
		let sorts = sortList.value;

		const sortListCol = sorts.find((s) => s.col === col.prop);

		if (!col.order) {
			sorts = sorts.filter((s) => s !== sortListCol);
		} else if (sortListCol) {
			sortListCol.dir = col.order === "ascending" ? "ASC" : "DESC";
		} else {
			sorts.push(new SortItem(col.prop, col.order === "ascending" ? "ASC" : "DESC"));
		}

		sortParam.value = sorts.map((s) => s.toQueryParam()).join(",");
	}

	function flipSortDir(col: SortItem) {
		let sorts = sortList.value;
		const sortListCol = sorts.find((s) => s.col === col.col)!;
		sortListCol.dir = sortListCol.dir === "ASC" ? "DESC" : "ASC";
		sortParam.value = sorts.map((s) => s.toQueryParam()).join(",");
	}

	function removeSort(col: string) {
		sortParam.value = sortList.value
			.filter((s) => s.col !== col)
			.map((s) => s.toQueryParam())
			.join(",");
	}

	function clearSorts() {
		sortParam.value = "";
	}

	return {
		sortList,
		sortChange,
		flipSortDir,
		removeSort,
		clearSorts,
	};
});
