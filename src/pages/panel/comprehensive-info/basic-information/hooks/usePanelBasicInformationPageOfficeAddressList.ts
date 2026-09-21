import type {BasicInfoDataTypeForEachPersonType} from "../index.types.ts";
import usePanelBasicInformationPageAddressList from "./usePanelBasicInformationPageAddressList.ts";
import getActivePersonData from "../../../utils/getActivePersonData.ts";


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
    floor: data?.officeFloor || '',
    buildingName: data?.officeBuildingName || '',
    postalCode: data?.officePostalCode || '',
    unit: data?.officeUnit || '',
    postOfficeBox: data?.officeMailbox || '',
    buildingNumber: data?.officePlate || '',
    phone: data?.officePhone || '',
    phoneLabel: 'تلفن دفتر مرکزی'
  })

  return {
    officeAddressList
  }
}

export default usePanelBasicInformationPageOfficeAddressList;
