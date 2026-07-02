import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelLegalRepresentativeInformationPageShareholders
  from "./hooks/usePanelLegalRepresentativeInformationPageShareholders.ts";


function PanelLegalRepresentativeInformationPageShareholders() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageShareholders()

  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_SHAREHOLDERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageShareholders;
