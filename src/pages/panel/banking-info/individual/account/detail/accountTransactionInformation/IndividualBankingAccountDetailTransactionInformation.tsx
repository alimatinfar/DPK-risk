import {
  INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS
} from "./index.constances.ts";
import useIndividualBankingAccountDetailTransactionInformation
  from "./hooks/useIndividualBankingAccountDetailTransactionInformation.tsx";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingAccountDetailTransactionInformation() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailTransactionInformation()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS
      }}
    />
  );
}

export default IndividualBankingAccountDetailTransactionInformation;
