import RenderLogic, {type RenderLogicProps} from "./RenderLogic.tsx";
import type {TableProps} from "../Table/TableExports.ts";
import Table from "../Table/Table.tsx";
import Pagination, {type PaginationProps} from "../Pagination/Pagination.tsx";

type Props = {
  renderLogicProps: Omit<RenderLogicProps, 'children'>;
  tableProps: TableProps<any>;
  paginationProps?: PaginationProps;
}

function TableRenderLogic(
  {renderLogicProps, tableProps, paginationProps}: Props
) {
  return (
    <RenderLogic
      isEmpty={tableProps?.data?.length === 0}
      removeContainer
      loadingElement={<Table data={[]} columns={tableProps.columns} loading/>}
      {...renderLogicProps}
    >
      <div className='flex flex-col gap-y-4'>
        <Table {...tableProps} />

        {paginationProps ? (
          <Pagination {...paginationProps} />
        ) : null}
      </div>
    </RenderLogic>
  );
}

export default TableRenderLogic;
