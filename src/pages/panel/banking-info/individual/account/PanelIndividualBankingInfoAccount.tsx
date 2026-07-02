import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelIndividualBankingInfoAccount from "./hooks/usePanelIndividualBankingInfoAccount.ts";


function PanelIndividualBankingInfoAccount() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoAccount()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelIndividualBankingInfoAccount;
