import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS,
} from "../index.constances.tsx";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingCommitmentsDetailBeneficiaries
  from "./hooks/useIndividualBankingCommitmentsDetailBeneficiaries.ts";


function IndividualBankingCommitmentsDetailBeneficiaries() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingCommitmentsDetailBeneficiaries()

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
  )
}

export default IndividualBankingCommitmentsDetailBeneficiaries;
