import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelLegalRepresentativeInformationPageMajorOwners
  from "./hooks/usePanelLegalRepresentativeInformationPageMajorOwners.ts";


function PanelLegalRepresentativeInformationPageMajorOwners() {

  const {
    error, isFetching, tableData
  } = usePanelLegalRepresentativeInformationPageMajorOwners()

  return (
    <RenderLogic
      error={error} isLoading={isFetching}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_LEGAL_REPRESENTATIVE_MAJOR_OWNERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageMajorOwners;
