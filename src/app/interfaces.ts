interface Table {
  id: number;
  name: string;
  lines: Line[];
}

interface Line {
  value: string;
  comment?: CellAddOn;
  task?: CellAddOn;
  review?: CellAddOn;
}

interface CellAddOn {
  user: string;
  status: number;
}

export { Table, CellAddOn, Line };
