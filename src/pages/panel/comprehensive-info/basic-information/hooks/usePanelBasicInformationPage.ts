import usePanelBasicInformationPageHomeAddressList from "./usePanelBasicInformationPageHomeAddressList.ts";
import usePanelBasicInformationPageIdentityInfoList from "./usePanelBasicInformationPageIdentityInfoList.ts";
import usePanelBasicInformationPageWorkplaceAddressList from "./usePanelBasicInformationPageWorkplaceAddressList.ts";
import usePanelBasicInformationPageOfficeAddressList from "./usePanelBasicInformationPageOfficeAddressList.ts";
import usePanelBasicInformationHistoryList from "./usePanelBasicInformationHistoryList.ts";
import useFetchCustomerInfo from "./useFetchCustomerInfo.ts";

function usePanelBasicInformationPage() {

  const {
    naturalData, legalData, foreignCitizenData, isLegalBool, loading, error
  } = useFetchCustomerInfo()

  const {
    identityInfoList
  } = usePanelBasicInformationPageIdentityInfoList({
    naturalData, legalData, foreignCitizenData
  })

  const {
    homeAddressList
  } = usePanelBasicInformationPageHomeAddressList({
    naturalData, foreignCitizenData
  })

  const {
    officeAddressList
  } = usePanelBasicInformationPageOfficeAddressList({
    legalData
  })

  const {
    workplaceAddressList
  } = usePanelBasicInformationPageWorkplaceAddressList({
    naturalData, legalData, foreignCitizenData
  })

  // TODO add api call and loading and error handle in ui
  const { infoHistoryList } = usePanelBasicInformationHistoryList()

  return {
    identityInfoList, homeAddressList, officeAddressList, workplaceAddressList, isLegalBool, infoHistoryList,
    loading, error,
  }
}

export default usePanelBasicInformationPage;
