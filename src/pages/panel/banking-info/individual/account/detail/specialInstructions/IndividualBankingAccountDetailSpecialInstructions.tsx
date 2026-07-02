import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS, INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS_KEYS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingAccountDetailSpecialInstructions
  from "./hooks/useIndividualBankingAccountDetailSpecialInstructions.ts";


function IndividualBankingAccountDetailSpecialInstructions() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailSpecialInstructions()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={INDIVIDUAL_ACCOUNT_SPECIAL_INSTRUCTIONS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailSpecialInstructions;
