import {
  PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS,
  PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS, PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT,
} from "./index.constances.tsx";
import PanelIndividualBankingInfoAccountDetailRender from "./PanelIndividualBankingInfoAccountDetailRender.tsx";


function PanelIndividualBankingInfoAccountDetail() {
  return (
    <PanelIndividualBankingInfoAccountDetailRender
      defaultState={PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_KEYS.RETURNED_CHEQUES}
      renderObject={PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT}
      tabs={PANEL_INDIVIDUAL_BANKING_ACCOUNT_DETAIL_TABS}
    />
  );
}

export default PanelIndividualBankingInfoAccountDetail;
