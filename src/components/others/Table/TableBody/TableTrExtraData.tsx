import type {TableColumnType, TableDataType} from "../TableExports.ts";
import {type ReactNode, useMemo} from "react";
import TABLE_RENDER_TYPES from "../constances/renderTypes.ts";


export type TableTrExtraDataProps = {
  row: TableDataType<any>;
  columns: readonly TableColumnType[];
  isLast: boolean;
}

function TableTrExtraData(
  {row, columns, isLast}: TableTrExtraDataProps
) {

  const extraColumns = useMemo(function () {
    return columns.filter(column => column.renderType === TABLE_RENDER_TYPES.EXTRA_COLUMN)
  }, [])

  return (
    <div className={`
      p-4 bg-slate-50 dark:bg-dark-1 grid grid-cols-5 gap-x-4 gap-y-8
      ${isLast ? 'border-t' : 'border-b'} border-slate-300 dark:border-dark-4
    `}>
      {extraColumns.map((column, index) => {

        const is5X = index % 5 === 0

        return (
          <div
            key={column.accessor}
            className={`
               flex flex-col gap-y-2 text-sm px-4
               ${is5X ? '' : 'border-r border-slate-300 dark:border-dark-2'}
            `}
          >
            <span className='text-slate-500 dark:text-custom-gray-3'>
              {column.label}
            </span>
            <span className='text-slate-900 dark:text-custom-gray-2'>
              {row[column.accessor] as ReactNode || '-'}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default TableTrExtraData
