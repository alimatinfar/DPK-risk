import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS
} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingAccountDetailSaptaMobileNumbers
  from "./hooks/useIndividualBankingAccountDetailSaptaMobileNumbers.ts";


function IndividualBankingAccountDetailSaptaMobileNumbers() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailSaptaMobileNumbers()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={INDIVIDUAL_ACCOUNT_SAPTA_MOBILE_NUMBERS_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailSaptaMobileNumbers;
