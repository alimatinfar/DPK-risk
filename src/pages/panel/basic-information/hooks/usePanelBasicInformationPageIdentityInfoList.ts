import type {DetailInfoSectionProps} from "../../../../components/others/DetailInfoSection";
import getActivePersonDataType from "../../utils/getActivePersonDataType.ts";
import {useMemo} from "react";
import usePanelBasicInformationPageIdentityInfoListNatural
  from "./usePanelBasicInformationPageIdentityInfoListNatural.ts";
import usePanelBasicInformationPageIdentityInfoListLegal from "./usePanelBasicInformationPageIdentityInfoListLegal.ts";


function usePanelBasicInformationPageIdentityInfoList() {

  const {
    isLegal
  } = getActivePersonDataType()

  const {
    naturalOrForeignCitizenInfoList
  } = usePanelBasicInformationPageIdentityInfoListNatural()

  const {
    legalInfoList
  } = usePanelBasicInformationPageIdentityInfoListLegal()

  const identityInfoList: DetailInfoSectionProps['infoList'] = useMemo(function () {
    if (isLegal) return legalInfoList

    return naturalOrForeignCitizenInfoList
  }, [isLegal, naturalOrForeignCitizenInfoList, legalInfoList])

  return {
    identityInfoList
  }
}

export default usePanelBasicInformationPageIdentityInfoList;