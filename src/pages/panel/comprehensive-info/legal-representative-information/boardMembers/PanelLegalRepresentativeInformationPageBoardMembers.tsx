import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelLegalRepresentativeInformationPageBoardMembers
  from "./hooks/usePanelLegalRepresentativeInformationPageBoardMembers.ts";
import PanelLegalRepresentativeInformationPageBoardMembersTable
  from "./PanelLegalRepresentativeInformationPageBoardMembersTable.tsx";
import PanelLegalRepresentativeInformationPageBoardMembersLoading
  from "./PanelLegalRepresentativeInformationPageBoardMembersLoading.tsx";


function PanelLegalRepresentativeInformationPageBoardMembers() {

  const {
    isFetching, error, tableData
  } = usePanelLegalRepresentativeInformationPageBoardMembers()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
      loadingElement={<PanelLegalRepresentativeInformationPageBoardMembersLoading />}
    >
      <PanelLegalRepresentativeInformationPageBoardMembersTable data={tableData} />
    </RenderLogic>
  );
}

export default PanelLegalRepresentativeInformationPageBoardMembers;
