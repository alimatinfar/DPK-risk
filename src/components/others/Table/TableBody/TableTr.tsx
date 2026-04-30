import TableTd from "./TableTd";
import React from "react";
import type {TableColumnType} from "../TableExports";
import ArrowIcon from "../../../svg/ArrowIcon";
import IconClickable from "../../Icon/IconClickable";


export type TableTrProps = {
  isLast: boolean;
  columns: TableColumnType[];
  row: any;
  hasExtraTableData: boolean;
  toggleRow: () => void;
  extraTableDataIsOpen: boolean;
}

function TableTr(
  {isLast, columns, row, hasExtraTableData, toggleRow, extraTableDataIsOpen}: TableTrProps
) {
  return (
    <tr
      className={isLast ? '' : 'border-b border-gray-300'}
    >
      {columns.map(({accessor, renderType, tdWidth}, index) => {
        const tdData =
          row[accessor] == null || row[accessor] === ""
            ? "-"
            : row[accessor];

        const isFirstColumn = index === 0;

        const tableTd = (
          <TableTd
            {...(renderType && {renderType})}
            tdData={tdData}
            data={row}
          />
        )

        return (
          <td key={accessor} className={`p-2 ${tdWidth} text-sm text-gray-900 text-right`}>
            {(isFirstColumn && hasExtraTableData) ? (
              <div className='flex items-center'>
                <IconClickable className='ml-2' onClick={toggleRow}>
                  <ArrowIcon className={extraTableDataIsOpen ? 'rotate-180' : ''}/>
                </IconClickable>

                {tableTd}
              </div>
            ) : tableTd}
          </td>
        );
      })}
    </tr>
  )
}

export default TableTr