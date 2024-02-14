export class Column {
  key: string;
  label: string;
  col?: string;
  sortable?: boolean = true;
  direction?: string;

  constructor(
    key: string,
    label: string,
    col?: string,
    sortable?: boolean,
    direction?: string
  ) {
    this.key = key;
    this.label = label;
    this.col = col ?? key;
    if (sortable) {
      this.sortable = sortable;
    }
    if (direction) {
      this.direction = direction;
    }
  }
}
