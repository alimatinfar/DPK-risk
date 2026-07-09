import useIndividualBankingAccountDetailIssuedCheques from "./hooks/useIndividualBankingAccountDetailIssuedCheques.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";
import {INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS} from "./index.constances.ts";


function IndividualBankingAccountDetailIssuedCheques() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailIssuedCheques()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS
      }}
    />
  );
}

export default IndividualBankingAccountDetailIssuedCheques;
