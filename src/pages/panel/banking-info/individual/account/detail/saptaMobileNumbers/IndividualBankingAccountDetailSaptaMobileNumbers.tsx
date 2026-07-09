import {
  INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS
} from "./index.constances.ts";
import useIndividualBankingAccountDetailSaptaMobileNumbers
  from "./hooks/useIndividualBankingAccountDetailSaptaMobileNumbers.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingAccountDetailSaptaMobileNumbers() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailSaptaMobileNumbers()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS
      }}
    />
  );
}

export default IndividualBankingAccountDetailSaptaMobileNumbers;
