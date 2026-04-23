import React from "react";
import TableBody from "./TableBody/TableBody";
import TableHead, {type TableHeadProps} from "./TableHead/TableHead";
import type {TableProps} from "./TableExports";


type Props = TableProps & Pick<TableHeadProps, 'sort' | 'setSort'>

const Table = (
  {data, columns, loading, sort, setSort}: Props
) => {
  return (
    <div className="relative overflow-x-auto w-full border border-gray-300 rounded-lg">
      <table className="w-full overflow-hidden">
        <TableHead columns={columns} sort={sort} setSort={setSort} />
        <TableBody columns={columns} data={data} loading={Boolean(loading)}/>
      </table>
    </div>
  );
};

export default Table;
