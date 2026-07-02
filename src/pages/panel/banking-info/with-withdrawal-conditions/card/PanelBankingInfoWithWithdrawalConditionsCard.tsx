import Table from "../../../../../components/others/Table/Table.tsx";
import {
  PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS
} from "../../individual/card/index.constances.tsx";
import RenderLogic from "../../../../../components/others/RenderLogic/RenderLogic.tsx";
import usePanelBankingInfoWithWithdrawalConditionsCard
  from "./hooks/usePanelBankingInfoWithWithdrawalConditionsCard.ts";

function PanelBankingInfoWithWithdrawalConditionsCard() {

  const {
    isFetching, error, tableData
  } = usePanelBankingInfoWithWithdrawalConditionsCard()

  return (
    <RenderLogic
      isLoading={isFetching} error={error}
      isEmpty={tableData?.length === 0}
    >
      <Table
        columns={PANEL_INDIVIDUAL_CARD_INFO_TABLE_COLUMNS}
        data={tableData}
      />
    </RenderLogic>
  );
}

export default PanelBankingInfoWithWithdrawalConditionsCard;
