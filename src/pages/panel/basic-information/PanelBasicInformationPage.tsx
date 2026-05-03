import PanelPageTitle from "../layout/PanelPageTitle.tsx";
import {DetailInfoSection} from "../../../components/others/DetailInfoSection";
import usePanelBasicInformationPage from "./hooks/usePanelBasicInformationPage.ts";
import RenderLogic from "../../../components/others/RenderLogic/RenderLogic.tsx";

function PanelBasicInformationPage() {

  const {
    identityInfoList, homeAddressList, officeAddressList, workplaceAddressList, isLegalBool,
    loading, error
  } = usePanelBasicInformationPage()

  return (
    <div className='flex flex-col gap-y-4'>
      <PanelPageTitle/>

      <RenderLogic
        isLoading={loading} error={error}
      >
        <DetailInfoSection
          title='اطلاعات هویتی'
          infoList={identityInfoList}
        />

        <DetailInfoSection
          title={isLegalBool ? 'اطلاعات دفتر مرکزی' : 'اطلاعات محل سکونت'}
          infoList={isLegalBool ? officeAddressList : homeAddressList}
        />

        <DetailInfoSection
          title={isLegalBool ? 'اطلاعات محل فعالیت' : 'اطلاعات محل کار'}
          infoList={workplaceAddressList}
        />
      </RenderLogic>
    </div>
  );
}

export default PanelBasicInformationPage;