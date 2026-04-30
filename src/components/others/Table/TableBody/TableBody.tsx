import React, {type FC, useState} from "react";
import type {TableColumnType, TableDataType} from "../TableExports";
import TABLE_ACCESSORS from "../constances/tableAccessors";
import TableTrExtraData from "./TableTrExtraData";
import TableTr from "./TableTr";
import TableEmptyState from "./TableEmptyState";
import DisplayWithAnimation from "../../DisplayWithAnimation/DisplayWithAnimation";
import RenderLogic from "../../RenderLogic/RenderLogic";
import TableLoading from "./TableLoading";


interface Props {
  data: TableDataType[];
  columns: TableColumnType[];
  loading?: boolean;
}

const TableBody: FC<Props> = ({data, columns, loading}) => {

  const [openExtraTableDataRow, setOpenExtraTableDataRow] = useState<TableDataType['id'] | null>(null)


  function toggleRow(rowId: TableDataType['id']) {
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
      columnsLength={columns.length}
      hasActionsColumn={columns.some(column => column.accessor === TABLE_ACCESSORS.TD_ACTIONS_ACCESSOR)}
    />
  )

  return (
    <RenderLogic
      isEmpty={data?.length == 0 || !data} emptyElement={emptyElement} loadingElement={loadingElement}
      isLoading={loading}
    >
      <tbody className="bg-white overflow-x-auto">
        {data?.map((row, index) => {

          const isLast = index === data.length - 1;
          const extraTableData = row[TABLE_ACCESSORS.TD_EXTRA_TABLE_DATA_ACCESSOR]
          const hasExtraTableData = Boolean(extraTableData)
          const extraTableDataIsOpen = openExtraTableDataRow === row.id

          return (
            <>
              <TableTr
                key={row.id} columns={columns} row={row} isLast={isLast}
                hasExtraTableData={hasExtraTableData} extraTableDataIsOpen={extraTableDataIsOpen}
                toggleRow={() => toggleRow(row.id)}
              />

              {(hasExtraTableData) && (
                <td colSpan={columns.length}>
                  <DisplayWithAnimation
                    show={extraTableDataIsOpen} expandMode
                  >
                    <TableTrExtraData
                      items={extraTableData}
                      columnLength={columns.length}
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
