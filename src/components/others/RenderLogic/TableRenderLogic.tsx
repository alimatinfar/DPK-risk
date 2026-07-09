import RenderLogic, {type RenderLogicProps} from "./RenderLogic.tsx";
import type {TableProps} from "../Table/TableExports.ts";
import Table from "../Table/Table.tsx";

type Props = {
  renderLogicProps: Omit<RenderLogicProps, 'children'>;
  tableProps: TableProps<any>;
}

function TableRenderLogic(
  {renderLogicProps, tableProps}: Props
) {
  return (
    <RenderLogic
      isEmpty={tableProps?.data?.length === 0}
      removeContainer
      loadingElement={<Table data={[]} columns={tableProps.columns} loading />}
      {...renderLogicProps}
    >
      <Table {...tableProps} />
    </RenderLogic>
  );
}

export default TableRenderLogic;
