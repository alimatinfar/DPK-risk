import type {
  BasicInformationForeignCitizenResponseType,
  BasicInformationLegalResponseType, BasicInformationNaturalResponseType
} from "../index.types.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import type {UsePanelBasicInformationPageProps} from "./usePanelBasicInformationPage.ts";
import {useMemo} from "react";


function useFetchCustomerInfo(
  {activeHistory}: Pick<UsePanelBasicInformationPageProps, 'activeHistory'>
) {

  const {
    getActivePersonNationalId, isLegalBool, isForeignCitizenBool, isNaturalBool
  } = getActivePersonData()

  const isDefaultApi = !activeHistory || activeHistory?.isLasted

  const queryKey = [activeHistory?.id]

  const apiParams = useMemo(function () {
    return isDefaultApi ? {
      nationalID: getActivePersonNationalId()
    } : {
      id: activeHistory?.id
    }
  }, [isDefaultApi, activeHistory?.id])

  //natural
  const {
    data: naturalData, isFetching: naturalIsFetching, error: naturalError
  } = useFetchData<BasicInformationNaturalResponseType>({
    queryKey,
    axiosConfig: {
      url: isDefaultApi ? APIS.GET_NATURAL_CUSTOMER_INFO : APIS.GET_NATURAL_CUSTOMER_INFO_BY_HISTORY_ID,
      params: apiParams,
    },
    options: {
      enabled: isNaturalBool
    }
  })

  //legal
  const {
    data: legalData, isFetching: legalIsFetching, error: legalError
  } = useFetchData<BasicInformationLegalResponseType>({
    queryKey,
    axiosConfig: {
      url: isDefaultApi ? APIS.GET_LEGAL_CUSTOMER_INFO : APIS.GET_LEGAL_CUSTOMER_INFO_BY_HISTORY_ID,
      params: apiParams
    },
    options: {
      enabled: isLegalBool
    }
  })

  //foreign citizen
  const {
    data: foreignCitizenData, isFetching: foreignCitizenIsFetching, error: foreignCitizenError
  } = useFetchData<BasicInformationForeignCitizenResponseType>({
    queryKey,
    axiosConfig: {
      url: isDefaultApi ? APIS.GET_FOREIGN_CITIZEN_CUSTOMER_INFO : APIS.GET_FOREIGN_CITIZEN_CUSTOMER_INFO_BY_HISTORY_ID,
      params: apiParams
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
