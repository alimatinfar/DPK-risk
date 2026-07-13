import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS
} from "../../individual/account/index.constances.tsx";
import usePanelBankingInfoWithWithdrawalConditionsAccount
  from "./hooks/usePanelBankingInfoWithWithdrawalConditionsAccount.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";

function PanelBankingInfoWithWithdrawalConditionsAccount() {

  const {
    isFetching, error, tableData
  } = usePanelBankingInfoWithWithdrawalConditionsAccount()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_COMMON_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelBankingInfoWithWithdrawalConditionsAccount;
