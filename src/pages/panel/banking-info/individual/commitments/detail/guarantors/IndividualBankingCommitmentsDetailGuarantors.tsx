import {
  PANEL_INDIVIDUAL_COMMITMENT_DETAIL_TABLE_COLUMNS
} from "../index.constances.tsx";
import useIndividualBankingCommitmentsDetailGuarantors
  from "./hooks/useIndividualBankingCommitmentsDetailGuarantors.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingCommitmentsDetailGuarantors() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingCommitmentsDetailGuarantors()

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
  );
}

export default IndividualBankingCommitmentsDetailGuarantors;
