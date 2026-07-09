import {PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS} from "./index.legal.constances.ts";
import {PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS} from "./index.contances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import type {TableProps} from "../../../../../components/others/Table/TableExports.ts";

function PanelEconomicInformationPageEconomicActivityTable(
  {data, loading}: Pick<TableProps<any>, 'data' | 'loading'>
) {

  const {isLegalBool} = getActivePersonData()

  return (
    <Table
      columns={
        isLegalBool ? PANEL_ECONOMIC_ACTIVITY_LEGAL_INFORMATION_TABLE_COLUMNS : PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS
      }
      data={data} loading={loading}
    />
  );
}

export default PanelEconomicInformationPageEconomicActivityTable;
