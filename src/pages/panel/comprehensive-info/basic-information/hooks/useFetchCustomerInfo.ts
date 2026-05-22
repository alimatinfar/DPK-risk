import type {
  BasicInformationForeignCitizenResponseType,
  BasicInformationLegalResponseType, BasicInformationNaturalResponseType
} from "../index.constances.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";


function useFetchCustomerInfo() {

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

  const commonCustomerData = isForeignCitizenBool ?
    foreignCitizenData?.data?.customer : isLegalBool ? legalData?.data : naturalData?.data

  return {
    naturalData, legalData, foreignCitizenData, isLegalBool, naturalIsFetching, commonCustomerData,
    legalIsFetching, foreignCitizenIsFetching, naturalError, legalError, foreignCitizenError,
    loading: naturalIsFetching || legalIsFetching || foreignCitizenIsFetching,
    error: naturalError || legalError || foreignCitizenError,
  }
}

export default useFetchCustomerInfo;
