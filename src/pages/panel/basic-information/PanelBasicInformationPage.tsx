import PanelPageTitle from "../layout/PanelPageTitle.tsx";
import {DetailInfoSection} from "../../../components/others/DetailInfoSection";
import usePanelBasicInformationPage from "./hooks/usePanelBasicInformationPage.ts";

function PanelBasicInformationPage() {

  const {
    identityInfoList,
    homeAddressList,
    workplaceAddressList
  } = usePanelBasicInformationPage()

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle/>

      <DetailInfoSection
        title='اطلاعات هویتی'
        infoList={identityInfoList}
      />

      <DetailInfoSection
        title='اطلاعات محل سکونت'
        infoList={homeAddressList}
      />

      <DetailInfoSection
        title='اطلاعات محل کار'
        infoList={workplaceAddressList}
      />
    </div>
  );
}

export default PanelBasicInformationPage;