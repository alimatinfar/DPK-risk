import {
  PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS
} from "../index.constances.tsx";
import Table from "../../../../../../../components/others/Table/Table.tsx";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingCommitmentsDetailGuarantors
  from "./hooks/useIndividualBankingCommitmentsDetailGuarantors.ts";


function IndividualBankingCommitmentsDetailGuarantors() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingCommitmentsDetailGuarantors()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingCommitmentsDetailGuarantors;
