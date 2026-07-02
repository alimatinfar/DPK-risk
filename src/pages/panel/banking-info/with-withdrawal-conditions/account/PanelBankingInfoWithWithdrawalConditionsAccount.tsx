import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS
} from "../../individual/account/index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelBankingInfoWithWithdrawalConditionsAccount
  from "./hooks/usePanelBankingInfoWithWithdrawalConditionsAccount.ts";

function PanelBankingInfoWithWithdrawalConditionsAccount() {

  const {
    isFetching, error, tableData
  } = usePanelBankingInfoWithWithdrawalConditionsAccount()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelBankingInfoWithWithdrawalConditionsAccount;
