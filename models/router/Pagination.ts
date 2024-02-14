export class Pagination {
  totalPageCount: number;
  totalCount: number;

  constructor(totalPageCount: number, totalCount: number = 0) {
    this.totalPageCount = totalPageCount;
    this.totalCount = totalCount;
  }
}
