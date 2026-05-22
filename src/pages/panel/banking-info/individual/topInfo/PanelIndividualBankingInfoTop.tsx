import {
  DetailInfoSection2,
} from "../../../../../components/others/DetailInfo/DetailInfoSection2";
import usePanelIndividualBankingInfoTop from "./hooks/usePanelIndividualBankingInfoTop.ts";


function PanelIndividualBankingInfoTop() {

  const {
    infoList
  } = usePanelIndividualBankingInfoTop()

  return (
    <DetailInfoSection2 infoList={infoList} />
  );
}

export default PanelIndividualBankingInfoTop;
