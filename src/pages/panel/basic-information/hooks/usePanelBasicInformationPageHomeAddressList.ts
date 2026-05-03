import usePanelBasicInformationPageAddressList from "./usePanelBasicInformationPageAddressList.ts";
import type {BasicInfoDataTypeForEachPersonType} from "../index.constances.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";


function usePanelBasicInformationPageHomeAddressList(
  {
    naturalData, foreignCitizenData
  }: Pick<BasicInfoDataTypeForEachPersonType, 'naturalData' | 'foreignCitizenData'>
) {

  const {
    isLegalBool, isForeignCitizenBool
  } = getActivePersonData()

  const homeResponseData = isForeignCitizenBool ?
    foreignCitizenData?.data?.customer : naturalData?.data

  const {
    addressList: homeAddressList
  } = usePanelBasicInformationPageAddressList({
    disabled: isLegalBool,
    address: homeResponseData?.homeAddress || '',
    city: homeResponseData?.homeCity || '',
    province: homeResponseData?.homeProvince || '',
    floor: String(homeResponseData?.homeFloor) || '',
    buildingName: homeResponseData?.homeBuildingName || '',
    postalCode: String(homeResponseData?.homePostalCode) || '',
    unit: String(homeResponseData?.homeUnit) || '',
    postOfficeBox: homeResponseData?.homeMailbox || '',
    buildingNumber: homeResponseData?.homePlate || '',
    phone: homeResponseData?.homePhone || ''
  })

  return {
    homeAddressList
  }
}

export default usePanelBasicInformationPageHomeAddressList;