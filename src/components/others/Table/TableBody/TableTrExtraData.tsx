import type {TableColumnType, TableDataType} from "../TableExports.ts";
import {type ReactNode, useMemo} from "react";
import TABLE_RENDER_TYPES from "../constances/renderTypes.ts";


export type TableTrExtraDataProps = {
  row: TableDataType<any>;
  columns: readonly TableColumnType[];
}

function TableTrExtraData({row, columns}: TableTrExtraDataProps) {

  const extraColumns = useMemo(function () {
    return columns.filter(column => column.renderType === TABLE_RENDER_TYPES.EXTRA_COLUMN)
  }, [])

  return (
    <div className={`p-4 bg-gray-50 grid grid-cols-5 gap-x-4 gap-y-8`}>
      {extraColumns.map(column => (
        <div
          key={column.accessor}
          className='flex flex-col gap-y-2 text-sm border-r border-gray-300 px-4'
        >
          <span className='text-gray-500'>
            {column.label}
          </span>
          <span className='text-gray-900'>
            {row[column.accessor] as ReactNode || '-'}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TableTrExtraData