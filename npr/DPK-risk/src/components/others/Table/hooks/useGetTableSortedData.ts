import {useMemo} from "react";
import {TABLE_COLUMN_SORT_KEYS} from "../TableExports.ts";
import type {TableSortStateType} from "./useTableSort.ts";


export type UseGetTableSortedDataProps<ItemType> = {
  data: any[];
  sort: TableSortStateType;
  sortItemsValue: Record<any, ((item: ItemType) => any)>;
}

function useGetTableSortedData<ItemType>(
  {data, sort, sortItemsValue}: UseGetTableSortedDataProps<ItemType>
) {

  const tableSortedData = useMemo(function () {

    if (sort.type === TABLE_COLUMN_SORT_KEYS.DEFAULT) return data

    let finalData = data

    Object.entries(sortItemsValue).forEach(([accessor, getItemHandler]) => {
      if (sort.accessor === accessor) {
        finalData = [...data].sort((a, b) => {
          let returnValue = 0
          if (getItemHandler(b) < getItemHandler(a)) returnValue = -1;
          if (getItemHandler(b) > getItemHandler(a)) returnValue = 1;
          return returnValue * (sort.type === TABLE_COLUMN_SORT_KEYS.ASCENDING ? 1 : -1);
        })
      }
    })

    return finalData
  }, [data, sort, sortItemsValue])

  return {
    tableSortedData
  }
}

export default useGetTableSortedData;