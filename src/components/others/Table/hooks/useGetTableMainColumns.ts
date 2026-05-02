import {useMemo} from "react";
import TABLE_RENDER_TYPES from "../constances/renderTypes.ts";
import type {TableColumnType, TableProps} from "../TableExports.ts";


type Props = {
  columns: readonly TableColumnType[];
}

function useGetTableMainColumns(
  {columns}: Props
) {

  const mainColumns = useMemo(function () {
    return columns.filter(column => column.renderType !== TABLE_RENDER_TYPES.EXTRA_COLUMN)
  }, [columns])

  return {
    mainColumns
  }
}

export default useGetTableMainColumns;