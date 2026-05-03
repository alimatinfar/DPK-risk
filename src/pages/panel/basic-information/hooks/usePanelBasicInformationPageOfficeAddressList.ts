import type {BasicInfoDataTypeForEachPersonType} from "../index.constances.ts";
import usePanelBasicInformationPageAddressList from "./usePanelBasicInformationPageAddressList.ts";
import getActivePersonData from "../../utils/getActivePersonData.ts";


function usePanelBasicInformationPageOfficeAddressList(
  {
    legalData
  }: Pick<BasicInfoDataTypeForEachPersonType, 'legalData'>
) {

  const {isLegalBool} = getActivePersonData()

  const data = legalData?.data

  const {
    addressList: officeAddressList
  } = usePanelBasicInformationPageAddressList({
    disabled: !isLegalBool,
    address: data?.officeAddress || '',
    city: data?.officeCity || '',
    province: data?.officeProvince || '',
    floor: String(data?.officeFloor) || '',
    buildingName: data?.officeBuildingName || '',
    postalCode: String(data?.officePostalCode) || '',
    unit: String(data?.officeUnit) || '',
    postOfficeBox: String(data?.officeMailbox) || '',
    buildingNumber: data?.officePlate || '',
    phone: data?.officePhone || ''
  })

  return {
    officeAddressList
  }
}

export default usePanelBasicInformationPageOfficeAddressList;