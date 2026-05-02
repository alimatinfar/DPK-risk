import React from "react";
import TableBody from "./TableBody/TableBody";
import TableHead, { type TableHeadProps } from "./TableHead/TableHead";
import type { TableColumnType, TableProps } from "./TableExports";

function Table<TColumns extends readonly TableColumnType[]>(
  {
    data, columns, loading, sort, setSort
  }: TableProps<TColumns> & Pick<TableHeadProps, "sort" | "setSort">
) {
  return (
    <div className="relative overflow-x-auto w-full border border-gray-300 rounded-lg">
      <table className="w-full overflow-hidden">
        <TableHead columns={columns} sort={sort} setSort={setSort} />
        <TableBody columns={columns} data={data} loading={Boolean(loading)} />
      </table>
    </div>
  );
}

export default Table;
