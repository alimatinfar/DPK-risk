import type {DetailInfoSectionProps} from "../../../../../components/others/DetailInfo/DetailInfoSection";
import {useMemo} from "react";
import usePanelBasicInformationPageIdentityInfoListNatural
  from "./usePanelBasicInformationPageIdentityInfoListNatural.ts";
import usePanelBasicInformationPageIdentityInfoListLegal from "./usePanelBasicInformationPageIdentityInfoListLegal.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";
import type {CustomResponseType} from "../../../../../request/types/CustomResponseType.ts";
import type {
  BasicInfoDataTypeForEachPersonType,
  BasicInformationForeignCitizenResponseType,
  BasicInformationLegalResponseType, BasicInformationNaturalResponseType
} from "../index.types.ts";


function usePanelBasicInformationPageIdentityInfoList(
  {
    legalData, naturalData, foreignCitizenData
  }: BasicInfoDataTypeForEachPersonType
) {

  const {
    isLegal, activePersonData
  } = getActivePersonData()

  const {
    naturalOrForeignCitizenInfoList
  } = usePanelBasicInformationPageIdentityInfoListNatural({
    naturalData, foreignCitizenData
  })

  const {
    legalInfoList
  } = usePanelBasicInformationPageIdentityInfoListLegal({
    legalData
  })

  const identityInfoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    if (isLegal(activePersonData)) return legalInfoList

    return naturalOrForeignCitizenInfoList
  }, [isLegal, naturalOrForeignCitizenInfoList, legalInfoList])

  return {
    identityInfoList
  }
}

export default usePanelBasicInformationPageIdentityInfoList;
