import {
  INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS,
} from "./index.constances.ts";
import useIndividualBankingAccountDetailReturnedCheques
  from "./hooks/useIndividualBankingAccountDetailReturnedCheques.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingAccountDetailReturnedCheques() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailReturnedCheques()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS
      }}
    />
  );
}

export default IndividualBankingAccountDetailReturnedCheques;
