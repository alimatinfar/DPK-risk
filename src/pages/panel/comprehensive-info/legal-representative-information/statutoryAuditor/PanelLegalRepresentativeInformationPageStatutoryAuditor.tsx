import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_STATUTORY_AUDITOR_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelLegalRepresentativeInformationPageStatutoryAuditor
  from "./hooks/usePanelLegalRepresentativeInformationPageStatutoryAuditor.ts";


function PanelLegalRepresentativeInformationPageStatutoryAuditor() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageStatutoryAuditor()

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

export default PanelLegalRepresentativeInformationPageStatutoryAuditor;
