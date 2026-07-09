import React, {type FC, useMemo, useState} from "react";
import type {TableColumnType, TableDataType} from "../TableExports";
import TABLE_ACCESSORS from "../constances/tableAccessors";
import TableTrExtraData from "./TableTrExtraData";
import TableTr from "./TableTr";
import TableEmptyState from "./TableEmptyState";
import DisplayWithAnimation from "../../DisplayWithAnimation/DisplayWithAnimation";
import RenderLogic from "../../RenderLogic/RenderLogic";
import TableLoading from "./TableLoading";
import TABLE_RENDER_TYPES from "../constances/renderTypes.ts";


interface Props {
  data: TableDataType<any>[];
  columns: readonly TableColumnType[];
  loading?: boolean;
}

const TableBody: FC<Props> = ({data, columns, loading}) => {

  const [openExtraTableDataRow, setOpenExtraTableDataRow] = useState<TableDataType<any>['id'] | null>(null)


  function toggleRow(rowId: TableDataType<any>['id']) {
    setOpenExtraTableDataRow((prev: any) => {
      if (prev !== rowId) return rowId

      return null
    })
  }

  const emptyElement = (
    <TableEmptyState
      columnLength={columns.length}
    />
  )

  const loadingElement = (
    <TableLoading
      rowLength={data.length || 5}
      columnsLength={columns.filter(column => column.renderType !== TABLE_RENDER_TYPES.EXTRA_COLUMN)?.length}
      hasActionsColumn={columns.some(column => column.accessor === TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR)}
    />
  )

  const hasExtraTableData = useMemo(function () {
    return columns.some(column => column.renderType === TABLE_RENDER_TYPES.EXTRA_COLUMN)
  }, [columns])

  return (
    <RenderLogic
      isEmpty={data?.length == 0 || !data} emptyElement={emptyElement} loadingElement={loadingElement}
      isLoading={loading} removeContainer
    >
      <tbody className="bg-white overflow-x-auto">
        {data?.map((row, index) => {

          const isLast = index === data.length - 1;
          const extraTableDataIsOpen = openExtraTableDataRow === row.id
          const isEven = index % 2 === 0

          return (
            <>
              <TableTr
                key={row.id} columns={columns} row={row} isLast={isLast}
                hasExtraTableData={hasExtraTableData} extraTableDataIsOpen={extraTableDataIsOpen}
                toggleRow={() => toggleRow(row.id)} isEven={isEven}
              />

              {(hasExtraTableData) && (
                <td colSpan={columns.length}>
                  <DisplayWithAnimation
                    show={extraTableDataIsOpen} expandMode
                  >
                    <TableTrExtraData
                      row={row}
                      columns={columns}
                      isLast={isLast}
                    />
                  </DisplayWithAnimation>
                </td>
              )}
            </>
          )
        })}
      </tbody>
    </RenderLogic>
  );
};

export default TableBody;
