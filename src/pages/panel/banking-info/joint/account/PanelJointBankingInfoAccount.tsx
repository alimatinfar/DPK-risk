import {
  PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS,
} from "./index.constances.tsx";
import usePanelJointBankingInfoAccount from "./hooks/usePanelJointBankingInfoAccount.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelJointBankingInfoAccount() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoAccount()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelJointBankingInfoAccount;
