import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
} from "../statutoryAuditor/index.constances.ts";
import Table from "../../../../../components/others/Table/Table.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelLegalRepresentativeInformationPageLegalInspector
  from "./hooks/usePanelLegalRepresentativeInformationPageLegalInspector.ts";


function PanelLegalRepresentativeInformationPageLegalInspector() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageLegalInspector()

  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageLegalInspector;
