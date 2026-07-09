import {
  PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS,
} from "../index.constances.tsx";
import useIndividualBankingCommitmentsDetailBeneficiaries
  from "./hooks/useIndividualBankingCommitmentsDetailBeneficiaries.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingCommitmentsDetailBeneficiaries() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingCommitmentsDetailBeneficiaries()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS
      }}
    />
  )
}

export default IndividualBankingCommitmentsDetailBeneficiaries;
