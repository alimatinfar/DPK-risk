import Table from "../../../components/others/Table/Table.tsx";
import React from "react";
import {
  PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS,
  PANEL_LEGAL_REPRESENTATIVE_TABLE_FAKE_DATA
} from "./index.constances.ts";
import PanelPageTitle from "../layout/PanelPageTitle.tsx";
import Card from "../../../components/others/Card/Card.tsx";

function PanelLegalRepresentativeInformationPage() {
  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle/>

      <Card>
        <Table
          columns={PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS}
          data={PANEL_LEGAL_REPRESENTATIVE_TABLE_FAKE_DATA}
        />
      </Card>
    </div>
  );
}

export default PanelLegalRepresentativeInformationPage;