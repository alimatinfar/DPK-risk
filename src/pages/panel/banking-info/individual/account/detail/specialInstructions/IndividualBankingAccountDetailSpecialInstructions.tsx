import {
  INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS,
} from "./index.constances.ts";
import useIndividualBankingAccountDetailSpecialInstructions
  from "./hooks/useIndividualBankingAccountDetailSpecialInstructions.ts";
import TableRenderLogic from "../../../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function IndividualBankingAccountDetailSpecialInstructions() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailSpecialInstructions()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS
      }}
    />
  );
}

export default IndividualBankingAccountDetailSpecialInstructions;
