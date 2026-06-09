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
      p-4 bg-gray-50 grid grid-cols-5 gap-x-4 gap-y-8
      ${isLast ? 'border-t' : 'border-b'} border-gray-300
    `}>
      {extraColumns.map((column, index) => {

        const is5X = index % 5 === 0

        return (
          <div
            key={column.accessor}
            className={`
               flex flex-col gap-y-2 text-sm px-4
               ${is5X ? '' : 'border-r border-gray-300'}
            `}
          >
            <span className='text-gray-500'>
              {column.label}
            </span>
            <span className='text-gray-900'>
              {row[column.accessor] as ReactNode || '-'}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default TableTrExtraData
