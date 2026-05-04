import type {PanelEconomicInformationActivityNaturalResponseType} from "../index.types.ts";
import useFetchData from "../../../../../request/hooks/useFetchData.ts";
import APIS from "../../../../../request/constances/apis.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import {useMemo} from "react";
import {PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS} from "../index.contances.ts";


function usePanelEconomicInformationPageEconomicActivityNatural() {

  const {getActivePersonNationalId, isLegalBool} = getActivePersonData()

  //natural or foreign citizen
  const {
    data, isFetching, error
  } = useFetchData<PanelEconomicInformationActivityNaturalResponseType>({
    axiosConfig: {
      url: APIS.GET_ECONOMIC_ACTIVITY_INFO_NATURAL,
      params: {
        nationalID: getActivePersonNationalId()
      }
    },
    options: {
      enabled: !isLegalBool
    }
  })

  const naturalTableData = useMemo(function () {
    if (!data?.data) return []

    return data?.data?.map((item, index) => (    {
      id: index,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYMENT_STATUS_SUBTYPE]: item?.employmentStatusType,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYMENT_STATUS]: item?.employmentStatus,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.JOB_CODE]: item?.jobCode,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.JOB_TITLE]: item?.jobTitle,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.OCCUPATIONAL_ACTIVITY_CODE]: item?.jobActivityCode,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.OCCUPATIONAL_ACTIVITY_TITLE]: item?.jobActivityTitle,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYMENT_START_DATE]: item?.workStartDate,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.INSURANCE_TYPE]: item?.insuranceType,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYER_TYPE]: item?.employerType,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYER_ID]: item?.employerId,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.REGISTRATION_DATE]: item?.registrationDate,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYER_NAME]: item?.employerName,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYER_INDUSTRY_CODE]: item?.employerFieldOfWorkCode,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.EMPLOYER_INDUSTRY_TITLE]: item?.employerFieldOfWorkTitle,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.ECONOMIC_CODE]: item?.economicCode,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.BUSINESS_LICENSE]: item?.businessLicense,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.LICENSE_NUMBER]: item?.activityLicenseNumber,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.ISSUING_AUTHORITY]: item?.licensingAuthority,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.LICENSE_ISSUE_DATE]: item?.licenseIssuanceDate,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.LICENSE_EXPIRATION_ISSUE_DATE]: item?.licenseExpirationDate,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.DECLARATION_DATE]: item?.announcementDate,
      [PANEL_ECONOMIC_ACTIVITY_INFORMATION_TABLE_COLUMNS_KEYS.FROM_DATE]: item?.fromDate,
    }))

  }, [data])

  return {
    naturalTableData, naturalLoading: isFetching, naturalError: error
  }
}

export default usePanelEconomicInformationPageEconomicActivityNatural;