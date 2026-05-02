import React from 'react';
import Table from "../../../../components/others/Table/Table.tsx";
import {
  PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS,
  PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_FAKE_DATA
} from "./index.constances.ts";

function PanelEconomicInformationPageSecondarySourceOfIncome() {
  return (
    <Table
      columns={PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_COLUMNS}
      data={PANEL_ECONOMIC_SECONDARY_SOURCE_OF_INCOME_INFORMATION_TABLE_FAKE_DATA}
    />
  );
}

export default PanelEconomicInformationPageSecondarySourceOfIncome;