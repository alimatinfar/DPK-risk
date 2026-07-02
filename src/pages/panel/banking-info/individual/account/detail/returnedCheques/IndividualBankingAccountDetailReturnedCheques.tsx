import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingAccountDetailReturnedCheques
  from "./hooks/useIndividualBankingAccountDetailReturnedCheques.ts";


function IndividualBankingAccountDetailReturnedCheques() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailReturnedCheques()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={INDIVIDUAL_ACCOUNT_RETURNED_CHEQUES_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailReturnedCheques;
