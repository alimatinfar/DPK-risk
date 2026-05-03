import {useMemo} from 'react';
import type {DetailInfoSectionProps} from "../../../../components/others/DetailInfoSection";
import getActivePersonData from "../../utils/getActivePersonData.ts";
import type {BasicInfoDataTypeForEachPersonType} from "../index.constances.ts";

function usePanelBasicInformationPageIdentityInfoListLegal(
  {legalData}: Pick<BasicInfoDataTypeForEachPersonType, 'legalData'>
) {

  const {
    isLegal, activePersonData
  } = getActivePersonData()

  const legalInfoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    const data = legalData?.data
    if (
      !isLegal(activePersonData) || !data
    ) return []


    return [
      {
        label: 'نام شخصیت حقوقی',
        value: data?.legalName,
      },
      {
        label: 'نام تجاری',
        value: data?.tradeName,
      },
      {
        label: 'نام اختصاری',
        value: data?.abbreviationName,
      },
      {
        label: 'نوع شخصیت حقوقی',
        value: data?.legalType,
      },
      {
        label: 'تاریخ تاسیس',
        value: data?.establishmentDate,
      },
      {
        label: 'شناسه ملی',
        value: data?.nationalID,
      },
      {
        label: 'وضعیت شناسه ملی',
        value: data?.nationalIdStatus,
      },
      {
        label: 'وضعیت شخصیت حقوقی',
        value: data?.legalEntityStatus,
      },
      {
        label: 'شماره مجوز',
        value: data?.licenseNumber,
      },
      {
        label: 'تاریخ مجوز',
        value: data?.licenseDate,
      },
      {
        label: 'استان محل ثبت',
        value: data?.registrationProvince,
      },
      {
        label: 'شهر/شهرستان محل ثبت',
        value: data?.registrationCity,
      },
      {
        label: 'مرجع ثبت کننده',
        value: data?.registeringAuthority,
      },
      {
        label: 'شماره ثبت',
        value: data?.registrationNumber,
      },
      {
        label: 'تاریخ ثبت',
        value: data?.registrationDate,
      },
      {
        label: 'واحد ثبتی',
        value: data?.registrationUnit,
      },
      {
        label: 'وضعیت نماد اعتماد الکترونیکی',
        value: data?.eNamadStatus,
      },
      {
        label: 'تاریخ انحلال',
        value: data?.dissolutionDate,
      },
      {
        label: 'تاریخ ختم تصفیه',
        value: data?.completionDate,
      },
      {
        label: 'تاریخ تعلیق',
        value: data?.suspensionDate,
      },
      {
        label: 'پست الکترونیکی',
        value: data?.emailAddress,
      },
      {
        label: 'وبگاه',
        value: data?.webSite,
      },
    ]
  }, [activePersonData, isLegal, legalData])

  return {
    legalInfoList
  }
}

export default usePanelBasicInformationPageIdentityInfoListLegal;