import {
  PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS,
  PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS, PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT
} from "./index.constances.tsx";
import PanelIndividualBankingInfoAccountDetailRender
  from "../../../individual/account/detail/PanelIndividualBankingInfoAccountDetailRender.tsx";


function PanelJointBankingInfoAccountDetail() {
  return (
    <PanelIndividualBankingInfoAccountDetailRender
      defaultState={PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_KEYS.JOINT_ACCOUNT_MEMBERS}
      renderObject={PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS_RENDER_OBJECT}
      tabs={PANEL_JOINT_BANKING_ACCOUNT_DETAIL_TABS}
      />
  );
}

export default PanelJointBankingInfoAccountDetail;
