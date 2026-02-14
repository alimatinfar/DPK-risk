export interface IFilterTableProps {
  originalColumns: IOriginalColumn[];
  visibleColumns: string[];
  toggleColumnVisibility: (col: string) => void;
  filters: {[key: string]: any};
  handleFilterChange: (col: string, value: string) => void;
  resetFilters: () => void;
  onClose: () => void;
};

export interface IOriginalColumn {
    field: string;
    header: string;
}