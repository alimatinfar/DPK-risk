import {
  PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS
} from "./index.constances.tsx";
import usePanelIndividualBankingInfoAccount from "./hooks/usePanelIndividualBankingInfoAccount.ts";
import TableRenderLogic from "../../../../../components/others/RenderLogic/TableRenderLogic.tsx";


function PanelIndividualBankingInfoAccount() {

  const {
    isFetching, error, tableData
  } = usePanelIndividualBankingInfoAccount()

  return (
    <TableRenderLogic
      renderLogicProps={{
        error,
        isLoading: isFetching
      }}
      tableProps={{
        data: tableData,
        columns: PANEL_INDIVIDUAL_BANK_INFO_ACCOUNT_TABLE_COLUMNS
      }}
    />
  );
}

export default PanelIndividualBankingInfoAccount;
