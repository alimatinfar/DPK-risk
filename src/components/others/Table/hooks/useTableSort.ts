import {useState} from "react";
import {TABLE_COLUMN_SORT_KEYS, type TableColumnSortType} from "../TableExports.ts";


export type TableSortStateType = {
  accessor: null | string;
  type: TableColumnSortType;
}

function useTableSort() {

  const [tableSort, setTableSort] = useState<TableSortStateType>({
    accessor: null, type: TABLE_COLUMN_SORT_KEYS.DEFAULT
  })

  return {
    tableSort, setTableSort
  }
}

export default useTableSort;