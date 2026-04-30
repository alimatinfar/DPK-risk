import PanelPageTitle from "../layout/PanelPageTitle.tsx";
import {DetailInfoSection} from "../../../components/others/DetailInfoSection";
import type {DetailInfoSectionProps} from "../../../components/others/DetailInfoSection";

function PanelBasicInformationPage() {

  const info: DetailInfoSectionProps['info'] = {
  label
  }

  return (
    <>
      <PanelPageTitle/>

      <DetailInfoSection
        title='اطلاعات هویتی'
        info={}
      />
    </>
  );
}

export default PanelBasicInformationPage;