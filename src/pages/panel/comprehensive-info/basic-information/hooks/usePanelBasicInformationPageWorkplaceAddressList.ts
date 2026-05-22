import usePanelBasicInformationPageAddressList from "./usePanelBasicInformationPageAddressList.ts";
import type {BasicInfoDataTypeForEachPersonType} from "../index.types.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";


function usePanelBasicInformationPageWorkplaceAddressList(
  {
    legalData, naturalData, foreignCitizenData
  }: BasicInfoDataTypeForEachPersonType
) {

  const {isForeignCitizenBool, isLegalBool} = getActivePersonData()

  const workResponseData = isForeignCitizenBool ?
    foreignCitizenData?.data?.customer : isLegalBool ? legalData?.data : naturalData?.data

  const {
    addressList: workplaceAddressList
  } = usePanelBasicInformationPageAddressList({
    address: workResponseData?.workAddress || '',
    city: workResponseData?.workCity || '',
    province: workResponseData?.workProvince || '',
    floor: workResponseData?.workFloor || '',
    buildingName: workResponseData?.workBuildingName || '',
    postalCode: workResponseData?.workPostalCode || '',
    unit: workResponseData?.workUnit || '',
    postOfficeBox: workResponseData?.workMailbox || '',
    buildingNumber: workResponseData?.workPlate || '',
    phone: workResponseData?.workPhone || ''
  })

  return {
    workplaceAddressList
  }
}

export default usePanelBasicInformationPageWorkplaceAddressList;
