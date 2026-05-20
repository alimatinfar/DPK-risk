import usePanelBasicInformationPageHomeAddressList from "./usePanelBasicInformationPageHomeAddressList.ts";
import usePanelBasicInformationPageIdentityInfoList from "./usePanelBasicInformationPageIdentityInfoList.ts";
import usePanelBasicInformationPageWorkplaceAddressList from "./usePanelBasicInformationPageWorkplaceAddressList.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import type {
  BasicInformationForeignCitizenResponseType,
  BasicInformationLegalResponseType, BasicInformationNaturalResponseType
} from "../index.constances.ts";
import usePanelBasicInformationPageOfficeAddressList from "./usePanelBasicInformationPageOfficeAddressList.ts";
import usePanelBasicInformationHistoryList from "./usePanelBasicInformationHistoryList.ts";

function usePanelBasicInformationPage() {

  const {
    getActivePersonNationalId, isLegalBool, isForeignCitizenBool, isNaturalBool
  } = getActivePersonData()

  //natural
  const {
    data: naturalData, isFetching: naturalIsFetching, error: naturalError
  } = useFetchData<BasicInformationNaturalResponseType>({
    axiosConfig: {
      url: APIS.GET_NATURAL_CUSTOMER_INFO,
      params: {
        nationalID: getActivePersonNationalId()
      },
    },
    options: {
      enabled: isNaturalBool
    }
  })

  //legal
  const {
    data: legalData, isFetching: legalIsFetching, error: legalError
  } = useFetchData<BasicInformationLegalResponseType>({
    axiosConfig: {
      url: APIS.GET_LEGAL_CUSTOMER_INFO,
      params: {
        nationalID: getActivePersonNationalId()
      }
    },
    options: {
      enabled: isLegalBool
    }
  })

  //foreign citizen
  const {
    data: foreignCitizenData, isFetching: foreignCitizenIsFetching, error: foreignCitizenError
  } = useFetchData<BasicInformationForeignCitizenResponseType>({
    axiosConfig: {
      url: APIS.GET_FOREIGN_CITIZEN_CUSTOMER_INFO,
      params: {
        nationalID: getActivePersonNationalId()
      }
    },
    options: {
      enabled: isForeignCitizenBool
    }
  })

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
    loading: naturalIsFetching || legalIsFetching || foreignCitizenIsFetching,
    error: naturalError || legalError || foreignCitizenError,
  }
}

export default usePanelBasicInformationPage;