import type {TableProps} from "../../../../../components/others/Table/TableExports.ts";
import Table from "../../../../../components/others/Table/Table.tsx";
import {PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS} from "./index.constances.ts";

function PanelEconomicInformationPageSecondarySourceOfIncomeTable(
  {data, loading}: Pick<TableProps<any>, 'data' | 'loading'>
) {
  return (
    <Table
      columns={PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
      data={data} loading={loading}
    />
  );
}

export default PanelEconomicInformationPageSecondarySourceOfIncomeTable;
