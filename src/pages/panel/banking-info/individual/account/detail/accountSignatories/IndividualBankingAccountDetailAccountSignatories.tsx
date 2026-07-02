import Table from "../../../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS,
} from "./index.constances.ts";
import RenderLogic from "../../../../../../../components/others/RenderLogic/RenderLogic.tsx";
import useIndividualBankingAccountDetailAccountSignatories
  from "./hooks/useIndividualBankingAccountDetailAccountSignatories.ts";


function IndividualBankingAccountDetailAccountSignatories() {

  const {
    isFetching, error, tableData
  } = useIndividualBankingAccountDetailAccountSignatories()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_ACCOUNT_DETAIL_SIGNATORIES_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default IndividualBankingAccountDetailAccountSignatories;
