export class SortItem {
  public col: string;
  public dir: "ASC" | "DESC";

  constructor(col: string, dir: "ASC" | "DESC") {
    this.col = col;
    this.dir = dir;
  }

  toQueryParam(): string {
    return this.col + encodeURI("+") + this.dir;
  }

  static fromQueryParam(queryParam: string): SortItem {
    const [col, dir] = queryParam.split("+");
    return new SortItem(col, dir as "ASC" | "DESC");
  }
}
