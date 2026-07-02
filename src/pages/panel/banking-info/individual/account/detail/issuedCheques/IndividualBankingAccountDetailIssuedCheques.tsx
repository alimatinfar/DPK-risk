import Table from "../../../../../../../components/others/Table/Table.tsx";
import {INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingAccountDetailIssuedCheques from "./hooks/useIndividualBankingAccountDetailIssuedCheques.ts";


function IndividualBankingAccountDetailIssuedCheques() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailIssuedCheques()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
    <Table
      columns={INDIVIDUAL_ACCOUNT_ISSUED_CHEQUES_TABLE_COLUMNS}
      data={tableData}
    />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailIssuedCheques;
