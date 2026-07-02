import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingAccountDetailBlockHistory from "./hooks/useIndividualBankingAccountDetailBlockHistory.ts";


function IndividualBankingAccountDetailBlockHistory() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailBlockHistory()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
    <Table
      columns={INDIVIDUAL_ACCOUNT_BLOCK_HISTORY_TABLE_COLUMNS}
      data={tableData}
    />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailBlockHistory;
