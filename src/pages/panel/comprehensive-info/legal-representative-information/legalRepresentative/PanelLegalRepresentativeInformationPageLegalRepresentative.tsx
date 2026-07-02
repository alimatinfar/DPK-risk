import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelLegalRepresentativeInformationPageLegalRepresentative
  from "./hooks/usePanelLegalRepresentativeInformationPageLegalRepresentative.ts";


function PanelLegalRepresentativeInformationPageLegalRepresentative() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageLegalRepresentative()

  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageLegalRepresentative;
