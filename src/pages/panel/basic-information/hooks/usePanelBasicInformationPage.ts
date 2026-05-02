import usePanelBasicInformationPageHomeAddressList from "./usePanelBasicInformationPageHomeAddressList.ts";
import usePanelBasicInformationPageIdentityInfoList from "./usePanelBasicInformationPageIdentityInfoList.ts";
import usePanelBasicInformationPageWorkplaceAddressList from "./usePanelBasicInformationPageWorkplaceAddressList.ts";


function usePanelBasicInformationPage() {

  const {
    identityInfoList
  } = usePanelBasicInformationPageIdentityInfoList()

  const {
    homeAddressList
  } = usePanelBasicInformationPageHomeAddressList()

  const {
    workplaceAddressList
  } = usePanelBasicInformationPageWorkplaceAddressList()

  return {
    identityInfoList,
    homeAddressList,
    workplaceAddressList
  }
}

export default usePanelBasicInformationPage;