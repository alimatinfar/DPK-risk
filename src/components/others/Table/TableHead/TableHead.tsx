import {type FC} from "react";
import {TABLE_COLUMN_SORT_KEYS, type TableColumnSortType, type TableColumnType} from "../TableExports";
import TableSort from "../../../svg/TableSort.tsx";
import type {TableSortStateType} from "../hooks/useTableSort.ts";
import type {SetStateType} from "../../../../types/SetStateType.ts";

export type TableHeadProps = {
  columns: TableColumnType[];
  sort?: TableSortStateType;
  setSort?: SetStateType<TableSortStateType>;
}

const TableHead: FC<TableHeadProps> = ({columns, sort, setSort}) => {

  function onSortHandler(accessor: TableColumnType['accessor']) {
    const states: TableColumnSortType[] = [
      TABLE_COLUMN_SORT_KEYS.DEFAULT,
      TABLE_COLUMN_SORT_KEYS.ASCENDING,
      TABLE_COLUMN_SORT_KEYS.DESCENDING
    ]

    setSort && setSort(prev => {
      const currentIndex = states.indexOf(
        accessor === prev.accessor ? prev.type : TABLE_COLUMN_SORT_KEYS.DEFAULT
      );
      const nextIndex = (currentIndex + 1) % states.length;
      const finalSort = states[nextIndex]
      return {
        accessor, type: finalSort
      };
    });
  }

  return (
    <thead>
    <tr className="h-9 bg-gray-100 border-b border-gray-300 select-none">
      {columns.map(({label, accessor, hasSort}, index) => {
        return (
          <th key={accessor} className={`h-full p-2 font-normal text-sm whitespace-nowrap text-right text-gray-700`}>
            {(sort && setSort && hasSort) ? (
              <div className='flex items-center space-x-1'>
                <span>{label}</span>

                <TableSort
                  sort={sort.accessor === accessor ? sort.type : TABLE_COLUMN_SORT_KEYS.DEFAULT}
                  onClick={() => onSortHandler(accessor)}
                />
              </div>
            ) : label}
          </th>
        );
      })}
    </tr>
    </thead>
  );
};

export default TableHead;
