import PanelPageTitle from "../../layout/PanelPageTitle.tsx";
import { DetailInfoSection } from "../../../../components/others/DetailInfoSection";
import usePanelBasicInformationPage from "./hooks/usePanelBasicInformationPage.ts";
import RenderLogic from "../../../../components/others/RenderLogic/RenderLogic.tsx";
import PanelBasicInformationPageHistory from "./PanelBasicInformationPageHistory.tsx";
import useModalOpenBoolean from "../../../../hooks/modal/useModalOpenBoolean.ts";
import DisplayModal from "../../../../components/others/Modal/DisplayModal.tsx";
import PanelBasicInfoHistoryModal from "./PanelBasicInfoHistoryModal.tsx";
import useSelectActiveHistory from "./hooks/useSelectActiveHistory.ts";

function PanelBasicInformationPage() {

  const {activeHistory, setActiveHistory} = useSelectActiveHistory();

  const {
    identityInfoList, homeAddressList, officeAddressList, workplaceAddressList, isLegalBool, infoHistoryList,
    loading, error
  } = usePanelBasicInformationPage()

  const {
    openModalHandler: openHistoryModalHandler,
    open: historyModalOpen,
    closeModalHandler: closeHistoryModalHandler
  } = useModalOpenBoolean(false)

  return (
    <>
      <div className='flex flex-col gap-y-4'>
        <PanelPageTitle
          children={
            <RenderLogic
              isLoading={loading}
            >
              <PanelBasicInformationPageHistory
                openHistoryModalHandler={openHistoryModalHandler}
                activeHistory={activeHistory}
              />
            </RenderLogic>
          }
        />

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
      <DisplayModal>
        <PanelBasicInfoHistoryModal
          onClose={closeHistoryModalHandler}
          open={historyModalOpen}
          infoHistoryList={infoHistoryList}
          setHistoryItemClick={setActiveHistory}
          activeItemId={activeHistory ? activeHistory.id : "1"}
        />
      </DisplayModal>
    </>
  );
}

export default PanelBasicInformationPage;