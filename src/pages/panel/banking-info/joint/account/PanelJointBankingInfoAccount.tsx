import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS,
} from "./index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelJointBankingInfoAccount from "./hooks/usePanelJointBankingInfoAccount.ts";


function PanelJointBankingInfoAccount() {

  const {
    isFetching, error, tableData
  } = usePanelJointBankingInfoAccount()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_JOINT_BANK_INFO_ACCOUNT_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelJointBankingInfoAccount;
