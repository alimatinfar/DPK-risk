import type {DetailInfoSectionProps} from "../../../../../components/others/DetailInfo/DetailInfoSection";
import {useMemo} from "react";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import type {BasicInfoDataTypeForEachPersonType} from "../index.constances.ts";
import displayDate from "../../../../../utils/display/displayDate.ts";
import displayForeignCitizenNationalId from "../../../../../utils/display/displayForeignCitizenNationalId.ts";
import displayNaturalNationalId from "../../../../../utils/display/displayNaturalNationalId.ts";


function usePanelBasicInformationPageIdentityInfoListNatural(
  {
    naturalData, foreignCitizenData
  }: Pick<BasicInfoDataTypeForEachPersonType, 'naturalData' | 'foreignCitizenData'>
) {

  const {
    isLegal, isForeignCitizen, activePersonData
  } = getActivePersonData()

  const naturalOrForeignCitizenInfoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    const isForeignCitizenBool = isForeignCitizen(activePersonData)
    if (
      isLegal(activePersonData) ||
      (isForeignCitizenBool && !foreignCitizenData?.data) ||
      (!isForeignCitizenBool && !naturalData?.data)
    ) return []

    const customerData = isForeignCitizenBool ? foreignCitizenData?.data.customer : naturalData?.data
    const foreignCitizenSpecificData = isForeignCitizenBool ? foreignCitizenData?.data?.nonCitizenData : null

    return [
      {
        label: 'نام',
        value: customerData?.firstName,
      },
      {
        label: 'نام خانوادگی',
        value: customerData?.lastName
      },
      {
        label: 'نام پدر',
        value: customerData?.fathername,
      },

      ...isForeignCitizen(activePersonData) ? [{
        label: 'نام جد',
        value: foreignCitizenSpecificData?.ancestorsName,
      }] : [],

      {
        label: 'جنسیت',
        value: customerData?.genderTitle,
      },
      ...isForeignCitizen(activePersonData) ? [
        {
          label: 'شناسه فراگیر',
          value: displayForeignCitizenNationalId(foreignCitizenSpecificData?.nationalID),
        },
        {
          label: 'نوع مدرک شناسایی',
          value: foreignCitizenSpecificData?.identificationDocumentTypeTitle,
        },
        {
          label: 'شناسه مدرک شناسایی',
          value: foreignCitizenSpecificData?.identificationDocumentNumber,
        },
        {
          label: 'تاریخ صدور مدرک شناسایی',
          value: displayDate(foreignCitizenSpecificData?.issueDateOfCertificate),
        },
        {
          label: 'تاریخ انقضا مدرک شناسایی',
          value: displayDate(foreignCitizenSpecificData?.expirationDateOfCertificate),
        },
        {
          label: 'نوع گذرنامه',
          value: foreignCitizenSpecificData?.passportType,
        },
        {
          label: 'شماره پروانه اقامت/روادید',
          value: foreignCitizenSpecificData?.residencePermitOrVisaNumber,
        },
        {
          label: 'تاریخ صدور پروانه اقامت/روادید',
          value: displayDate(foreignCitizenSpecificData?.licenseIssuanceDate),
        },
        {
          label: 'تاریخ انقضا پروانه اقامت/روادید',
          value: displayDate(foreignCitizenSpecificData?.licenseExpirationDate),
        },
      ] : [
        {
          label: 'کد ملی',
          value: displayNaturalNationalId(customerData?.nationalID),
        },
        {
          label: 'شماره شناسنامه',
          value: customerData?.shenasnameId,
        },
        {
          label: 'سری و سریال شناسنامه',
          value: `${customerData?.shenasnameSeries} - ${customerData?.shenasnameSerial}`,
        },
      ],

      {
        label: 'تاریخ تولد',
        value: displayDate(customerData?.birthDate),
      },
      {
        label: 'کشور محل تولد',
        value: customerData?.countryOfBirth,
      },
      {
        label: 'شهر محل تولد',
        value: customerData?.cityOfBirth,
      },

      ...isForeignCitizen(activePersonData) ? [
        {
          label: 'ملیت',
          value: foreignCitizenSpecificData?.nationalityTitle,
        },
        {
          label: 'تابعیت',
          value: foreignCitizenSpecificData?.citizenship,
        },
        {
          label: 'تاریخ آخرین ورود به کشور',
          value: displayDate(foreignCitizenSpecificData?.dateOfLastEntryIntoTheCountry),
        },
      ] : [],

      {
        label: 'وضعیت حیات',
        value: customerData?.lifeStatus,
      },
      {
        label: 'تاریخ وفات',
        value: displayDate(customerData?.deathDate),
      },
      {
        label: 'سن',
        value: customerData?.age,
      },
      {
        label: 'تحصیلات',
        value: customerData?.educationLevelTitle,
      },
      {
        label: 'رشته تحصیلی',
        value: customerData?.studyField,
      },
      {
        label: 'وضعیت تاهل',
        value: customerData?.maritalStatusTitle,
      },
      {
        label: 'تاریخ تغییر وضعیت تاهل',
        value: displayDate(customerData?.maritalStatusChangeDate),
      },
      {
        label: 'تلفن همراه',
        value: customerData?.mobile,
      },
    ]
  }, [isLegal, isForeignCitizen, activePersonData, naturalData, foreignCitizenData])

  return {
    naturalOrForeignCitizenInfoList
  }
}

export default usePanelBasicInformationPageIdentityInfoListNatural;
