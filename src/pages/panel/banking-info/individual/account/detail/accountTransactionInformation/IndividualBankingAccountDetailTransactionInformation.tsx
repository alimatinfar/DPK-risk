import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS
} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingAccountDetailTransactionInformation
  from "./hooks/useIndividualBankingAccountDetailTransactionInformation.tsx";


function IndividualBankingAccountDetailTransactionInformation() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailTransactionInformation()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={INDIVIDUAL_ACCOUNT_TRANSACTION_INFO_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailTransactionInformation;
