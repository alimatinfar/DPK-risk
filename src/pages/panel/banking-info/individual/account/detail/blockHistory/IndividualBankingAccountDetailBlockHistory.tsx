import {
  INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS,
} from "./index.constances.ts";
import useIndividualBankingAccountDetailBlockHistory from "./hooks/useIndividualBankingAccountDetailBlockHistory.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingAccountDetailBlockHistory() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailBlockHistory()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS
      }}
    />
  );
}

export default IndividualBankingAccountDetailBlockHistory;
